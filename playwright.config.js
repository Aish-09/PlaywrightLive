// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // Tells Playwright where your test files live
  testDir: './tests',

  // Maximum time one test can run for (30 seconds)
  timeout: 30 * 1000,

  expect: {
    // Timeout for assertions like expect(locator).toBeVisible()
    timeout: 5000
  },

  // Run tests in files in parallel
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,

  // Retry on CI only (or set to 0 locally while learning)
  retries: process.env.CI ? 2 : 0,

  // Reporters: print list in terminal, generate HTML report
  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/html-report', open: 'never' }]
  ],

  // Shared settings for all projects
  use: {
    // Base URL to use in actions like `await page.goto('/')`
    baseURL: 'https://automationexercise.com',

    // Run headed locally so you can see browser actions; headless in CI
    headless: false,

    // Collect trace when retrying the failed test
    trace: 'retain-on-failure',

    // Take screenshot only when a test fails
    screenshot: 'only-on-failure'
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});