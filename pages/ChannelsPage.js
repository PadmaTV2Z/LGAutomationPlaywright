const BasePage = require('./BasePage');

class ChannelsPage extends BasePage {
  async getChannelCount() {
    return this.page.locator('[data-testid="channel-item"]').count();
  }
}

module.exports = ChannelsPage;
