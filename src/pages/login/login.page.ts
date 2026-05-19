import { Page, Locator } from "@playwright/test";
import { BasePage } from "../base.page";
import { step } from "allure-js-commons";

export class LoginPage extends BasePage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly message: Locator;
    readonly pageTitle: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator('//input[@id="user-name"]');
        this.passwordInput = page.locator('//input[@id="password"]');
        this.loginButton = page.locator('//input[@id="login-button"]');
        this.message = page.locator('#message');
        this.pageTitle = page.locator('//div[@class="login_logo" and text()="Swag Labs"]');
    }

    // =========================
    // 🚀 Actions
    // =========================
    async login(username: string, password: string) {
        await step(`Enter username: ${username}`, async () => {
            await this.type(this.usernameInput, username, "Enter username");
        });

        await step(`Enter password`, async () => {
            await this.type(this.passwordInput, password, "Enter password");
        });

        await step(`Click login button`, async () => {
            await this.click(this.loginButton, "Click login button");
        });
    }

    // =========================
    // 📦 Helpers
    // =========================
    async getMessage(): Promise<string | null> {
        return await step("Get message after login", async () => {
            return this.getText(this.message, "Get message");
        });
    }

    // =========================
    // ✅ Assertions
    // =========================
}
