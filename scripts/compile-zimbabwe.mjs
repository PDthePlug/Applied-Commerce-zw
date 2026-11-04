// Deterministic content adapter. No application components are copied from the old ZW app.
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import ts from 'typescript';

process.chdir(fileURLToPath(new URL('..',import.meta.url)));
const root='content/zimbabwe/source-curriculum';
const output='public/zimbabwe-curriculum';
const read=file=>JSON.parse(fs.readFileSync(file,'utf8'));
const hash=value=>crypto.createHash('sha256').update(value).digest('hex');
function moduleFrom(file,names){
  const js=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText.replace(/^export\s+/gm,'');
  return new Function(`${js}\nreturn {${names.join(',')}};`)();
}
const {applyZimbabweUnitOverlay}=moduleFrom('content/zimbabwe/overrides.ts',['applyZimbabweUnitOverlay']);
const {zimbabweOLevelPlan,zimbabweTargetTerms}=moduleFrom('content/zimbabwe/structure.ts',['zimbabweOLevelPlan','zimbabweTargetTerms']);
const sourceIndex=read(path.join(root,'index.json'));
const workshopRepair=read('content/zimbabwe/workshop-repair.json');
const inflate=paths=>JSON.parse(zlib.gunzipSync(Buffer.from(paths.map(file=>fs.readFileSync(path.join(root,file),'utf8').trim()).join(''),'base64')));
function bundle(meta){
  const data=inflate(Array.from({length:meta.bundleParts},(_,i)=>`grade-${meta.grade}.part-${i+1}.b64`));
  for(const patchMeta of meta.patches??[]){
    const patch=inflate(patchMeta.parts);
    const term=data.terms.find(t=>t.term===patch.term);
    const numbers=new Set(patch.units.filter(u=>u.type==='lesson').map(u=>u.startLesson));
    term.units=[...term.units.filter(u=>u.type!=='lesson'||!numbers.has(u.startLesson)),...patch.units]
      .sort((a,b)=>(a.type==='lesson'?0:1)-(b.type==='lesson'?0:1)||(a.startLesson??999)-(b.startLesson??999)||a.position-b.position);
  }
  return data;
}
function normalize(unit){
  if(unit.grade!==9||unit.term!==2||unit.type!=='lesson'||unit.startLesson<23||unit.startLesson>34)return unit;
  let skipTable=false;
  return {...unit,blocks:unit.blocks.flatMap(block=>{
    if(block.kind==='text'){
      const text=block.text.trim();
      if(/^CAPS Integration$/i.test(text)){skipTable=true;return [];}
      if(/^Pride 2\.0 executing\.?$/i.test(text)||/^I will now complete Lessons 24[–-]34\b/i.test(text))return [];
      if(/^💭\s*Truth\s*\/\s*Danger\s*\/\s*Your Move\s*$/i.test(text)){skipTable=false;return [{...block,text:'💭 Deepening Insight'}];}
    }else if(skipTable&&block.kind==='table'){skipTable=false;return [];}
    skipTable=false;return [block];
  })};
}
export function placement(grade,term,unit){
  if(grade===8)return [1,unit.startLesson!=null?(unit.startLesson<=26?1:unit.startLesson<=53?2:3):(term===1?1:term===2?2:3)];
  if(grade===9)return [2,unit.type==='assessment'?(term===1?1:term===3?2:3):(unit.startLesson<=34?1:unit.startLesson<=54?2:3)];
  if(grade===10)return [3,term<=2?1:2];
  if(grade===11)return term<=2?[3,3]:[4,1];
  if(grade===12)return [4,term<=2?2:3];
  throw new Error(`Unmapped source grade ${grade}`);
}
const keys=[8,9,10,12];
const bundles=zimbabweOLevelPlan.map((plan,i)=>({grade:keys[i],form:plan.form,title:plan.title,bookTitle:`Applied Commerce Zimbabwe · Form ${plan.form}`,sourceFile:'Zimbabwe edition '+plan.sourceCycles.map(s=>`Grade ${s.grade}`).join(', '),preface:[{kind:'text',type:'paragraph',text:plan.purpose}],terms:[1,2,3].map(term=>({term,intro:[],units:[]}))}));
const provenance=[];
const ids=new Set();
for(const meta of sourceIndex.grades){
  for(const term of bundle(meta).terms){
    for(const raw of term.units){
      if(ids.has(raw.id))throw new Error(`Duplicate unit ${raw.id}`);
      ids.add(raw.id);
      const [form,targetTerm]=placement(meta.grade,term.term,raw);
      const delivery=bundles[form-1];
      const target=delivery.terms[targetTerm-1];
      const unit=applyZimbabweUnitOverlay(normalize(raw));
      if(unit.id===workshopRepair.targetUnitId&&unit.blocks.length===0)unit.blocks=workshopRepair.blocks;
      provenance.push({id:unit.id,sourceGrade:meta.grade,sourceTerm:term.term,form,term:targetTerm,sourceSHA256:hash(JSON.stringify(raw)),localisedSHA256:hash(JSON.stringify(unit))});
      target.units.push({...unit,grade:delivery.grade,term:targetTerm,sourceGrade:meta.grade,sourceTerm:term.term,position:target.units.length});
    }
  }
}
// Use the same stable block identity algorithm as the ZA renderer.
const identified=spawnSync('python3',['-c',`import sys,json\nsys.path.insert(0,'scripts')\nfrom block_identity import identify_blocks\nbundles=json.load(sys.stdin)\nfor bundle in bundles:\n for term in bundle['terms']:\n  identify_blocks(term['intro'])\n  for unit in term['units']: identify_blocks(unit['blocks'])\njson.dump(bundles,sys.stdout,ensure_ascii=False)`],{input:JSON.stringify(bundles),encoding:'utf8',maxBuffer:32*1024*1024});
if(identified.status!==0)throw new Error(identified.stderr);
const data=JSON.parse(identified.stdout);
fs.mkdirSync(output,{recursive:true});
for(const file of fs.readdirSync(output))if(/^(?:grade-.*\.b64|index\.json|provenance\.json|classroom-catalog\.json)$/.test(file))fs.unlinkSync(path.join(output,file));
const index={product:'Applied Commerce Zimbabwe',edition:'zimbabwe',grades:[]};
const catalog=[];
for(const b of data){
  const encoded=zlib.gzipSync(Buffer.from(JSON.stringify(b)),{level:9,mtime:0}).toString('base64');
  const parts=encoded.match(/.{1,60000}/g);
  parts.forEach((part,i)=>fs.writeFileSync(path.join(output,`grade-${b.grade}.part-${i+1}.b64`),part+'\n'));
  const lessons=b.terms.flatMap(t=>t.units).filter(u=>u.type==='lesson');
  index.grades.push({grade:b.grade,form:b.form,title:b.title,bookTitle:b.bookTitle,unitCount:lessons.length,lessonIds:lessons.map(u=>u.id),bundleParts:parts.length,terms:b.terms.map(t=>({term:t.term,unitCount:t.units.filter(u=>u.type==='lesson').length,assessmentCount:t.units.filter(u=>u.type==='assessment').length,title:zimbabweTargetTerms.find(x=>x.form===b.form&&x.term===t.term)?.title}))});
  lessons.forEach(u=>catalog.push({id:u.id,grade:b.grade,term:u.term,title:u.title,number:u.startLesson,sourceUnitSHA256:hash(JSON.stringify(u)),benchmark:false}));
}
// Rebind the shared Lesson Wrap surface to localised source and delivery order.
const wraps={};
const baselineWraps=read('lib/lesson-wraps/registry.json');
for(const b of data){
 const lessons=b.terms.flatMap(t=>t.units).filter(u=>u.type==='lesson');
 for(const [i,u] of lessons.entries()){
  const vocabulary=u.blocks.findIndex(block=>block.kind==='text'&&block.text==='Key Vocabulary');
  const objectives=u.blocks.slice(0,vocabulary<0?8:vocabulary).filter(block=>block.kind==='text'&&block.type==='list');
  const heading=u.blocks.findLast(block=>block.kind==='text'&&/^(?:✨\s*)?Lesson Wrap$/i.test(block.text));
  const closing=u.blocks.findLast(block=>block.kind==='text'&&block.type==='section'&&/^(?:Well Done\.|A Word Before You Go|Ms\. Daniels' (?:Final )?Closing Words)$/.test(block.text));
  const start=heading??(closing&&!u.blocks.slice(u.blocks.indexOf(closing)+1).some(block=>['activity','checkpoint','reflection'].includes(block.type))?closing:null);
  const baseline=baselineWraps[u.id];
  const references=objectives.length?objectives:u.blocks.filter(block=>block.kind==='text').slice(0,4);
  const next=lessons[i+1];
  wraps[u.id]={takeaways:objectives.length?objectives.slice(0,2).map(block=>block.text):(baseline?.takeaways??references.slice(0,2).map(block=>block.text)),why:baseline?.why??objectives.at(-1)?.text??u.title,sourceRefs:references.map(block=>block.id),sourceSHA256:hash(JSON.stringify(u)),authoredHeadingId:heading?.id??null,closingStartId:start?.id??null,blockIds:u.blocks.map(block=>block.id),...(next?{next:{id:next.id,title:next.title,grade:next.grade,term:next.term}}:{})};
 }
}
fs.writeFileSync('content/zimbabwe/wraps.json',JSON.stringify(wraps)+'\n');
fs.writeFileSync(path.join(output,'index.json'),JSON.stringify(index,null,2)+'\n');
fs.writeFileSync(path.join(output,'provenance.json'),JSON.stringify({southAfricaCommit:'b20395c1469354f4f97713c1d683533f61815d09',zimbabweCommit:'bb1e0664c92ebf2d0363f58d91a935b75367c311',units:provenance},null,2)+'\n');
fs.writeFileSync(path.join(output,'classroom-catalog.json'),JSON.stringify(catalog,null,2)+'\n');
const presentation=spawnSync(process.execPath,['scripts/compile-zimbabwe-presentation.mjs'],{encoding:'utf8'});
if(presentation.status!==0)throw new Error(presentation.stderr);
console.log(JSON.stringify({forms:index.grades.map(g=>({form:g.form,lessons:g.unitCount,terms:g.terms.map(t=>t.unitCount)})),totalLessons:index.grades.reduce((n,g)=>n+g.unitCount,0),assessments:data.flatMap(b=>b.terms).flatMap(t=>t.units).filter(u=>u.type==='assessment').length},null,2));
