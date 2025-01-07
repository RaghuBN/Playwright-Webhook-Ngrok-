import { expect, test } from '@playwright/test'
test('Part 14 Google Search', { tag: ['@11To15', '@11To20'] }, async ({ page }) => {
	await page.goto('https://www.google.com/')

	await page.fill("#APjFqb", "playwright")
	//await page.locator('#APjFqb').pressSequentially('selenium',{delay:500})

	await page.waitForSelector("//div[@class='wM6W7d']/span")
	const options = await page.$$("//div[@class='wM6W7d']/span")

	for (const option of options) {
		const text = await option.textContent()
		console.log('text: ', text)

		if (text.includes('playwright tutorial')) {
			await option.click()
			break
		}
	}

	await page.goto('https://playwright.dev/')
	await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright')

	await page.waitForTimeout(2000)
	await page.close()
})