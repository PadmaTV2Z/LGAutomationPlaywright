const { test, expect } = require('@playwright/test');

test('Video player appears', async ({ page }) => {
  await page.goto(process.env.BASE_URL || 'https://telvizappingcom.tv2zdev.com/');
  await expect(page.locator('video').first()).toBeVisible();
});
