import fs from 'node:fs';
import {runtimeUnits} from './semantic-census.mjs';
const baseline=await runtimeUnits(),units=await runtimeUnits('/zimbabwe-curriculum');
const sourceDecisions=JSON.parse(fs.readFileSync('lib/interaction-decisions.json'));
const currencyRefs=new Set([...fs.readFileSync('lib/authored-currency-tables.ts','utf8').matchAll(/[a-f0-9]{24}-\d+/g)].map(match=>match[0]));
const currencyShape=rows=>JSON.stringify(rows.map(row=>row.map(cell=>/^(?:R|Currency \+ amount)$/.test(cell)?'<currency>':cell)));
const clean=text=>text.replace(/^(?:(?:📘|💭|✍️?|✅|🏠|📂|⬜)\s*)+/u,'').trim();
const heading=b=>b.kind==='text'&&['section','reflection'].includes(b.type)&&/^(?:Deepening Insight|The Deeper Look(?:\s*→\s*Truth\s*\/\s*Danger\s*\/\s*Your Move)?|Truth\s*\/\s*Danger\s*\/\s*Your Move)$/i.test(clean(b.text));
const boundary=b=>b.kind==='text'&&(/^(?:🏠\s*)?Try This at Home/i.test(b.text)||['section','activity','reflection','checkpoint','portfolio','story'].includes(b.type));
const helpers=['lib/source-selections.ts','lib/learner-interactions.ts','lib/authored-currency-tables.ts','lib/horizon-response.ts'];
const needed=new Set([...Object.keys(sourceDecisions).map(key=>key.split('::')[1]),...helpers.flatMap(file=>[...fs.readFileSync(file,'utf8').matchAll(/[a-f0-9]{24}-\d+/g)].map(match=>match[0]))]);
const aliases={},interactions={},sections=[],ambiguous=[],currencyInputs={};
const add=(u,b,kind,reason)=>{interactions[`${u.id}::${b.id}`]={kind,reason,sourceText:b.text};};
let transferred=0;
for(const unit of units){
 const original=baseline.find(source=>source.id===unit.id);aliases[unit.id]={};
 for(const source of original?.blocks??[]){
  if(!needed.has(source.id))continue;
  if(source.kind==='table'&&currencyRefs.has(source.id)){
   const tables=unit.blocks.filter(block=>block.kind==='table'&&currencyShape(block.rows)===currencyShape(source.rows));
   currencyInputs[unit.id]=[...new Set([...(currencyInputs[unit.id]??[]),...tables.map(block=>block.id)])];
  }
  const matches=unit.blocks.filter(block=>block.kind===source.kind&&(source.kind==='text'?clean(block.text)===clean(source.text):JSON.stringify(block.rows)===JSON.stringify(source.rows)));
  if(matches.length!==1)continue;
  const block=matches[0];aliases[unit.id][block.id]={canonicalId:source.id};
  const decision=sourceDecisions[`${unit.id}::${source.id}`];
  if(decision&&block.kind==='text'){add(unit,block,decision.kind,decision.reason);transferred++;}
 }
 // Apply the same source-directed deeper-section rules to the actual localised
 // prose. Do not carry a source exception onto changed words or make up tasks.
 for(let index=0;index<unit.blocks.length;index++){
  const block=unit.blocks[index];if(!heading(block))continue;
  let end=index+1;while(end<unit.blocks.length&&!boundary(unit.blocks[end]))end++;
  const content=unit.blocks.slice(index+1,end),final=content.at(-1);
  sections.push({unitId:unit.id,headingId:block.id,contentIds:content.map(item=>item.id)});
  for(const [offset,item]of content.entries()){
   if(item.kind!=='text'||/_{3,}|☐/.test(item.text)||interactions[`${unit.id}::${item.id}`])continue;
   const text=item.text.replace(/^(?:Your Next Step|Your Move):\s*/,'');
   const direct=/^(?:What|Who|How|Which|Where|When|If|Are|Is|Do|Did|Can|Will|Would|Given|Re-do|Look at|Think of|Think about|Name|Write|Choose|You received)\b/i.test(text);
   const conceptual=/^(?:Key idea:|Here[’']s the tension:|The Truth:|The Danger:)/.test(item.text);
   const dedicated=content.slice(offset+1).some(next=>next.kind==='text'&&/_{3,}/.test(next.text));
   if(conceptual||dedicated)add(unit,item,'instruction',conceptual?'Conceptual explanation; embedded questions are rhetorical or examples':'Follow-on authored fields already capture this next step');
   else if(item===final&&(direct||/^(?:Your Next Step|The Architect's Question|The Launcher's Question):/.test(item.text))&&item.text.includes('?'))add(unit,item,'reflection','Source-directed final reflection, separate from conceptual explanation; optional disclosure does not make a response mandatory');
   else if(item.text.includes('?')){add(unit,item,'instruction','Preserve as conceptual reading pending educational review; do not manufacture a required response');ambiguous.push({unitId:unit.id,blockId:item.id});}
  }
 }
 for(const block of unit.blocks){
  if(block.kind!=='text'||/_{3,}/.test(block.text)||interactions[`${unit.id}::${block.id}`])continue;
  if(/^The (?:Architect's|Launcher's) Question:/.test(block.text)&&block.text.includes('?'))add(unit,block,'reflection','Explicit source-authored labelled question outside the deeper section; retain combined evidence and stable response parts');
 }
}
const coverage={sections:sections.length,transferred,interactions:Object.keys(interactions).length,ambiguous,sectionBindings:sections};
fs.writeFileSync('content/zimbabwe/presentation.json',JSON.stringify({version:1,aliases,interactions,currencyInputs,coverage},null,2)+'\n');
console.log(JSON.stringify({sections:sections.length,transferred,interactions:Object.keys(interactions).length,ambiguous:ambiguous.length}));
