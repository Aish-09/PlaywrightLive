// tests/ui/registerUser.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

test.describe('User Registration Flow', () => {
  test('TC01: Register User and Delete Account @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Dynamic test data
    const timestamp = Date.now();
    const testUser = {
      name: `User_${timestamp}`,
      email: `test_${timestamp}@example.com`,
      password: 'Password123!',
      day: '15',
      month: '5',
      year: '1995',
      firstName: 'Aishwarya',
      lastName: 'V',
      company: 'QA Automation',
      address: '123 Baker Street',
      country: 'India',
      state: 'Kerala',
      city: 'Calicut',
      zipcode: '673001',
      mobile: '5478465998'
    };

    // 1, 2 & 3: Navigate and verify homepage
    await loginPage.navigateTo('/');
    await expect(page).toHaveTitle(/Automation Exercise/);

    // 4 & 5: Click 'Signup / Login' and verify 'New User Signup!' heading
    await loginPage.clickSignupLogin();
    await expect(loginPage.signupHeader).toHaveText('New User Signup!');

    // 6 & 7: Enter name and email address, click 'Signup'
    await loginPage.fillInitialSignup(testUser.name, testUser.email);

    // 8: Verify that 'ENTER ACCOUNT INFORMATION' is visible
    await expect(loginPage.accountInfoHeading).toBeVisible();

    // 9, 10, 11: Fill Title, Password, DOB and check checkboxes
    await loginPage.fillAccountDetails(testUser);

    // 12 & 13: Fill Address information and click 'Create Account'
    await loginPage.fillAddressDetails(testUser);

    // 14: Verify that 'ACCOUNT CREATED!' is visible
    await expect(loginPage.accountCreatedHeader).toBeVisible();

    // 15: Click 'Continue'
    await loginPage.proceedAfterAccountCreated();

    // 16: Verify that 'Logged in as username' is visible
    await expect(loginPage.loggedInText).toContainText(testUser.name);

    // 17: Click 'Delete Account' button
    await loginPage.deleteAccount();

    // 18: Verify that 'ACCOUNT DELETED!' is visible and click 'Continue'
    await expect(loginPage.accountDeletedHeader).toBeVisible();
    await loginPage.proceedAfterAccountCreated();
  });
});