import { test, expect } from '@playwright/test'
test('Radio buttons', { tag: ['@07To10', '@03To10'] }, async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register')

    //await page.locator('#gender-female').click()
    await page.locator('#gender-female').check()

    //Validation
    await expect(page.locator('#gender-female')).toBeChecked()
})