import { test, expect } from '@playwright/test'
test('Part 23 DBL click Test', { tag: ['@21To25', '@21To30'] }, async ({ page }) => {

	await page.goto('https://testautomationpractice.blogspot.com/#')
	const button = page.getByRole('button', { name: 'Copy Text' })
	await button.dblclick()

	await expect(page.locator('#field2')).toHaveValue('Hello World!')

	await page.waitForTimeout(2000)
	await page.close()
})