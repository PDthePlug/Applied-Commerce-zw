import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';
import {runtimeUnits} from '../scripts/semantic-census.mjs';import {renderModule} from './lib/render-module.mjs';
const units=await runtimeUnits('/zimbabwe-curriculum');
const bindings=JSON.parse(fs.readFileSync('content/zimbabwe/presentation.json'));
const {ContentBlocks}=await import(renderModule('components/content-blocks.tsx'));
const {deepeningHeading,reviewedInteraction,abilityAnnotations}=await import(renderModule('lib/learner-interactions.ts'));
const {learningSections}=await import(renderModule('lib/semantic-learning.ts'));
const {sourceSelection}=await import(renderModule('lib/source-selections.ts'));
const {responseView}=await import(renderModule('lib/response-identity.ts'));
const render=(u,answers={})=>renderToStaticMarkup(React.createElement(ContentBlocks,{blocks:u.blocks,unitId:u.id,unitType:u.type,promptResponses:answers,onSavePromptResponse:()=>{}}));
test('every active Zimbabwe deeper section receives the current ZA disclosure and semantic treatment',()=>{
 let count=0;
 for(const unit of units){
  const before=JSON.stringify(unit),headings=unit.blocks.filter(deepeningHeading),html=render(unit);
  assert.equal((html.match(/class="deepening-insight"/g)??[]).length,headings.length,unit.id);
  assert.ok(!/<details class="deepening-insight"[^>]*\bopen/.test(html),unit.id);
  assert.ok(!html.includes('insight-source-title">💭 Deepening Insight'),unit.id);
  const sections=learningSections(unit.blocks,unit.type);
  for(const heading of headings){const section=sections.find(s=>s.anchor==='learning-'+heading.id);assert.equal(section.mode,'understand',unit.id);assert.equal(section.context,null,unit.id);}
  assert.equal(JSON.stringify(unit),before);count+=headings.length;
 }
 assert.equal(count,373);assert.equal(bindings.coverage.sections,count);
});
test('localised interaction decisions are bound to exact current text and reject changed source',()=>{
 assert.equal(Object.keys(bindings.interactions).length,1154);
 for(const [key,decision]of Object.entries(bindings.interactions)){
  const [id,blockId]=key.split('::'),unit=units.find(u=>u.id===id),block=unit.blocks.find(b=>b.id===blockId);
  assert.equal(block.text,decision.sourceText,key);assert.deepEqual(reviewedInteraction(id,block),decision);
  assert.equal(reviewedInteraction(id,{...block,text:block.text+' Changed question.'}),null,key);
 }
});
test('Zimbabwe ability confidence, circle map and all five reviewed selections use local answer identities',()=>{
 const ability=units.find(u=>u.id==='g8-t1-l03-003'),annotations=abilityAnnotations(ability.id,ability.blocks);
 assert.equal(annotations.ids.length,10);
 const answers=Object.fromEntries(annotations.ids.flatMap(id=>[[`${ability.id}::prompt-${id}::blank-0`,'A skill'],[`${ability.id}::prompt-${id}::annotation-confidence`,'believe']]));
 const html=render(ability,answers);assert.equal((html.match(/class="confidence-marker-buttons"/g)??[]).length,10);assert.equal((html.match(/aria-pressed="true"/g)??[]).length,10);
 assert.ok(render(units.find(u=>u.id==='g8-t1-l04-004')).includes('circle-map-control'));
 let selections=0;for(const u of units)u.blocks.forEach((b,i)=>{if(sourceSelection(u.id,u.blocks,i,{}))selections++;});assert.equal(selections,5);
 const first=units.find(u=>u.id==='g8-t1-l01-001');const index=first.blocks.findIndex((b,i)=>sourceSelection(first.id,first.blocks,i,{}));
 const originalIds=first.blocks.map(b=>b.id);const saved=Object.fromEntries(first.blocks.filter(b=>b.kind==='text'&&b.text.includes('___')).map(b=>[`${first.id}::prompt-${b.id}::blank-0`,'Saved original belief']));
 const options=sourceSelection(first.id,first.blocks,index,responseView(first.id,first.blocks,saved)).options;assert.equal(options.length,2);assert.ok(options.every(value=>value==='Saved original belief'));assert.deepEqual(first.blocks.map(b=>b.id),originalIds);
});
test('reviewed Zimbabwe currency placeholders remain answerable and ordinary reading examples remain reading',()=>{
 const unit=units.find(u=>u.id==='g12-t3-l44-044');const html=render(unit);
 assert.ok(html.includes('currency and amount'));assert.ok(html.includes('authored-amount-cell'));
 const paths=units.find(u=>u.id==='g12-t1-l06-006');assert.equal((render(paths).match(/class="authored-amount-cell"/g)??[]).length,2);
 const skills=units.find(u=>u.id==='g9-t1-l07-007');const skillFields=skills.blocks.filter(b=>b.kind==='text'&&/^(Practical|Social|Mental|Creative|Emotional) skills: _/.test(b.text));assert.equal(skillFields.length,5);
 for(const field of skillFields)assert.equal(reviewedInteraction(skills.id,field),null,'No ZA choices may be invented for a differently authored written task.');
});

test('retired generic inputs retain historical local answers beside the current source-directed task',()=>{
 const unit=units.find(u=>u.id==='g8-t1-l01-001');
 const block=unit.blocks.find(b=>b.kind==='text'&&b.text.startsWith('Your Next Step:'));
 assert.equal(reviewedInteraction(unit.id,block).kind,'instruction');
 const key=`${unit.id}::prompt-${block.id}::response`,answers={[key]:'Earlier combined learner explanation'};
 assert.ok(render(unit,answers).includes(answers[key]));assert.equal(Object.keys(answers)[0],key);
});
