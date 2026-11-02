# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\loginuser.spec.js >> Login Functionality >> TC02: Login User with correct email and password @smoke
- Location: tests\ui\loginuser.spec.js:7:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('h2:has-text("Login to your account")')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('h2:has-text("Login to your account")') with timeout 5000ms
  - waiting for locator('h2:has-text("Login to your account")')

```

```yaml
- heading "This website is under heavy load (queue full)" [level=2]
- paragraph: We're sorry, too many people are accessing this website at the same time. We're working on this problem. Please try again later.
```

# Test source

```ts
  1  | // tests/ui/loginUser.spec.js
  2  | const { test, expect } = require('@playwright/test');
  3  | const { LoginPage } = require('../../pages/LoginPage');
  4  | const config = require('../../config/env.config');
  5  | 
  6  | test.describe('Login Functionality', () => {
  7  |   test('TC02: Login User with correct email and password @smoke', async ({ page }) => {
  8  |     const loginPage = new LoginPage(page);
  9  | 
  10 |     // 1. Navigate to home page
  11 |     await loginPage.navigateTo('/');
  12 |     await expect(page).toHaveTitle(/Automation Exercise/);
  13 | 
  14 |     // 2. Click Signup / Login
  15 |     await loginPage.clickSignupLogin();
  16 | 
  17 |     // 3. Verify 'Login to your account' is visible
> 18 |     await expect(loginPage.loginHeader).toBeVisible();
     |                                         ^ Error: expect(locator).toBeVisible() failed
  19 |     await expect(loginPage.loginHeader).toHaveText('Login to your account');
  20 | 
  21 |     // 4. Perform Login using clean config data (NO hardcoding!)
  22 |     await loginPage.login(config.testUser.email, config.testUser.password);
  23 | 
  24 |     // 5. Verify user is logged in
  25 |     await expect(loginPage.loggedInText).toBeVisible();
  26 |     await expect(loginPage.loggedInText).toContainText(config.testUser.username);
  27 |   });
  28 | });
```