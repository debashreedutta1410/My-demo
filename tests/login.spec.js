import { test, expect } from '@playwright/test';

test('should load Contentstack login page', async ({ page }) => {

  await page.goto('https://eu-app.contentstack.com/#!/login');
  await expect(page).toHaveTitle('Login | Contentstack');

  await page.locator('//input[@id="email"]').fill('debashreedutta1410@gmail.com');
  await page.locator('//input[@id="password"]').fill('Ayesha@14');
  await page.locator('[data-test-id="cs-email-login"]').click();

  await expect(page).toHaveTitle('Stacks | Contentstack');


});

test('incorrect login', async ({ page }) => {

  await page.goto('https://eu-app.contentstack.com/#!/login');
  await expect(page).toHaveTitle('Login | Contentstack');

  await page.locator('//input[@id="email"]').fill('debashreedutta1410@gmail.com');
  await page.locator('//input[@id="password"]').fill('Ayesha');
  await page.locator('[data-test-id="cs-email-login"]').click();
  await expect(page.locator('data-test-id="cs-notification-title"')).toBeVisible();

  await expect (page.locator('//*[text()="Looks like your email or password is invalid. Please try again or reset your password."]')).toBeVisible();

 

});

//Base
//tests/pages - stacks, launch
//report (screenshots)
//config.js
//cucumber.js

