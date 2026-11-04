import registry from './lesson-wraps/registry.json';
import localisedRegistry from '../content/zimbabwe/wraps.json';
import type {ContentBlock} from './types';
export type LessonWrapContent={takeaways:string[];why:string;sourceRefs:string[];sourceSHA256:string;authoredHeadingId:string|null;closingStartId:string|null;next?:{id:string;title:string;grade:number;term:number}};
// Deliberately no generic fallback: missing source-reviewed copy is a coverage failure.
export function lessonWrapFor(unitId:string,blocks?:ContentBlock[]):LessonWrapContent|null{
 const local=(localisedRegistry as Record<string,LessonWrapContent&{blockIds:string[]}>)[unitId];
 if(local&&blocks&&local.blockIds.length===blocks.length&&local.blockIds.every((id,i)=>id===blocks[i].id))return local;
 return (registry as Record<string,LessonWrapContent>)[unitId]??null;
}
