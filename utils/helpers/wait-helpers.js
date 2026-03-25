async function waitForVisible(locator, timeout = 10000) {
  await locator.waitFor({ state: 'visible', timeout });
}

module.exports = { waitForVisible };
