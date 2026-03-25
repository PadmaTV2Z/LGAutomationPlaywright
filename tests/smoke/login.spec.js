const { test, expect } = require('@playwright/test');

test('Login page loads successfully', async ({ page }) => {
  await page.goto(process.env.BASE_URL || 'https://telvizappingcom.tv2zdev.com/');
  await expect(page).toHaveTitle(/Telviz/i);
});
