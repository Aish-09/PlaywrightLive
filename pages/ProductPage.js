const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class ProductPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);


        this.productsLink = page.locator('a[href="/products"]');
        this.allProductsHeader = page.locator('h2.title:has-text("All Products")');
        this.firstproductViewProductBtn = page.locator('a').filter({ hasText: 'View Product' }).first();

        this.productInformationSection = page.locator('.product-information');
        this.productavailability = page.locator('b:has-text("Availability:")')
        this.productcondition = page.locator('b:has-text("Condition:")')
        this.productbrand = page.locator('b:has-text("Brand:")')

    }
    async clickProductsLink() {
        await this.productsLink.click();
        await this.dismissAdIfPresent();
    }

    async firstProductViewProduct() {
        await this.firstproductViewProductBtn.click();
        await this.dismissAdIfPresent();}
    }

// Named export
module.exports = { ProductPage };