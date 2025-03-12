import { Page } from "@playwright/test";

export default class LoginPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async fillUsername(username: string) {
    await this.page.fill("#user-name", username);
  }

  async fillPassword(password: string) {
    await this.page.fill("#password", password);
  }
  
  async loginButton() {
    return this.page.locator("#login-button");
  }

  async clickLogin() {
    await (await this.loginButton()).click();
  }
}