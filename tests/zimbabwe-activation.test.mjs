import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {runtimeUnits} from '../scripts/semantic-census.mjs';
import {renderModule} from './lib/render-module.mjs';
import {adaptZimbabwePlan,digest} from '../scripts/lib/zimbabwe-teaching-adapter.mjs';
const {teachingSource}=await import(renderModule('lib/classroom/teaching-plan.ts'));
const unit=(await runtimeUnits('/zimbabwe-curriculum')).find(unit=>unit.type==='lesson');
function fixture(){
 const source=teachingSource(unit,digest(unit));
 const fields=Object.fromEntries(['purpose.0','objectives.0','outcome.0','prerequisites.0','materials.0','vocabulary.0','misconceptions.0','context.0','access.0','period.title','stage.title'].map(key=>[key,'Synthetic private instructional text '+key]));
 const group={heading:'Preparation',fields:Object.keys(fields).filter(key=>!['period.title','stage.title'].includes(key))};
 const plan={schemaVersion:2,status:'educator-review-required',version:'fixture',lessonId:unit.id,sourceUnitSHA256:digest(unit),fields,preparation:[group],periods:[{title:'period.title',minutes:45,moments:['stage']}],moments:[{id:'stage',title:'stage.title',period:0,schedule:'classroom',minutes:45,placement:{kind:'section',blockId:source.sections[0],edge:'before',review:'Synthetic fixture'},sourceBlockIds:[source.sections[0]],core:[group],depth:[],links:[]}],activityCoverage:source.activityIds.map(blockId=>({blockId,momentId:'stage',disposition:'classroom'})),review:{sourceRead:true,alignmentReviewed:true,timingRationale:'Synthetic fixture only',limits:['Synthetic']}};
 const binding={lessonId:unit.id,source,planSHA256:digest(plan)};
 const review={lessonId:unit.id,sourcePlanSHA256:digest(plan),targetUnitSHA256:digest(unit),reviewer:'Synthetic reviewer',contextReviewed:true,fields:Object.fromEntries(Object.keys(fields).map(key=>[key,{action:'keep'}]))};
 return {plan,binding,review};
}
test('Zimbabwe teacher adaptation retains original fields, timings and source identity with explicit context review',()=>{
 const {plan,binding,review}=fixture();review.fields['context.0']={action:'replace',value:'Synthetic Zimbabwe classroom context.'};
 const result=adaptZimbabwePlan(plan,binding,unit,review);
 assert.equal(result.plan.fields['context.0'],'Synthetic Zimbabwe classroom context.');
 assert.equal(result.plan.fields['purpose.0'],plan.fields['purpose.0']);
 assert.deepEqual(result.plan.periods,plan.periods);
 assert.equal(result.binding.planSHA256,digest(result.plan));
 assert.equal(plan.version,'fixture');
});
test('Zimbabwe adaptation rejects stale source, incomplete field review and unverified positional remapping',()=>{
 const {plan,binding,review}=fixture();
 for(const mutate of [r=>r.contextReviewed=false,r=>delete r.fields['context.0'],r=>r.targetUnitSHA256='stale',r=>r.sourcePlanSHA256='stale']){
  const copy=structuredClone(review);mutate(copy);assert.throws(()=>adaptZimbabwePlan(plan,binding,unit,copy));
 }
 const changed=structuredClone(unit);changed.blocks=changed.blocks.map(block=>({...block,id:'zw-'+block.id}));
 const mappedReview={...review,targetUnitSHA256:digest(changed)};
 assert.throws(()=>adaptZimbabwePlan(plan,binding,changed,mappedReview),/no verified Zimbabwe mapping/);
 mappedReview.blockMap=Object.fromEntries(unit.blocks.map(block=>[block.id,'zw-'+block.id]));
 const adapted=adaptZimbabwePlan(plan,binding,changed,mappedReview);
 assert.ok(adapted.plan.moments.every(moment=>moment.placement.blockId.startsWith('zw-')));
});
test('local backend mode never requests Supabase session refresh even with staged credentials',async()=>{
 const code=fs.readFileSync('lib/supabase/proxy.ts','utf8');
 const ts=await import('typescript');
 const body=ts.default.transpileModule(code.replace(/^import .*;\n/gm,''),{compilerOptions:{module:ts.default.ModuleKind.ESNext,target:ts.default.ScriptTarget.ES2022}}).outputText;
 const api=await import('data:text/javascript;base64,'+Buffer.from('const NextResponse={next:()=>({local:true})};const appliedCommerceBackendMode=()=>"local";const createServerClient=()=>{throw Error("Unexpected backend call");};\n'+body).toString('base64'));
 assert.deepEqual(await api.updateSession({}),{local:true});
});
