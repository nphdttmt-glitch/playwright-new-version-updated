Codex không tự động "sử dụng framework trên máy bạn" chỉ vì framework đó tồn tại. Muốn Codex chạy theo mô hình này, bạn cần cung cấp cho Codex:

Một skill/hướng dẫn rõ ràng.
Các tool mà Codex có thể gọi (Playwright runtime, DOM extractor, assertion engine...).
Quy tắc thực thi testcase.

Nói cách khác, framework của bạn nên đóng vai trò như một runtime cho AI agent, không phải framework Playwright truyền thống.

Kiến trúc đề xuất
ai-test-runner/
│
├── .codex/
│   ├── instructions.md
│   └── testcase-schema.md
│
├── runtime/
│   ├── browser.ts
│   ├── dom-indexer.ts
│   ├── action-engine.ts
│   ├── assertion-engine.ts
│   ├── recovery-engine.ts
│   └── testcase-runner.ts
│
├── actions/
│   ├── click.ts
│   ├── fill.ts
│   ├── navigate.ts
│   ├── select.ts
│   ├── verify.ts
│   └── wait.ts
│
├── knowledge/
│   ├── page-cache.json
│   ├── action-library.json
│   └── selector-cache.json
│
├── testcases/
│   ├── login.yaml
│   └── checkout.yaml
│
├── reports/
│
├── package.json
└── tsconfig.json
1. .codex/instructions.md

Đây là file quan trọng nhất.

You are an AI Test Runner.

DO NOT generate Playwright scripts.

Execute testcases directly.

Workflow:

1. Parse testcase.
2. Use Playwright runtime.
3. Build DOM index.
4. Resolve actions.
5. Execute actions.
6. Verify assertions.
7. Produce PASS/FAIL report.

Never generate code unless explicitly requested.
2. .codex/testcase-schema.md
Supported actions:

- navigate
- click
- fill
- select
- wait
- verify

Example:

- action: navigate
  target: Login Page

- action: fill
  target: Email
  value: test@test.com

- action: click
  target: Login

- action: verify
  target: Dashboard
3. runtime/browser.ts
import { chromium } from 'playwright';

export class BrowserManager {
  browser;
  page;

  async start() {
    this.browser = await chromium.launch({
      headless: false
    });

    this.page = await this.browser.newPage();
  }

  async close() {
    await this.browser.close();
  }
}
4. runtime/dom-indexer.ts

Thay vì snapshot toàn bộ.

export async function buildDomIndex(page) {
  return await page.evaluate(() => {

    const elements = [];

    document.querySelectorAll('*').forEach(el => {

      const text =
        el.innerText?.trim();

      if (!text) return;

      elements.push({
        text,
        tag: el.tagName,
        id: el.id,
        role: el.getAttribute('role')
      });

    });

    return elements;

  });
}
5. runtime/action-engine.ts
export class ActionEngine {

  constructor(page) {
    this.page = page;
  }

  async execute(step) {

    switch(step.action) {

      case 'navigate':
        return this.navigate(step);

      case 'fill':
        return this.fill(step);

      case 'click':
        return this.click(step);

      case 'verify':
        return this.verify(step);

    }
  }
}
6. runtime/assertion-engine.ts
export async function verifyText(
  page,
  expected
) {

  const body =
    await page.textContent('body');

  return body.includes(expected);
}
7. runtime/recovery-engine.ts

Khi selector fail.

export async function recover(
  page,
  target
) {

  const dom =
    await page.evaluate(() => {

      return [...document.querySelectorAll('*')]
      .map(x => ({
        text:x.innerText,
        tag:x.tagName
      }));

    });

  return dom;
}

Sau đó mới đưa DOM rút gọn cho AI.

8. knowledge/action-library.json
{
  "Login": [
    {
      "action": "fill",
      "target": "Email"
    },
    {
      "action": "fill",
      "target": "Password"
    },
    {
      "action": "click",
      "target": "Login"
    }
  ]
}
9. knowledge/selector-cache.json
{
  "Email": "#email",
  "Password": "#password",
  "Login": "button[type='submit']"
}
10. testcases/login.yaml
name: Login Success

steps:

  - action: navigate
    value: https://example.com/login

  - action: fill
    target: Email
    value: user@test.com

  - action: fill
    target: Password
    value: 123456

  - action: click
    target: Login

  - action: verify
    target: Dashboard
11. runtime/testcase-runner.ts
import yaml from 'js-yaml';
import fs from 'fs';

const testcase =
  yaml.load(
    fs.readFileSync(
      process.argv[2],
      'utf8'
    )
  );

for (const step of testcase.steps) {

  await actionEngine.execute(step);

}
Điều tôi sẽ thay đổi nếu mục tiêu là Codex Cloud Agent

Tôi sẽ bổ sung thêm:

runtime/
 ├── planner.ts
 ├── semantic-matcher.ts
 ├── dom-compressor.ts
 ├── locator-resolver.ts
 ├── memory.ts

và dùng luồng:

Testcase
↓
Planner (LLM 1 lần)
↓
Action Graph
↓
Locator Resolver
↓
Playwright
↓
Assertion Engine
↓
Report

Trong mô hình đó, AI chỉ tham gia ở:

Parse testcase.
Recovery khi selector hỏng.

Còn toàn bộ click/fill/verify đều do Playwright runtime thực hiện. Đây là cách để giảm mạnh số lần snapshot và khiến việc chạy testcase tự nhiên gần với một "AI QA Engineer" hơn là một agent liên tục đọc snapshot rồi suy luận lại.
