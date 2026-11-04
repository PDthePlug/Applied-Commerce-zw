import {createHash} from 'node:crypto';
import {renderModule} from '../../tests/lib/render-module.mjs';
const {validateTeachingPlan,teachingSource}=await import(renderModule('lib/classroom/teaching-plan.ts'));
export const digest=value=>createHash('sha256').update(JSON.stringify(value)).digest('hex');

// The reviewer supplies explicit field decisions and changed block mappings.
// Neither position nor similarity is evidence that a teaching anchor survived.
export function adaptZimbabwePlan(original,sourceBinding,unit,review){
 if(original.lessonId!==unit.id||sourceBinding.lessonId!==unit.id||digest(original)!==sourceBinding.planSHA256)throw Error('Original teaching plan differs from the pinned ZA release.');
 validateTeachingPlan(original,sourceBinding.source);
 if(review?.lessonId!==unit.id||review.sourcePlanSHA256!==sourceBinding.planSHA256||review.targetUnitSHA256!==digest(unit)||!review.reviewer?.trim()||review.contextReviewed!==true)throw Error('An explicit Zimbabwe context and source review is required.');
 const paths=Object.keys(original.fields).sort();
 if(JSON.stringify(Object.keys(review.fields??{}).sort())!==JSON.stringify(paths))throw Error('Every instructional field needs an explicit keep or replacement decision.');
 const plan=structuredClone(original),targetIds=new Set(unit.blocks.map(block=>block.id));
 const block=id=>{
  const mapped=review.blockMap?.[id]??id;
  if(!targetIds.has(mapped))throw Error('A referenced teaching block has no verified Zimbabwe mapping.');
  return mapped;
 };
 plan.version='zw-teaching-v1';plan.sourceUnitSHA256=digest(unit);
 for(const path of paths){
  const decision=review.fields[path];
  if(decision?.action==='keep')continue;
  if(decision?.action!=='replace'||typeof decision.value!=='string'||!decision.value.trim())throw Error('Invalid instructional field decision.');
  plan.fields[path]=decision.value;
 }
 for(const moment of plan.moments){
  moment.placement.blockId=block(moment.placement.blockId);
  moment.placement.review=`Zimbabwe source alignment reviewed by ${review.reviewer}.`;
  moment.sourceBlockIds=moment.sourceBlockIds.map(block);
 }
 plan.activityCoverage=plan.activityCoverage.map(row=>({...row,blockId:block(row.blockId)}));
 plan.review={...plan.review,sourceRead:true,alignmentReviewed:true,limits:[...plan.review.limits,'Zimbabwe adaptation; classroom timing and educational effectiveness still require educator review.']};
 const source=teachingSource(unit,digest(unit));
 validateTeachingPlan(plan,source);
 return {plan,binding:{lessonId:unit.id,planSHA256:digest(plan),source,reviewer:review.reviewer,sourcePlanSHA256:sourceBinding.planSHA256}};
}
