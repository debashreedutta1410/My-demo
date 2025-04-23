import { test, expect } from '@playwright/test';

test('should load Contentstack login page', async ({ page }) => {
  await page.goto('/');
  
  await expect(page).toHaveTitle(/Contentstack/);
});