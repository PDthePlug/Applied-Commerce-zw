import {test,expect} from '@playwright/test';
import fs from 'node:fs';
import zlib from 'node:zlib';
const root='public/zimbabwe-curriculum';
const index=JSON.parse(fs.readFileSync(`${root}/index.json`));
const bundles=index.grades.map(g=>JSON.parse(zlib.gunzipSync(Buffer.from(Array.from({length:g.bundleParts},(_,i)=>fs.readFileSync(`${root}/grade-${g.grade}.part-${i+1}.b64`,'utf8').trim()).join(''),'base64'))));
const href=unit=>`/learn/${unit.grade}/term/${unit.term}/${unit.id}`;

async function withinViewport(page){expect(await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth)).toBeLessThanOrEqual(1);}

test('library, Form map and profile show four Forms and three terms',async({page})=>{
 await page.goto('/learn');await expect(page.locator('.grade-card')).toHaveCount(4);
 await expect(page.getByRole('heading',{name:'Four Forms. One learning journey.'})).toBeVisible();
 for(const meta of index.grades){
  const card=page.locator(`.grade-card.grade-${meta.grade}`);
  await expect(card).toContainText(`${meta.unitCount}`);await expect(card).toContainText('terms');
 }
 await withinViewport(page);await page.screenshot({path:`test-results/zw-library-${test.info().project.name}.png`,fullPage:true});
 await page.goto('/learn/10');await expect(page.locator('.term-card')).toHaveCount(3);
 await expect(page.locator('.grade-hero')).toContainText('Form 3');await withinViewport(page);
 await page.goto('/settings');const select=page.getByLabel('Current Form');
 await expect(select.locator('option')).toHaveText(['Form 1','Form 2','Form 3','Form 4']);
});

for(const b of bundles)for(const term of b.terms){
 const unit=term.units.find(u=>u.type==='lesson');
 test(`Form ${b.form} Term ${term.term} uses the ZA reader with Zimbabwe content`,async({page})=>{
  const errors=[];page.on('pageerror',error=>errors.push(error.message));
  await page.goto(href(unit));await expect(page.locator('.lesson-heading h1')).toHaveText(unit.title);
  await expect(page.locator('.reader-brand strong')).toHaveText(`Form ${b.form}`);
  await expect(page.locator('.reader-brand small')).toHaveText(`Term ${term.term}`);
  await expect(page.locator('.lesson-icon-key')).toBeVisible();
  await expect(page.getByRole('textbox',{name:'Lesson notes',exact:true})).toBeVisible();
  await withinViewport(page);expect(errors).toEqual([]);
  if(term.term===1)await page.screenshot({path:`test-results/zw-form-${b.form}-${test.info().project.name}.png`,fullPage:false});
 });
}

test('a bridge lesson keeps answers, notes, completion and home resume on the correct Form',async({page})=>{
 const b=bundles.find(b=>b.form===4);const unit=b.terms[0].units.find(u=>u.sourceGrade===11&&u.type==='lesson');
 await page.goto(href(unit));const notes=page.getByRole('textbox',{name:'Lesson notes',exact:true});
 await notes.fill('Zimbabwe bridge lesson: evidence saved.');
 const answer=page.locator('.lesson-document textarea').first();
 if(await answer.count())await answer.fill('I tried this in my community.');
 await page.getByRole('button',{name:'Mark lesson complete',exact:true}).click();
 await page.reload();await expect(notes).toHaveValue('Zimbabwe bridge lesson: evidence saved.');
 await expect(page.getByRole('button',{name:'Completed',exact:true})).toBeVisible();
 if(await answer.count())await expect(answer).toHaveValue('I tried this in my community.');
 await page.goto('/');await expect(page.locator('.home-continue-card')).toContainText('Form 4 · Term 1');
 await page.getByRole('link',{name:'Continue learning',exact:true}).click();await expect(page).toHaveURL(href(unit));
 await page.goto('/progress');await expect(page.locator('.progress-overview')).toContainText('1 of 382 lessons complete');
 await page.goto('/portfolio');await expect(page.getByText('Zimbabwe bridge lesson: evidence saved.',{exact:true})).toBeVisible();
});

test('invalid source years and fourth terms do not appear as Zimbabwe delivery routes',async({request})=>{
 expect((await request.get('/learn/11')).status()).toBe(404);
 expect((await request.get('/learn/8/term/4/g8-t4-l80-079')).status()).toBe(404);
 const teacher=await request.get('/api/classroom');expect(teacher.status()).toBe(401);
});
