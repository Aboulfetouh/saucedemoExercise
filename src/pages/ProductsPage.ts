import { Page } from "@playwright/test";

export default class ProductsPage {
     page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addProductsToCart(productId: string) {
            await this.page.locator(`#${productId}`).click();
    }

    async goToCart() {
        await this.page.click('[data-test="shopping-cart-link"]');
    }
}