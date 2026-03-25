const { test, expect } = require('@playwright/test');

test('Channel list loads', async ({ page }) => {
  await page.goto(process.env.BASE_URL || 'https://telvizappingcom.tv2zdev.com/');
  await expect(page.locator('[data-testid="rails-container"]')).toBeVisible();
});
