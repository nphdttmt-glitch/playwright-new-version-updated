# Repository Guidelines

## Project Structure & Module Organization
This repository is a Playwright + TypeScript end-to-end test suite.

- `tests/` contains feature suites, grouped by area such as `tests/login/login.test.ts`.
- `src/pages/` holds page objects and shared page behavior.
- `src/fixtures/` defines custom Playwright fixtures, including logged-in test setup.
- `src/factories/` and `utils/` contain reusable test helpers and data builders.
- `config/` stores environment configuration such as `config/env.config.ts`.
- Test artifacts are written to `test-results/` and Allure output to `allure-results/` and `allure-report/`.

## Build, Test, and Development Commands
Use the npm scripts in `package.json`:

- `npm test` runs the full Playwright suite.
- `npm run test:login` runs only the login suite.
- `npm run test:chrome`, `npm run test:firefox`, `npm run test:webkit` run the suite in a single browser.
- `npm run test:dev-chrome` and the other `test:dev-*` variants run against the dev environment (`ENV=dev`).
- `npm run report:generate` builds the Allure report from `allure-results/`.
- `npm run report:open` opens the generated Allure report.
- `npm run report:clean` removes prior report artifacts.

## Coding Style & Naming Conventions
Follow the existing TypeScript style:

- Use 4-space indentation and semicolon-terminated statements.
- Prefer double quotes for imports and strings.
- Name page objects as `PascalCase` classes ending in `Page` and place them in matching folders, for example `src/pages/cart/cart.page.ts`.
- Name tests with descriptive `*.test.ts` files under a feature folder.
- Keep selectors and actions inside page objects; keep assertions in tests or dedicated helper methods.

## Testing Guidelines
Playwright is the test runner. Tests should stay small and feature-focused.

- Reuse the custom fixture `loggedInPage` when a test needs authenticated state.
- Keep new tests alongside the feature they cover, for example `tests/dashboard/dashboard.test.ts`.
- Prefer stable locators and page-object methods over inline selectors in tests.

## Commit & Pull Request Guidelines
Recent commits are brief and imperative, such as `updated ...` or `Initial commit - Playwright project`. Keep future commit subjects short and action-oriented.

Pull requests should include:

- A short summary of the behavior changed.
- The commands used for validation, such as `npm test` or a targeted suite.
- Screenshots or Allure output when a UI or reporting change is involved.

## Configuration Notes
Store local secrets in `.env`; do not commit credentials. Review `config/env.config.ts` before changing environment-dependent behavior.
