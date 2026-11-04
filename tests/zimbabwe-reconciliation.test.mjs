import test,{before,after} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {PGlite} from '@electric-sql/pglite';
import {pgcrypto} from '@electric-sql/pglite/contrib/pgcrypto';
import {AUTH_FIXTURE_SQL} from '../scripts/lib/database-fixture.mjs';
const db=new PGlite({extensions:{pgcrypto}});
const uid=n=>`00000000-0000-4000-8000-${String(n).padStart(12,'0')}`;
const learner=uid(1),other=uid(2),staff=uid(3);
const migration=fs.readdirSync('supabase/zimbabwe-reconciliation/migrations').find(file=>file.endsWith('_reconcile_zimbabwe_rebuild.sql'));
async function asUser(id,sql,values=[]){
 await db.exec('begin; set local role authenticated;');
 try{await db.query("select set_config('request.jwt.claim.sub',$1,true),set_config('request.jwt.claims',json_build_object('session_id',$1)::text,true)",[id]);const result=await db.query(sql,values);await db.exec('commit');return result;}catch(error){await db.exec('rollback');throw error;}
}
const save=(id,changes,opened=null)=>asUser(id,'select public.save_learning_changes_for_account($1,$2,$3) as result',[id,JSON.stringify(changes),opened]);
before(async()=>{
 await db.exec(AUTH_FIXTURE_SQL);
 await db.exec(fs.readFileSync('tests/fixtures/zimbabwe-legacy-schema.sql','utf8'));
 for(const id of [learner,other,staff]){await db.query('insert into auth.users(id,email) values($1,$2)',[id,id+'@audit.invalid']);await db.query('insert into auth.sessions(id,user_id) values($1,$1)',[id]);}
 await db.query("insert into public.evidence_records(id,learner_id,response_key,response_value,status) values($1,$2,'legacy-key','Preserved historical evidence','accepted')",[uid(10),learner]);
 await db.query("insert into public.evidence_reviews(id,evidence_record_id,reviewer_id,status,feedback) values($1,$2,$3,'accepted','Preserved historical review')",[uid(11),uid(10),staff]);
 await db.exec(fs.readFileSync('supabase/zimbabwe-reconciliation/migrations/'+migration,'utf8'));
});
after(()=>db.close());
test('Zimbabwe reconciliation preserves original accounts, legacy evidence and release identities',async()=>{
 assert.equal((await db.query('select count(*) as n from auth.users')).rows[0].n,3);
 const evidence=(await db.query('select response_value,status from public.evidence_records where id=$1',[uid(10)])).rows[0];
 assert.deepEqual(evidence,{response_value:'Preserved historical evidence',status:'accepted'});
 const review=(await db.query('select feedback,response_value_at_review from public.evidence_reviews where id=$1',[uid(11)])).rows[0];
 assert.deepEqual(review,{feedback:'Preserved historical review',response_value_at_review:null});
 const releases=(await db.query('select release_key from public.curriculum_releases order by release_key')).rows.map(row=>row.release_key);
 assert.deepEqual(releases,['ac-runtime-3','ac-zw-forms-1-4']);
 assert.equal((await db.query('select count(*) as n from private.zimbabwe_runtime_units')).rows[0].n,385);
 assert.deepEqual((await db.query("select c.relname from pg_class c join pg_namespace n on n.oid=c.relnamespace where n.nspname in ('public','private') and c.relkind='r' and not c.relrowsecurity")).rows,[]);
});
test('revision saves persist Zimbabwe delivery coordinates while retaining original bridge unit IDs',async()=>{
 for(const [unit,grade,term] of [['g11-t3-l41-041',12,1],['g12-t1-l01-001',12,2],['g9-t2-l23-024',9,1]]){
  const known=(await db.query('select unit_id from private.zimbabwe_runtime_units where unit_id=$1',[unit])).rows[0];assert.ok(known,unit);
  await save(learner,[{kind:'note',key:unit,value:'Synthetic bridge note',expected:0}],unit);
  assert.deepEqual((await db.query('select grade,term,unit_id from public.lesson_notes where unit_id=$1',[unit])).rows[0],{grade,term,unit_id:unit});
  assert.deepEqual((await db.query('select grade,term from public.lesson_progress where unit_id=$1',[unit])).rows[0],{grade,term});
 }
 await assert.rejects(save(learner,[],'g11-t4-made-up'),/Invalid opened lesson/);
 await assert.rejects(save(learner,[{kind:'note',key:'g8-t1-made-up',value:'No',expected:0}]),/outside the Zimbabwe release/);
});
test('Zimbabwe profile Form field, account boundaries and conflict checks remain consistent',async()=>{
 await save(learner,[{kind:'profile',key:'self',value:{displayName:'Synthetic',grade:12},expected:0}]);
 assert.deepEqual((await db.query('select current_grade,current_form from public.learner_profiles where user_id=$1',[learner])).rows[0],{current_grade:12,current_form:4});
 const key='g8-t1-l01-001::prompt-fixture::blank-0';
 const first=await save(learner,[{kind:'prompt',key,value:'First device',expected:0}]);
 assert.equal(first.rows[0].result[0].conflict,false);
 const stale=await save(learner,[{kind:'prompt',key,value:'Offline device',expected:0}]);
 assert.equal(stale.rows[0].result[0].conflict,true);
 assert.equal(stale.rows[0].result[0].value,'First device');
 assert.equal((await asUser(other,'select * from public.prompt_responses')).rows.length,0);
 await assert.rejects(asUser(other,'select public.save_learning_changes_for_account($1,$2)',[learner,'[]']),/active account changed/);
 await assert.rejects(asUser(learner,"update public.prompt_responses set response='\"bypass\"'"),/permission denied/);
 await db.query('delete from auth.sessions where id=$1',[learner]);
 await assert.rejects(save(learner,[]),/Sign in/);
});
