# Facebook Login Automation Testing

## Overview

This project contains automated login test cases for Facebook using Playwright and TypeScript.

The automation follows the **Page Object Model (POM)** design pattern and uses stable selectors such as `name` attributes and ARIA roles where available.

## Test Scenarios

The following login scenarios are covered:

| Test Case ID | Scenario | Type | Priority |
| T001 | Invalid login with valid email format and wrong password | Negative | P1 |
| T002 | Empty login with email and password left blank | Negative | P1 |
| T003 | Forgotten password navigation | Positive | P1 |

### T001 - Invalid Login

**Steps:**
1. Enter a valid email format.
2. Enter an incorrect password.
3. Click the `Log in` button.
4. Verify the error message.

**Expected Result:**

The login will not be successful, and the system will prompt an error message:

`The password you've entered is incorrect.`

### T002 - Empty Login

**Steps:**
1. Leave the email field empty.
2. Leave the password field empty.
3. Click the `Log in` button.
4. Verify the validation messages.

**Expected Result:**

The login will not be successful, and the system will prompt validation message(s) indicating that the email address or mobile number and password are required.

### T003 - Forgotten Password

**Steps:**
1. Click `Forgotten password?`.
2. Verify the URL.
3. Verify the page content.

**Expected Result:**

The system will navigate to a URL containing:

`www.facebook.com/login/identify`

The `Find your account` text should also be displayed.

