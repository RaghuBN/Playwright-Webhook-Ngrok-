import { test, expect } from '@playwright/test'
test("Input Box", { tag: ['@07To10', '@03To10'] }, async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register')

    //input
    await expect(page.locator('#FirstName')).toBeVisible()
    await expect(page.locator('#FirstName')).toBeEmpty()
    await expect(page.locator('#FirstName')).toBeEditable()
    await expect(page.locator('#FirstName')).toBeEnabled()

    await page.fill('#FirstName', 'Hari')
    await page.waitForTimeout(2000)
    await page.close()
})