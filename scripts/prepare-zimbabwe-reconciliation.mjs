import fs from 'node:fs';
import {runtimeUnits} from './semantic-census.mjs';
const output=process.argv[2];
if(!output||!fs.existsSync(output))throw Error('Pass a migration file already created by the Supabase CLI.');
const units=await runtimeUnits('/zimbabwe-curriculum');
const quote=text=>"'"+text.replaceAll("'","''")+"'";
const preamble=`-- Zimbabwe rebuild reconciliation; preserves all existing learner and staff rows.
-- Apply only to the inspected original Zimbabwe backend, never the ZA baseline.
begin;
do $$ begin
 if not exists(select 1 from public.curriculum_releases where release_key='ac-zw-forms-1-4' and metadata->>'market'='ZW') then
  raise exception 'The original Zimbabwe release is required';
 end if;
 if to_regprocedure('public.save_learning_changes_for_account(uuid,jsonb,text)') is not null then
  raise exception 'Reconciliation is already present; inspect migration history';
 end if;
end $$;
create table private.zimbabwe_runtime_units(
 unit_id text primary key, delivery_grade smallint not null check(delivery_grade in (8,9,10,12)),
 delivery_term smallint not null check(delivery_term between 1 and 3),
 form smallint not null check(form between 1 and 4),
 source_grade smallint not null,source_term smallint not null
);
alter table private.zimbabwe_runtime_units enable row level security;
revoke all on private.zimbabwe_runtime_units from public,anon,authenticated;
insert into private.zimbabwe_runtime_units values
${units.map(u=>`(${quote(u.id)},${u.grade},${u.term},${({8:1,9:2,10:3,12:4})[u.grade]},${u.sourceGrade},${u.sourceTerm})`).join(',\n')};
insert into public.curriculum_releases(release_key,source_release_key,runtime_format_version,compiler_version,schema_version,metadata)
values('ac-runtime-3','ac-zw-forms-1-4',3,'ac-zw-rebuild-v1',2,
 '{"market":"ZW","delivery_forms":4,"delivery_terms_per_form":3,"lessons":382,"assessments":3,"source_ids_preserved":true,"curriculum_approval_status":"not Ministry or ZIMSEC endorsement"}'::jsonb);
`;
const files=[
 '20261009083654_pending_role_assignments_and_signup_claim.sql',
 '20261009084320_pending_role_assignments_deny_client_access.sql',
 '20261009121509_add_portfolio_review_guidance.sql',
 '20261009151609_revoke_excessive_client_table_privileges.sql',
 '20261012091449_protect_assessment_decisions.sql',
 '20261012095153_learning_revision_sync.sql',
 '20261012095157_active_role_sessions.sql',
 '20261012102159_account_bound_learning_saves.sql',
 '20261012103733_require_revision_checked_writes.sql',
 '20261012165126_reject_stale_reviews_without_retry_loop.sql',
];
let sql=preamble;
for(const file of files){
 let text=fs.readFileSync('supabase/migrations/'+file,'utf8').replace(/^\s*(begin|commit);\s*$/gmi,'');
 if(file.includes('learning_revision_sync')){
  text=text.replace("'^(8|9|10|11|12)$'",()=>"'^(8|9|10|12)$'");
  text=text.replace('v_grade:=v_match[1]::smallint; v_term:=v_match[2]::smallint;',`select delivery_grade,delivery_term into v_grade,v_term from private.zimbabwe_runtime_units where unit_id=v_unit;
      if not found then raise invalid_parameter_value using message='Lesson is outside the Zimbabwe release'; end if;`);
  text=text.replace("if v_match is null then raise invalid_parameter_value using message='Invalid opened lesson'; end if;",`select delivery_grade,delivery_term into v_grade,v_term from private.zimbabwe_runtime_units where unit_id=p_opened_unit;
    if not found then raise invalid_parameter_value using message='Invalid opened lesson'; end if;`);
  text=text.replace("v_match[1]::smallint,v_match[2]::smallint,p_opened_unit","v_grade,v_term,p_opened_unit");
 }
 sql+='\n-- Reused verified contract: '+file+'\n'+text+'\n';
}
sql+=`
-- Maintain the old Zimbabwe delivery fields when current clients set a Form key.
create function private.set_zimbabwe_delivery_form() returns trigger
language plpgsql set search_path='' as $$
begin
 if tg_table_name='learner_profiles' then
  new.current_form:=case new.current_grade when 8 then 1 when 9 then 2 when 10 then 3 when 12 then 4 else new.current_form end;
 else
  new.zimbabwe_form:=case new.grade when 8 then 1 when 9 then 2 when 10 then 3 when 12 then 4 else new.zimbabwe_form end;
 end if;
 return new;
end $$;
revoke all on function private.set_zimbabwe_delivery_form() from public,anon,authenticated;
create trigger set_zimbabwe_delivery_form before insert or update of current_grade on public.learner_profiles for each row execute function private.set_zimbabwe_delivery_form();
create trigger set_zimbabwe_delivery_form before insert or update of grade on public.cohorts for each row execute function private.set_zimbabwe_delivery_form();
notify pgrst,'reload schema';
commit;
`;
fs.writeFileSync(output,sql);
console.log(JSON.stringify({units:units.length,reusedContracts:files.length,migration:output}));
