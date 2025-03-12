<h3 align="center"> 👩‍💻 E2E Test Automation for SauceDemo </h3>


<br />


## 📌 Overview
This project contains an End-to-End (E2E) test automation script using **Playwright + TypeScript** to verify the purchase flow on [SauceDemo](https://www.saucedemo.com/).  
The test follows the **Page Object Model (POM)** approach for better **scalability** and **maintainability**.


#### Additionally, the project:  
- Uses **dynamic (clean) test data** via `testData.json`  
- **Captures screenshots** after each test run and attaches them to the test report  
- Includes a **CI/CD pipeline configuration** via a GitHub Actions `.yml` workflow file  


<br />


## 🤖 Features & Test Flow Covered
- 🔑 **Login** with valid credentials  
- 🛍️ **Adding two specific products** (`Sauce Labs Bolt T-Shirt` & `Sauce Labs Fleece Jacket`) to the cart  
- 🛒 **Cart Page Assertions**:  
  - Ensure exactly **two** products are in the cart  
  - Validate **product names** in the cart  
- 📦 **Proceeding to checkout**  
- 🏁 **Completing the purchase**
- ✅ **Checkout Page Assertions**:  
  - Validate purchase **success message**  
  - Ensure **order confirmation text** is displayed  
- 📸 **Screenshot capturing** after each test execution  
- 🏗️ **CI/CD Pipeline Integration** with GitHub Actions 


<br />


## 🛠️ Tech Stack
- **Test Framework:** Playwright  
- **Language:** TypeScript  
- **Design Pattern:** Page Object Model (POM)  
- **Data Handling:** Dynamic JSON-based test data  
- **CI/CD:** GitHub Actions  


<br />


## ⚙️ Prerequisites
Ensure you have the following installed:  
- [Node.js](https://nodejs.org/) (Latest LTS recommended)  
- [Playwright](https://playwright.dev/) (Installed via npm)  


<br />


## 🚀 Installation & Setup

1️⃣ **Clone the repository:**  
```sh
git clone <repo-link>
cd <repo-folder>
```
  
2️⃣ **Install dependencies:**  
```sh
npm install
```
  
3️⃣ **Run the test:**  
```sh
npx playwright test
```


<br />


## 📊 Test Data Management
All static data (URLs, credentials, product details) are stored in `testData.json` for **clean data handling**.  

Example `testData.json`:  
```json
{
  "url": "https://www.saucedemo.com/",
  "username": "standard_user",
  "password": "secret_sauce",
}
```


<br />


## 📁 File Structure
```
|-- tests
|   |-- e2eTest.spec.ts   # Main test script
|-- pages
|   |-- LoginPage.ts         # Page Object for Login Page
|   |-- ProductsPage.ts      # Page Object for Products Page
|   |-- CartPage.ts          # Page Object for Cart Page (Includes assertions)
|   |-- CheckoutPage.ts      # Page Object for Checkout Page (Includes assertions)
|-- testData
|   |-- testdata.json        # Contains test data (username, password, URLs, etc.)
|-- .github/workflows
|   |-- playwright-ci.yml    # CI/CD workflow for running tests in GitHub Actions
|-- README.md                # Documentation
```


<br />


## 🚀 CI/CD Pipeline Integration
This project includes a **GitHub Actions workflow** that runs the test suite automatically in a **CI/CD environment**.

To enable automated test execution in your pipeline:  
- Ensure the repository is hosted on **GitHub**  
- Push your changes, and the workflow will trigger automatically  
- View test results and **screenshots** in GitHub Actions  

To manually trigger the workflow:  
```sh
git push origin main
```

<br />

## 📊 Reporting

Playwright automatically generates **test reports** after execution. To view reports:  
```sh
npx playwright show-report
```


<br />


## ⚠️ Notes
- The credentials used are **provided by SauceDemo** and are for **testing purposes only**.  
- This script uses **Playwright’s built-in assertions** for validation.  


<br />


**🎯 Happy Testing!** 🚀  
