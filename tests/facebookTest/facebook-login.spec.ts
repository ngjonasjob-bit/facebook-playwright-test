import { test, expect } from '@playwright/test';
import { FacebookLoginPage } from '../facebookTest/FacebookLoginPage';


test.describe('Facebook Login Tests', () => {

  // Open Facebook login page before each test
  test.beforeEach(async ({ page }) => {
    const loginPage = new FacebookLoginPage(page);
    await loginPage.goto();
  });


  // 1. Invalid login → verify error
  test('Invalid login - verify error message', async ({ page }) => {

    const loginPage = new FacebookLoginPage(page);

    // Enter valid email format + wrong password
    await loginPage.login(
      'test@example.com',
      'WrongPassword123'
    );
    
    // Allow time to manually complete Facebook's CAPTCHA 
    await page.waitForTimeout(30000);
    
    // Enter email + password after CAPTCHA
    await loginPage.login(
      'test@example.com',
      'WrongPassword123'
    );

    // Verify error message appears
    await expect(
        page.getByText("The password you've entered is incorrect.", {exact: true})
    ).toBeVisible({ timeout: 10000 });

    // Allow sufficient time for the result to be displayed
    await page.waitForTimeout(5000);

  });


  // 2. Empty login → verify validation
  test('Empty login - verify validation', async ({ page }) => {

    const loginPage = new FacebookLoginPage(page);

    // Leave email and password empty
    await loginPage.clickLogin();

    // Verify error message appears
    await expect(
        page.getByText("The email address or mobile number you entered isn't connected to an account.")
    ).toBeVisible();
    
    // Allow sufficient time for the result to be displayed
    await page.waitForTimeout(5000);

  });


  // 3. Forgotten password → verify navigation
  test('Forgotten password - verify navigation', async ({ page }) => {

    const loginPage = new FacebookLoginPage(page);

    // Click Forgotten password
    await loginPage.clickForgotPassword();

    // Verify navigation to password reset page
    await expect(page).toHaveURL( /www\.facebook\.com\/login\/identify/);

    // Verify page content
    page.getByText('Find your account', { exact: true })
    
    // Allow sufficient time for the result to be displayed
    await page.waitForTimeout(5000);

  });

});