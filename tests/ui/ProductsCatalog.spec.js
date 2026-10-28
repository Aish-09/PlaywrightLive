const { test, expect } = require('@playwright/test');
const { ProductPage } = require('../../pages/ProductPage');

test.describe('Products Catalog', () => {
    test('TC01: Verify Products Page and Product Details @smoke', async ({ page }) => {
        const productPage = new ProductPage(page);

        // 1. Navigate to home page
        await productPage.navigateTo('/');
        await expect(page).toHaveTitle(/Automation Exercise/);

        await productPage.clickProductsLink();

        // 2. Verify that user is navigated to ALL PRODUCTS page successfully
        await expect(productPage.allProductsHeader).toBeVisible();
        await expect(productPage.allProductsHeader).toContainText('All Products',{ignoreCase: true});

        await productPage.firstProductViewProduct();

        // 3. Verify that user is navigated to product detail page
        await expect(page).toHaveURL(/.*product_details/);
        await expect(productPage.productInformationSection).toBeVisible();
        await expect(productPage.productavailability).toContainText('Availability:', {ignoreCase: true});
        await expect(productPage.productcondition).toContainText('Condition:', {ignoreCase: true});
        await expect(productPage.productbrand).toContainText('Brand:', {ignoreCase: true});
    })
})