# Dashboard Test Cases (Manual)

## Scope
- Source auto test: `tests/dashboard/dashboard.test.ts`
- Environment: `https://www.saucedemo.com`

## Preconditions
- User can login with valid account:
  - Username: `standard_user`
  - Password: `secret_sauce`
- User is on inventory dashboard page (`/inventory.html`).

## TC-DASH-001: Add one product to cart successfully
- Objective: Verify one product can be added to cart.
- Steps:
  1. Login and open inventory dashboard.
  2. Choose any product.
  3. Click `Add to cart` for that product.
- Expected result:
  1. Product button changes from `Add to cart` to `Remove`.
  2. Cart badge at top-right shows `1`.

## TC-DASH-002: Cannot add the same product twice
- Objective: Verify already-added product cannot be added again.
- Steps:
  1. Add one product to cart.
  2. Check action button for the same product.
- Expected result:
  1. `Add to cart` button is not available for that product.
  2. `Remove` button is displayed instead.
  3. Cart badge stays `1`.

## TC-DASH-003: Add two products to cart
- Objective: Verify two distinct products can be added.
- Steps:
  1. Login and open inventory dashboard.
  2. Add first product to cart.
  3. Add a second product (different from first).
- Expected result:
  1. Both selected products show `Remove` buttons.
  2. Cart badge shows `2`.

## TC-DASH-004: Sort products by Name (A to Z)
- Objective: Verify name sorting ascending.
- Steps:
  1. Login and open inventory dashboard.
  2. In sort dropdown, select `Name (A to Z)`.
- Expected result:
  1. Product list is sorted alphabetically ascending.

## TC-DASH-005: Sort products by Name (Z to A)
- Objective: Verify name sorting descending.
- Steps:
  1. Login and open inventory dashboard.
  2. In sort dropdown, select `Name (Z to A)`.
- Expected result:
  1. Product list is sorted alphabetically descending.

## TC-DASH-006: Sort products by Price (low to high)
- Objective: Verify price sorting ascending.
- Steps:
  1. Login and open inventory dashboard.
  2. In sort dropdown, select `Price (low to high)`.
- Expected result:
  1. Product list is sorted by price from lowest to highest.

## TC-DASH-007: Sort products by Price (high to low)
- Objective: Verify price sorting descending.
- Steps:
  1. Login and open inventory dashboard.
  2. In sort dropdown, select `Price (high to low)`.
- Expected result:
  1. Product list is sorted by price from highest to lowest.
