import { Page, Locator } from '@playwright/test';

export class FacebookLoginPage {
  readonly page: Page;

  // Login page elements
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly forgotPasswordLink: Locator;

  constructor(page: Page) {
    this.page = page;

    // Email input
    this.emailInput = page.locator('input[name="email"]');

    // Password input
    this.passwordInput = page.locator('input[name="pass"]');

    // Login button
    this.loginButton = page.getByRole('button', { name: 'Log in' });

    // Forgot password button
    this.forgotPasswordLink = page.getByText('Forgotten password?',{ exact: true });
  }

  // Open Facebook login page
  async goto() {
    await this.page.goto('https://www.facebook.com/');
  }

  // Enter email
  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  // Enter password
  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  // Click Login button
  async clickLogin() {
    await this.loginButton.click();
  }

  // Login with email and password
  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  // Click Forgotten password
  async clickForgotPassword() {
    await this.forgotPasswordLink.click();
  }
}