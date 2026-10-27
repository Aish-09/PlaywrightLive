// pages/BasePage.js
class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * Block known Google Ad domains and navigate to URL
   * @param {string} path 
   */
  async navigateTo(path = '') {
    // Abort ad domains to keep test runs clean and free of popups
    await this.page.route('**/*googleads*', route => route.abort());
    await this.page.route('**/*doubleclick*', route => route.abort());
    await this.page.route('**/*adservice*', route => route.abort());

    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
  }

  /**
   * Fallback: Dismiss ad iframe if any sneaks through
   */
  async dismissAdIfPresent() {
    try {
      const adIframe = this.page.frameLocator('iframe[id^="aswift_"], iframe[name^="aswift_"]');
      const dismissBtn = adIframe.locator('#dismiss-button');
      if (await dismissBtn.isVisible({ timeout: 2000 })) {
        await dismissBtn.click();
      }
    } catch {
      // No ad appeared; continue normally
    }
  }
}

// CommonJS Named export to prevent constructor type errors
module.exports = { BasePage };