import { expect, test } from '@playwright/test';

test('captures the complete homepage', async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);

  const main = page.locator('main');
  await expect(main).toBeVisible();

  for (const spread of await main.locator('[data-spread]').all()) {
    await spread.scrollIntoViewIfNeeded();
  }

  await page.waitForLoadState('networkidle');
  await page.evaluate(() => window.scrollTo(0, 0));

  await page.screenshot({
    path: testInfo.outputPath('homepage.png'),
    fullPage: true,
    animations: 'disabled',
  });
});
