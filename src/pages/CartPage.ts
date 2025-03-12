import { Page } from "@playwright/test";

export default class CartPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getCartItems() {
    return this.page.locator('[data-test="inventory-item"]');
  }

  async getCartNames() {
    return this.page.locator('[data-test="inventory-item-name"]');
  }

  async proceedToCheckout() {
    await this.page.click("[data-test='checkout']");
  }
}
