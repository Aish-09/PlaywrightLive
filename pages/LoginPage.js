const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);



    // Top Navigation
    this.signupLoginLink = page.locator('a[href="/login"]');
    this.loggedInText = page.locator('li:has-text("Logged in as")');
    this.deleteAccountLink = page.locator('a[href="/delete_account"]');
    this.continueBtn = page.locator('[data-qa="continue-button"]');

    // Section 1: Initial Signup Form
    this.signupHeader = page.locator('.signup-form h2');
    this.signupNameInput = page.locator('input[data-qa="signup-name"]');
    this.signupEmailInput = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');

    // Section 2: Account Information Form
    this.accountInfoHeading = page.locator('h2.title:has-text("Enter Account Information")');
    this.titleGenderMr = page.locator('#id_gender1');
    this.passwordInput = page.locator('#password');
    this.daysDropdown = page.locator('#days');
    this.monthsDropdown = page.locator('#months');
    this.yearsDropdown = page.locator('#years');
    this.newsletterCheckbox = page.locator('#newsletter');
    this.optinCheckbox = page.locator('#optin');

    // Section 3: Address Information Form
    this.firstNameInput = page.locator('#first_name');
    this.lastNameInput = page.locator('#last_name');
    this.companyInput = page.locator('#company');
    this.address1Input = page.locator('#address1');
    this.countryDropdown = page.locator('#country');
    this.stateInput = page.locator('#state');
    this.cityInput = page.locator('#city');
    this.zipcodeInput = page.locator('#zipcode');
    this.mobileNumberInput = page.locator('#mobile_number');
    this.createAccountBtn = page.locator('button[data-qa="create-account"]');

    // Success & Confirmation Headings
    this.accountCreatedHeader = page.locator('h2[data-qa="account-created"]');
    this.accountDeletedHeader = page.locator('h2[data-qa="account-deleted"]');

    //Login Page Elements
    this.loginHeader = page.locator('h2:has-text("Login to your account")');
    this.loginEmailInput = page.locator('input[data-qa="login-email"]');
    this.loginPasswordInput = page.locator('[name="password"]')
    this.loginButton = page.locator('button:has-text("Login")')

    this.loggedInText = page.locator('a:has-text("Logged in as Aishwarya")');

  }
  async clickSignupLogin() {
    await this.signupLoginLink.click();
  }
  async fillInitialSignup(name, email) {
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
  }
  async fillAccountDetails(userData) {
    await this.titleGenderMr.check();
    await this.passwordInput.fill(userData.password);
    await this.daysDropdown.selectOption(userData.day);
    await this.monthsDropdown.selectOption(userData.month);
    await this.yearsDropdown.selectOption(userData.year);
    await this.newsletterCheckbox.check();
    await this.optinCheckbox.check();
  }
  async fillAddressDetails(userData) {
    await this.firstNameInput.fill(userData.firstName);
    await this.lastNameInput.fill(userData.lastName);
    await this.companyInput.fill(userData.company);
    await this.address1Input.fill(userData.address);
    await this.countryDropdown.selectOption(userData.country);
    await this.stateInput.fill(userData.state);
    await this.cityInput.fill(userData.city);
    await this.zipcodeInput.fill(userData.zipcode);
    await this.mobileNumberInput.fill(userData.mobile);
    await this.createAccountBtn.click();
  }
  async proceedAfterAccountCreated() {
    await this.continueBtn.click();
    await this.dismissAdIfPresent();
  }
  async deleteAccount() {
    await this.deleteAccountLink.click();
    await this.dismissAdIfPresent();
  }
  async login(email, password) {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
    await this.loginButton.click();
    await this.dismissAdIfPresent();

  }
}

module.exports = { LoginPage };