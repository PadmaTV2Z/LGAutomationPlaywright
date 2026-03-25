const BasePage = require('./BasePage');

class PlayerPage extends BasePage {
  async isPlaying() {
    return this.page.locator('video').isVisible();
  }
}

module.exports = PlayerPage;
