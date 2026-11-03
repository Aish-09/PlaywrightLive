const base = require('@playwright/test');

// Extend the default test fixture with custom interceptors
exports.test = base.test.extend({
  page: async ({ page }, use) => {
    // Global Interceptor: Block ads, tracking scripts, and heavy analytics
    await page.route('**/*{google,analytics,doubleclick,adservice,syndication}*', route => {
      route.abort();
    });

    // Pass the intercepted page instance down to your tests/POMs
    await use(page);
  },
});

exports.expect = base.expect;