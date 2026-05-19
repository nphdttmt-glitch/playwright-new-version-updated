import { test, expect } from "../../fixtures/test-fixture";
import { LoginPage } from "../../pages/login/login.page";
import { DashboardPage } from "../../pages/dashboard/dashboard.page";
import { Config } from "../../config/env.config";
import { step } from "allure-js-commons";

test.describe("Login Tests", () => {
    test("login page is displayed", async ({ page }) => {
        const loginPage = new LoginPage(page);

        await step("Navigate to login page", async () => {
            await loginPage.goto(Config.baseURL);
        });

        await step("Verify Login page is displayed", async () => {
            await loginPage.assertVisible(loginPage.pageTitle, "Verify login page title is displayed");
        });
    });

    test("login successfully with fixture", async ({ loggedInPage }) => {
        const dashboardPage = new DashboardPage(loggedInPage);

        await step("Verify redirected to dashboard", async () => {
            await dashboardPage.assertUrl(/.*inventory/, "Verify regex URL for dashboard");
        });
    });
});
