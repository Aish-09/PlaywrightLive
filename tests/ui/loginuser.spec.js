// tests/ui/loginUser.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const config = require('../../config/env.config');

test.describe('Login Functionality', () => {
  test('TC02: Login User with correct email and password @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // 1. Navigate to home page
    await loginPage.navigateTo('/');
    await expect(page).toHaveTitle(/Automation Exercise/);

    // 2. Click Signup / Login
    await loginPage.clickSignupLogin();

    // 3. Verify 'Login to your account' is visible
    await expect(loginPage.loginHeader).toBeVisible();
    await expect(loginPage.loginHeader).toHaveText('Login to your account');

    // 4. Perform Login using clean config data (NO hardcoding!)
    await loginPage.login(config.testUser.email, config.testUser.password);

    // 5. Verify user is logged in
    await expect(loginPage.loggedInText).toBeVisible();
    await expect(loginPage.loggedInText).toContainText(config.testUser.username);
  });
});