import { Page } from "@playwright/test";

export default class CheckoutPage {
     page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
        await this.page.fill("[data-test='firstName']", firstName);
        await this.page.fill("[data-test='lastName']", lastName);
        await this.page.fill("[data-test='postalCode']", postalCode);
        await this.page.click("[data-test='continue']");
    }

    async completePurchase() {
        await this.page.click("[data-test='finish']");
    }

    async verifySuccessMessage() {
        return this.page.locator('[data-test="complete-header"]');
    }
}
