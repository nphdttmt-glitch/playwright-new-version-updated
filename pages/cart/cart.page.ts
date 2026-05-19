import { Page, expect } from "@playwright/test";
import { BasePage } from "../base.page";
import { step } from "allure-js-commons";

export class CartPage extends BasePage {

    constructor(page: Page) {
        super(page);

    }

    // =========================
    // 🚀 Actions
    // =========================
    async removeProductFromCart(productName: string) {
        const productLocator = this.page.locator(`//div[@class="cart_item" and .//div[contains(text(), "${productName}")]]`);
        const removeButton = productLocator.locator('xpath=.//button[text()="Remove"]');
        await step(`Click "Remove" button for product: ${productName}`, async () => {
            await this.click(removeButton, `Click "Remove" button for product: ${productName}`);
        });
    }

    // =========================
    // 📦 Helpers
    // =========================


    // =========================
    // ✅ Assertions
    // =========================
    async assertProductRemoved(productName: string) {
        const productLocator = this.page.locator(`//div[@class="cart_item" and .//div[contains(text(), "${productName}")]]`);
        await step(`Verify product "${productName}" has been removed from the cart`, async () => {
            await expect(productLocator).toHaveCount(0);
        });
    }

    async assertProductExists(productName: string) {
        const productLocator = this.page.locator(`//div[@class="cart_item" and .//div[contains(text(), "${productName}")]]`);
        await step(`Verify product "${productName}" exists in the cart`, async () => {
            await expect(productLocator).toHaveCount(1);
        });
    }
}
