import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {spawnSync} from 'node:child_process';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {runtimeUnits,typescriptModule} from '../scripts/semantic-census.mjs';
import {renderModule} from './lib/render-module.mjs';

const index=JSON.parse(fs.readFileSync('public/zimbabwe-curriculum/index.json'));
const units=await runtimeUnits('/zimbabwe-curriculum');
const provenance=JSON.parse(fs.readFileSync('public/zimbabwe-curriculum/provenance.json'));
const {ContentBlocks}=await import(renderModule('components/content-blocks.tsx'));
const wraps=JSON.parse(fs.readFileSync('content/zimbabwe/wraps.json'));

test('Zimbabwe exposes exactly four Forms, three terms and the complete existing allocation',()=>{
 assert.deepEqual(index.grades.map(g=>g.form),[1,2,3,4]);
 assert.deepEqual(index.grades.map(g=>g.terms.map(t=>t.term)),Array.from({length:4},()=>[1,2,3]));
 assert.deepEqual(index.grades.map(g=>g.terms.map(t=>t.unitCount)),[[26,26,27],[34,20,21],[36,40,40],[40,40,32]]);
 assert.equal(units.filter(u=>u.type==='lesson').length,382);
 assert.equal(units.filter(u=>u.type==='assessment').length,3);
 assert.equal(new Set(units.map(u=>u.id)).size,385);
 assert.deepEqual(new Set(units.map(u=>u.id)),new Set(provenance.units.map(u=>u.id)));
 for(const grade of index.grades)assert.deepEqual(new Set(grade.lessonIds),new Set(units.filter(u=>u.grade===grade.grade&&u.type==='lesson').map(u=>u.id)));
});

test('bridge years and source lesson numbering keep their provenance without duplicating content',()=>{
 for(const unit of units){
  assert.ok(unit.sourceGrade>=8&&unit.sourceGrade<=12);
  if(unit.sourceGrade===11)assert.equal(unit.grade,unit.sourceTerm<=2?10:12);
  if(unit.sourceGrade===12)assert.equal(unit.term,unit.sourceTerm<=2?2:3);
  const row=provenance.units.find(x=>x.id===unit.id);
  assert.equal(row.sourceGrade,unit.sourceGrade);assert.equal(row.sourceTerm,unit.sourceTerm);
 }
 const restored=units.filter(u=>u.sourceGrade===9&&u.startLesson>=23&&u.startLesson<=34);
 assert.equal(restored.length,12);assert.ok(restored.every(u=>u.term===1));
});

test('every localised unit renders through the current ZA renderer and retains stable response identities',()=>{
 for(const unit of units){
  assert.ok(unit.blocks.length>0,unit.id);
  assert.equal(new Set(unit.blocks.map(b=>b.id)).size,unit.blocks.length,unit.id);
  assert.ok(unit.blocks.every(b=>/^[a-f0-9]{24}-\d+$/.test(b.id)),unit.id);
  const html=renderToStaticMarkup(React.createElement(ContentBlocks,{blocks:unit.blocks,unitId:unit.id,unitType:unit.type,promptResponses:{},onSavePromptResponse:()=>{}}));
  assert.ok(html.length>200,unit.id);assert.ok(!html.includes('undefined'),unit.id);
  if(unit.type==='lesson'){
   assert.ok(html.includes('Lesson Wrap'),unit.id);
   assert.deepEqual(wraps[unit.id].blockIds,unit.blocks.map(b=>b.id));
  }else assert.ok(!wraps[unit.id],unit.id);
 }
});

test('the saved-answer and portfolio paths preserve a localised prompt after surrounding content moves',async()=>{
 const {stableResponseKey,responseView}=await import(typescriptModule('lib/response-identity.ts'));
 const unit=units.find(u=>u.id==='g8-t1-l01-001');
 const block=unit.blocks.find(b=>b.kind==='text'&&b.text.includes('_____'));
 const key=stableResponseKey(unit.id,block,'blank-0');
 const answers={[key]:'I can practise this at home.'};
 const moved=[{id:'fixture',kind:'text',type:'paragraph',text:'Extra context'},...unit.blocks];
 const view=responseView(unit.id,moved,answers);
 assert.equal(view[`${unit.id}::block-${moved.indexOf(block)}::blank-0`],answers[key]);
 const html=renderToStaticMarkup(React.createElement(ContentBlocks,{blocks:unit.blocks,unitId:unit.id,unitType:unit.type,promptResponses:answers,onSavePromptResponse:()=>{}}));
 assert.ok(html.includes('I can practise this at home.'));
});

test('Zimbabwe compilation reproduces the committed delivery release',()=>{
 const files=['public/zimbabwe-curriculum/index.json','public/zimbabwe-curriculum/provenance.json','content/zimbabwe/wraps.json',...fs.readdirSync('public/zimbabwe-curriculum').filter(f=>f.endsWith('.b64')).map(f=>'public/zimbabwe-curriculum/'+f)];
 const before=files.map(f=>fs.readFileSync(f));
 const result=spawnSync(process.execPath,['scripts/compile-zimbabwe.mjs'],{encoding:'utf8'});
 assert.equal(result.status,0,result.stderr);
 files.forEach((f,i)=>assert.deepEqual(fs.readFileSync(f),before[i],f));
});
