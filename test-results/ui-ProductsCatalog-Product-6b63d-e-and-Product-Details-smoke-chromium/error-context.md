# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\ProductsCatalog.spec.js >> Products Catalog >> TC01: Verify Products Page and Product Details @smoke
- Location: tests\ui\ProductsCatalog.spec.js:5:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('h2.title:has-text("All Products")')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('h2.title:has-text("All Products")') with timeout 5000ms
  - waiting for locator('h2.title:has-text("All Products")')

```

```yaml
- heading "This website is under heavy load (queue full)" [level=2]
- paragraph: We're sorry, too many people are accessing this website at the same time. We're working on this problem. Please try again later.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { ProductPage } = require('../../pages/ProductPage');
  3  | 
  4  | test.describe('Products Catalog', () => {
  5  |     test('TC01: Verify Products Page and Product Details @smoke', async ({ page }) => {
  6  |         const productPage = new ProductPage(page);
  7  | 
  8  |         // 1. Navigate to home page
  9  |         await productPage.navigateTo('/');
  10 |         await expect(page).toHaveTitle(/Automation Exercise/);
  11 | 
  12 |         await productPage.clickProductsLink();
  13 | 
  14 |         // 2. Verify that user is navigated to ALL PRODUCTS page successfully
> 15 |         await expect(productPage.allProductsHeader).toBeVisible();
     |                                                     ^ Error: expect(locator).toBeVisible() failed
  16 |         await expect(productPage.allProductsHeader).toContainText('All Products',{ignoreCase: true});
  17 | 
  18 |         await productPage.firstProductViewProduct();
  19 | 
  20 |         // 3. Verify that user is navigated to product detail page
  21 |         await expect(page).toHaveURL(/.*product_details/);
  22 |         await expect(productPage.productInformationSection).toBeVisible();
  23 |         await expect(productPage.productavailability).toContainText('Availability:', {ignoreCase: true});
  24 |         await expect(productPage.productcondition).toContainText('Condition:', {ignoreCase: true});
  25 |         await expect(productPage.productbrand).toContainText('Brand:', {ignoreCase: true});
  26 |     })
  27 | })
```