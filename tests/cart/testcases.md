# Cart Test Cases (Manual)

## Scope
- Source auto test: `tests/cart/cart.test.ts`
- Environment: `https://www.saucedemo.com`

## Preconditions
- User can login with valid account:
  - Username: `standard_user`
  - Password: `secret_sauce`
- User starts from inventory dashboard page (`/inventory.html`).

## TC-CART-001: Remove product when cart has one product
- Objective: Verify user can remove a single product from cart.
- Steps:
  1. Login and open inventory dashboard.
  2. Add one product to cart.
  3. Click cart icon to open cart page.
  4. Click `Remove` for that product.
- Expected result:
  1. Removed product no longer appears in cart.
  2. Cart badge is removed (empty cart).

## TC-CART-002: Remove one product when cart has multiple products
- Objective: Verify removing one item does not affect other cart items.
- Steps:
  1. Login and open inventory dashboard.
  2. Add three different products to cart.
  3. Open cart page.
  4. Remove one of the three products.
- Expected result:
  1. Removed product no longer appears in cart.
  2. Remaining two products still exist in cart.
  3. Cart badge shows `2`.

## TC-CART-003: Remove all products from cart
- Objective: Verify user can clear cart completely.
- Steps:
  1. Login and open inventory dashboard.
  2. Add three different products to cart.
  3. Open cart page.
  4. Remove all added products one by one.
- Expected result:
  1. None of the previously added products appear in cart.
  2. Cart badge is removed (empty cart).
