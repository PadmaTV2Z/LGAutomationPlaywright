async function expectVideoVisible(page, expect) {
  await expect(page.locator('video').first()).toBeVisible();
}

module.exports = { expectVideoVisible };
