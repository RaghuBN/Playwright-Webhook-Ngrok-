import { test, expect } from '@playwright/test';

test.describe('Handling of JavaScript Alert,Confirm,Prompt', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    })

    test('Handling JS Alert - Validate Alert Text and Click OK', async ({ page }) => {
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toEqual('I am a JS Alert');
            await dialog.accept()
            await page.waitForTimeout(5000)
        })
        await page.locator('text=Click for JS Alert').click()
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
        await page.waitForTimeout(5000)
    })

    test('Handling JS Confirm - Validate Confirm Text and Click OK', async ({ page }) => {
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toEqual('I am a JS Confirm')
            await dialog.accept()
            await page.waitForTimeout(5000)
        })
        await page.locator('text=Click for JS Confirm').click()
        await expect(page.locator('#result')).toHaveText('You clicked: Ok')
        await page.waitForTimeout(5000)
    })

    test('Handling JS Confirm - Validate Confirm Text and Click Cancel', async ({ page }) => {
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toEqual('I am a JS Confirm')
            await dialog.dismiss()
        })
        await page.locator('text=Click for JS Confirm').click()
        await expect(page.locator('#result')).toHaveText('You clicked: Cancel')
        await page.waitForTimeout(5000)
    })

    test('Handling JS Prompt - Input text in prompt, Click OK and Validate Input Text', async ({ page }) => {
        page.on('dialog', async dialog => {
            expect(dialog.message()).toEqual('I am a JS prompt')
            await dialog.accept('Raghavendra')
        })
        await page.locator('text=Click for JS Prompt').click()
        await expect(page.locator('#result')).toHaveText('You entered: Raghavendra')
        await page.waitForTimeout(5000)
    })
})