Use Playwright skill for browser execution.

  Before execution:

  1. Read and follow AGENTS.md completely.
  2. Load existing Playwright project configuration:
     - playwright.config.ts
     - fixtures
     - env config
     - helpers
     - browser settings
  3. Reuse current project runtime configuration.

  Rules:
  - Use Playwright skill only
  - Use current workspace Playwright project
  - Reuse existing browser configuration
  - Reuse current launch settings
    (Chrome maximized window, viewport, launch options, storage state, permissions...)
  - Do NOT create Playwright scripts
  - Do NOT generate spec files
  - Do NOT use default Playwright runtime

  Task:

  Read test/cart/testcases.md

  Execute all testcases directly in browser.

  Output:

  TC ID
  Executed steps
  Actual result
  PASS / FAIL
  Screenshot path
  Failure reason