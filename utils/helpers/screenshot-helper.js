async function capture(page, name = 'screenshot') {
  await page.screenshot({ path: `reports/screenshots/${name}.png`, fullPage: true });
}

module.exports = { capture };
