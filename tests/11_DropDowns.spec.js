import { test, expect } from '@playwright/test'
test('Dropdown Test', { tag: ['@11To15', '@11To20'] }, async ({ page }) => {

	await page.goto('https://testautomationpractice.blogspot.com/')

	await page.selectOption("#country", 'India')
	await page.selectOption("#country", { label: 'India' })
	await page.selectOption('#country', { value: 'uk' })
	await page.selectOption('#country', { index: 6 })

	const options = await page.$$("//select[@id='country']/option")
	expect(options.length).toBe(10)

	const options1 = page.locator("//select[@id='country']/option")
	await expect(options1).toHaveCount(10)

	let flag = false
	for (const option of options) {
		const textOptions = await option.textContent()
		console.log('textOptions: ', textOptions)

		if (textOptions.includes('India')) {
			flag = true
			break
		}
	}
	expect(flag).toBeTruthy()

	await page.waitForTimeout(3000)
	await page.close()
})