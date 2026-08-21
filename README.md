# Facebook Login Automation Testing

## Overview

This project contains automated login test cases for Facebook using Playwright and TypeScript.

The automation follows the **Page Object Model (POM)** design pattern and uses stable selectors such as `name` attributes and ARIA roles where available.

## Test Scenarios

The following login scenarios are covered:

| Test Case ID | Scenario | Type | Priority |
|---|---|---|---|
| T001 | Invalid login with valid email format and wrong password | Negative | P1 |
| T002 | Invalid login with an unregistered email address | Negative | P1 | 
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

### T002 - Invalid Login with Unregistered Email

**Steps:**

1. Enter an unregistered email address.
2. Enter a password.
3. Click the `Log in` button.
4. Verify the error message.

**Expected Result:**

The login will not be successful, and the system will prompt an error message:

`The email address or mobile number you entered isn't connected to an account.`

### T003 - Forgotten Password

**Steps:**

1. Click `Forgotten password?`.
2. Verify the current URL.
3. Verify the page content.

**Expected Result:**

The system will navigate to a URL containing:

`www.facebook.com/login/identify`

The `Find your account` text will be displayed.

## Test Cases

The Excel test cases are available in:

`test-cases/Facebook Test Case.xlsx`

The test case covers the following scenarios:

- Empty login
- Invalid login
- Forgotten password

## Test Execution Videos

The following videos demonstrate the successful execution of the test cases on the local machine:

- `video/Empty login.webm`
- `video/Invalid login.webm`
- `video/Forgotten password.webm`

---
