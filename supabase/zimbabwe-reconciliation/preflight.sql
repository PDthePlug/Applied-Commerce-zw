-- Read-only inventory. Run after restoring hkarxzjmttjetotduvyx.
-- Returns schema metadata and aggregate counts, never learner answers or emails.
select version,name from supabase_migrations.schema_migrations order by version;
select table_schema,table_name,column_name,data_type
from information_schema.columns where table_schema in ('public','private')
order by table_schema,table_name,ordinal_position;
select n.nspname as schema,p.proname,pg_get_function_identity_arguments(p.oid) as arguments,
 p.prosecdef as security_definer,p.proconfig,pg_get_functiondef(p.oid) as definition
from pg_proc p join pg_namespace n on n.oid=p.pronamespace
where n.nspname in ('public','private') and p.prokind='f' order by 1,2,3;
select schemaname,tablename,policyname,permissive,roles,cmd,qual,with_check
from pg_policies where schemaname in ('public','private') order by 1,2,3;
select table_schema,table_name,grantee,privilege_type from information_schema.role_table_grants
where table_schema in ('public','private') order by 1,2,3,4;
select release_key,runtime_format_version,schema_version,metadata from public.curriculum_releases;
select 'profiles' as relation,count(*) from public.profiles
union all select 'learner_profiles',count(*) from public.learner_profiles
union all select 'prompt_responses',count(*) from public.prompt_responses
union all select 'lesson_progress',count(*) from public.lesson_progress
union all select 'lesson_notes',count(*) from public.lesson_notes
union all select 'evidence_records',count(*) from public.evidence_records
union all select 'evidence_reviews',count(*) from public.evidence_reviews;
select curriculum_version,grade,term,count(*) from public.lesson_progress group by 1,2,3;
select curriculum_version,
 case when prompt_key like '%::prompt-%' then 'stable'
 when prompt_key like '%::block-%' then 'positional' else 'other' end as key_kind,
 count(*) from public.prompt_responses group by 1,2;
