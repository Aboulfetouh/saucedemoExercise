import { test, expect } from "@playwright/test";
import LoginPage from "../src/pages/LoginPage";
import ProductsPage from "../src/pages/ProductsPage";
import CartPage from "../src/pages/CartPage";
import CheckoutPage from "../src/pages/CheckoutPage";
import testData from "../src/testData/testdata.json";

test.afterEach(async ({}, testInfo) => {
  console.log(
    `The test case [${testInfo.title}] finished with status [${testInfo.status}]`
  );
});

test("E2E Purchase Flow on SauceDemo", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Navigate & Login
  await loginPage.navigate(testData.url);
  await loginPage.fillUsername(testData.username);
  await loginPage.fillPassword(testData.password);
  await loginPage.clickLogin();

  // Validating we've been redirected to the correct page
  await expect(page).toHaveURL(/.*inventory/);

  // Add two products to cart
  await productsPage.addProductsToCart("add-to-cart-sauce-labs-backpack");
  await productsPage.addProductsToCart("add-to-cart-sauce-labs-fleece-jacket");
  await productsPage.goToCart();

  // Validate product count and names then proceed to checkout
  await expect(page).toHaveURL(/.*cart/);
  await expect(await cartPage.getCartItems()).toHaveCount(2);
  expect((await cartPage.getCartNames()).first()).toContainText(
    testData.expectedProductShirt
  );
  expect((await cartPage.getCartNames()).last()).toContainText(
    testData.expectedProductJacket
  );
  await cartPage.proceedToCheckout();


  // Fill checkout details & complete purchase
  await expect(page).toHaveURL(/.*checkout-step-one/);
  await checkoutPage.fillCheckoutInfo(
    testData.checkout.firstName,
    testData.checkout.lastName,
    testData.checkout.postalCode
  );
  await checkoutPage.completePurchase();

  // Verify successful order message
  await expect(page).toHaveURL(/.*checkout-complete/);
  expect(await checkoutPage.verifySuccessMessage()).toBeVisible();
  expect(await checkoutPage.verifySuccessMessage()).toContainText(
    testData.expectedSuccessfulMsg
  );
});
