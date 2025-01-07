import { test, expect } from '@playwright/test'
test('Part 12 Multi Select Dropdown Test', { tag: ['@11To15', '@11To20'] }, async ({ page }) => {

	await page.goto('https://testautomationpractice.blogspot.com/')

	await page.selectOption('#colors', ['Red', 'Blue', 'Green'])

	const options = await page.$$("//select[@id='colors']/option")
	expect(options.length).toBe(7)

	let flag = false
	for (const option of options) {
		const text = await option.textContent()
		console.log('text: ', text)

		if (text.includes('Green')) {
			flag = true
			break
		}
	}
	expect(flag).toBeTruthy()

	await page.waitForTimeout(2000)
	await page.close()
})