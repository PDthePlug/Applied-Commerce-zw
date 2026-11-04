import bindings from '../content/zimbabwe/presentation.json';
type Alias={canonicalId:string};
const aliases=bindings.aliases as Record<string,Record<string,Alias>>;
// Interpret the localised task using its verified source counterpart. Never
// change a stored response key, move an answer, or use document position.
export function canonicalBlockId(unitId:string,blockId?:string){
 return blockId?(aliases[unitId]?.[blockId]?.canonicalId??blockId):blockId;
}
export function localBlockId(unitId:string,canonicalId:string,blocks?:Array<{id?:string}>){
 if(blocks?.some(block=>block.id===canonicalId))return canonicalId;
 return Object.entries(aliases[unitId]??{}).find(([,alias])=>alias.canonicalId===canonicalId)?.[0]??canonicalId;
}
