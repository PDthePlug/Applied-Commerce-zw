import fs from 'node:fs';
import path from 'node:path';
import {runtimeUnits} from './semantic-census.mjs';
import {sealContent} from './classroom-content.mjs';
import {adaptZimbabwePlan} from './lib/zimbabwe-teaching-adapter.mjs';

const args=process.argv.slice(2),option=name=>args[args.indexOf(name)+1];
for(const flag of ['--source-payload','--reviews','--key-file','--output'])if(!args.includes(flag)||!option(flag))throw Error('Provide private --source-payload, --reviews, --key-file and --output paths. Never pass key values.');
const read=file=>JSON.parse(fs.readFileSync(file,'utf8'));
const source=read(option('--source-payload')),reviews=read(option('--reviews'));
const manifest=read('content/instructional/teaching-manifest.v2.json');
if(source.version!==manifest.version||source.plans?.length!==manifest.plans.length||new Set(source.plans.map(p=>p.lessonId)).size!==manifest.plans.length)throw Error('A complete authorised ZA teaching-plan export is required.');
const lessons=(await runtimeUnits('/zimbabwe-curriculum')).filter(unit=>unit.type==='lesson');
const plans=[],bindings=[];
for(const unit of lessons){
 const original=source.plans.find(plan=>plan.lessonId===unit.id),binding=manifest.plans.find(item=>item.lessonId===unit.id);
 if(!original||!binding)throw Error('The original guide is missing.');
 const result=adaptZimbabwePlan(original,binding,unit,reviews.find(review=>review.lessonId===unit.id));
 plans.push(result.plan);bindings.push(result.binding);
}
const key=Buffer.from(fs.readFileSync(option('--key-file'),'utf8').trim(),'base64');
const envelope=sealContent(Buffer.from(JSON.stringify({version:'zw-teaching-v1',plans})),key,'applied-commerce-zimbabwe-classroom-v1');
// Write only after all 382 plans validate; no partial availability publication.
const output=path.resolve(option('--output'));fs.mkdirSync(output,{recursive:true});
fs.writeFileSync(path.join(output,'teaching-plans.enc.json'),JSON.stringify(envelope)+'\n');
fs.writeFileSync(path.join(output,'teaching-manifest.json'),JSON.stringify({version:'zw-teaching-v1',plaintextSHA256:envelope.plaintextSHA256,plans:bindings},null,2)+'\n');
fs.writeFileSync(path.join(output,'teaching-availability.json'),JSON.stringify({version:'zw-teaching-v1',lessonIds:plans.map(plan=>plan.lessonId)})+'\n');
console.log(JSON.stringify({adapted:plans.length,encrypted:true,status:'educator-review-required'}));
