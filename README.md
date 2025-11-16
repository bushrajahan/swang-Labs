

This project automates the following scenario using **Playwright** and **JavaScript**:

**Scenario:**  
A user logs in with valid credentials, adds one product to the cart, verifies the product name in the cart, and logs out.

---

##  How to Run

### 1. Install dependencies
```bash
npm install
````

### 2. Install Playwright browsers

```bash
npx playwright install
```

### 3. Run the test

```bash
npx playwright test
```

### 4. Run in headed mode (see real browser actions)

```bash
npx playwright test --headed
```

### 5. View HTML test report

```bash
npx playwright show-report
```

---

##  Project Structure

```
sauce-demo-playwright/
 ├── tests/
 │    └── sauce-demo.spec.js
 ├── package.json
 ├── playwright.config.js
 └── README.md
```

---

##  Tools Used

* **Playwright** – Automation testing framework
* **JavaScript (Node.js)** – Programming language
* **SauceDemo** – Public demo website for testing

---

##  Notes

* The test runs in **headless mode by default**.
* To see the browser actions live, run with `--headed`.
* Screenshots and videos are generated automatically for failed tests.

---

##  Test Steps

1. Open [https://www.saucedemo.com](https://www.saucedemo.com)
2. Login with valid credentials (`standard_user` / `secret_sauce`)
3. Add the first product to the cart
4. Open cart and verify product name
5. Logout


Do you want me to do that?
```
