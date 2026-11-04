import {test,expect} from '@playwright/test';

test('Zimbabwe deeper sections use the ZA disclosure and retain reflective work across reload',async({page})=>{
 await page.goto('/learn/8/term/1/g8-t1-l16-016');
 const panel=page.locator('.deepening-insight');await expect(panel).toHaveCount(1);
 await expect(panel).not.toHaveAttribute('open','');
 await panel.locator('summary').click();await expect(panel).toHaveAttribute('open','');
 const response=panel.locator('textarea').first();await expect(response).toBeVisible();
 await response.fill('I noticed a problem at the kombi rank and tested a small step.');
 await page.reload();await panel.locator('summary').click();
 await expect(response).toHaveValue('I noticed a problem at the kombi rank and tested a small step.');
 await panel.screenshot({path:`test-results/zw-deeper-parity-${test.info().project.name}.png`});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth)).toBeLessThanOrEqual(1);
});

test('Zimbabwe confidence markers remain independent, accessible and durable',async({page})=>{
 await page.goto('/learn/8/term/1/g8-t1-l03-003');
 const markers=page.locator('.confidence-marker-buttons');await expect(markers).toHaveCount(10);
 await markers.first().getByRole('button').first().click();
 await expect(markers.first().getByRole('button').first()).toHaveAttribute('aria-pressed','true');
 await page.reload();await expect(markers.first().getByRole('button').first()).toHaveAttribute('aria-pressed','true');
 await expect(markers.first().getByRole('button').nth(1)).toHaveAttribute('aria-pressed','false');
});

test('Zimbabwe source-bound circles and selection controls use the current ZA components',async({page})=>{
 await page.goto('/learn/8/term/1/g8-t1-l04-004');
 await expect(page.locator('.circle-map-control textarea')).toHaveCount(6);
 const answer=page.locator('.circle-map-control textarea').first();await answer.fill('My grandmother');
 await page.reload();await expect(answer).toHaveValue('My grandmother');
 await page.goto('/learn/8/term/1/g8-t1-l01-001');
 await expect(page.locator('.source-selection-control select')).toHaveCount(1);
});
