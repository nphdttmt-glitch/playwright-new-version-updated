# Login Test Cases (Manual)

## Scope
- Source auto test: `tests/login/login.test.ts`
- Environment: `https://www.saucedemo.com`

## Preconditions
- Browser can access `https://www.saucedemo.com`.
- Use valid test account:
  - Username: `standard_user`
  - Password: `secret_sauce`

## TC-LOGIN-001: Login page is displayed
- Objective: Verify login page is opened correctly.
- Steps:
  1. Open `https://www.saucedemo.com`.
  2. Observe the login page.
- Expected result:
  1. Page title/branding `Swag Labs` is visible.
  2. Username field is visible.
  3. Password field is visible.
  4. Login button is visible.

## TC-LOGIN-002: Login successfully with valid account
- Objective: Verify user can login and is redirected to inventory dashboard.
- Steps:
  1. Open `https://www.saucedemo.com`.
  2. Enter username `standard_user`.
  3. Enter password `secret_sauce`.
  4. Click `Login`.
- Expected result:
  1. User is redirected to inventory page (`.../inventory.html`).
  2. Product dashboard is displayed.
