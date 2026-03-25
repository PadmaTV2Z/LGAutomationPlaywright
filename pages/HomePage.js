const { expect } = require('@playwright/test');
const { homeSelectors } = require('../selectors/homeSelectors');
const { NavigationHelper } = require('../utils/navigationHelper');

class HomePage {
  constructor(page) {
    this.page = page;
    this.navigation = new NavigationHelper(page);
  }

  async open(path = '/') {
    await this.page.goto(path);
    await this.waitForLoaded();
  }

  async waitForLoaded() {
    await expect(this.page.locator(homeSelectors.homeScreen)).toBeVisible();
    await expect(this.page.locator(homeSelectors.railsContainer)).toBeVisible();
  }

  async move(direction, times = 1) {
    await this.navigation.move(direction, times);
  }

  async select() {
    await this.navigation.select();
  }

  async selectPlayFromFocusedTile() {
    await this.navigation.select();
    await this.page.getByRole(homeSelectors.playButtonByRole.role, {
      name: homeSelectors.playButtonByRole.name
    }).click();
  }

  async navigateToContentAndPlay(rightMoves, downMoves = 0) {
    if (downMoves > 0) {
      await this.navigation.move('ArrowDown', downMoves);
    }
    if (rightMoves > 0) {
      await this.navigation.move('ArrowRight', rightMoves);
    }
    await this.selectPlayFromFocusedTile();
  }

  async expectFocusVisible() {
    await expect(this.page.locator(homeSelectors.focusedElement).first()).toBeVisible();
  }

  async expectVideoPlaybackVisible() {
    const videoByTestId = this.page.locator(homeSelectors.videoByTestId);
    const videoTag = this.page.locator(homeSelectors.videoElement);
    const videoByXPath = this.page.locator(`xpath=${homeSelectors.videoByXPath}`);

    await expect(videoByTestId.or(videoTag).or(videoByXPath).first()).toBeVisible({ timeout: 15000 });
  }

  async getFocusedElement() {
    return this.page.locator(homeSelectors.focusedElement).first();
  }
}

module.exports = { HomePage };
