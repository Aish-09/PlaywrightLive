# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\registeruser.spec.js >> User Registration Flow >> TC01: Register User and Delete Account @smoke
- Location: tests\ui\registeruser.spec.js:6:3

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.signup-form h2')
Expected: "New User Signup!"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('.signup-form h2') with timeout 5000ms
  - waiting for locator('.signup-form h2')

```

```yaml
- heading "This website is under heavy load (queue full)" [level=2]
- paragraph: We're sorry, too many people are accessing this website at the same time. We're working on this problem. Please try again later.
```

# Test source

```ts
  1  | // tests/ui/registerUser.spec.js
  2  | const { test, expect } = require('@playwright/test');
  3  | const { LoginPage } = require('../../pages/LoginPage');
  4  | 
  5  | test.describe('User Registration Flow', () => {
  6  |   test('TC01: Register User and Delete Account @smoke', async ({ page }) => {
  7  |     const loginPage = new LoginPage(page);
  8  | 
  9  |     // Dynamic test data
  10 |     const timestamp = Date.now();
  11 |     const testUser = {
  12 |       name: `User_${timestamp}`,
  13 |       email: `test_${timestamp}@example.com`,
  14 |       password: 'Password123!',
  15 |       day: '15',
  16 |       month: '5',
  17 |       year: '1995',
  18 |       firstName: 'Aishwarya',
  19 |       lastName: 'V',
  20 |       company: 'QA Automation',
  21 |       address: '123 Baker Street',
  22 |       country: 'India',
  23 |       state: 'Kerala',
  24 |       city: 'Calicut',
  25 |       zipcode: '673001',
  26 |       mobile: '5478465998'
  27 |     };
  28 | 
  29 |     // 1, 2 & 3: Navigate and verify homepage
  30 |     await loginPage.navigateTo('/');
  31 |     await expect(page).toHaveTitle(/Automation Exercise/);
  32 | 
  33 |     // 4 & 5: Click 'Signup / Login' and verify 'New User Signup!' heading
  34 |     await loginPage.clickSignupLogin();
> 35 |     await expect(loginPage.signupHeader).toHaveText('New User Signup!');
     |                                          ^ Error: expect(locator).toHaveText(expected) failed
  36 | 
  37 |     // 6 & 7: Enter name and email address, click 'Signup'
  38 |     await loginPage.fillInitialSignup(testUser.name, testUser.email);
  39 | 
  40 |     // 8: Verify that 'ENTER ACCOUNT INFORMATION' is visible
  41 |     await expect(loginPage.accountInfoHeading).toBeVisible();
  42 | 
  43 |     // 9, 10, 11: Fill Title, Password, DOB and check checkboxes
  44 |     await loginPage.fillAccountDetails(testUser);
  45 | 
  46 |     // 12 & 13: Fill Address information and click 'Create Account'
  47 |     await loginPage.fillAddressDetails(testUser);
  48 | 
  49 |     // 14: Verify that 'ACCOUNT CREATED!' is visible
  50 |     await expect(loginPage.accountCreatedHeader).toBeVisible();
  51 | 
  52 |     // 15: Click 'Continue'
  53 |     await loginPage.proceedAfterAccountCreated();
  54 | 
  55 |     // 16: Verify that 'Logged in as username' is visible
  56 |     await expect(loginPage.loggedInText).toContainText(testUser.name);
  57 | 
  58 |     // 17: Click 'Delete Account' button
  59 |     await loginPage.deleteAccount();
  60 | 
  61 |     // 18: Verify that 'ACCOUNT DELETED!' is visible and click 'Continue'
  62 |     await expect(loginPage.accountDeletedHeader).toBeVisible();
  63 |     await loginPage.proceedAfterAccountCreated();
  64 |   });
  65 | });
```