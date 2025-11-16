import { test, expect } from '@playwright/test';

test('User can login, add product to cart, verify it, and logout', async ({ page }) => {
  // Visit website
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Add first product to cart
  const productName = await page.locator('.inventory_item_name').first().innerText();
  await page.locator('.btn_inventory').first().click();

  // Open cart
  await page.click('.shopping_cart_link');

  // Verify product in cart
  const cartItemName = await page.locator('.inventory_item_name').innerText();
  expect(cartItemName).toBe(productName);

  // Logout
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');

  // Verify user is logged out
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});
