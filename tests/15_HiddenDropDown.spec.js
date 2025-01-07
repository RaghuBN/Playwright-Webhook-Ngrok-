import { test } from '@playwright/test'
test('Part 15 Hidden Dropdown Test', { tag: ['@11To15', '@11To20'] }, async ({ page }) => {

	await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

	await page.getByPlaceholder('Username').fill('Admin')
	await page.getByPlaceholder('Password').fill('admin123')
	await page.getByRole('button', { name: 'Login' }).click()
	await page.getByText('PIM').click()
	await page.click("(//div[@class='oxd-select-text-input'])[3]")

	await page.waitForSelector("//div[@role='listbox']//span")   //setTimeout(function(){debugger}, 5000)  in Console
	const options = await page.$$("//div[@role='listbox']//span")

	for (const option of options) {
		const text = await option.textContent()
		console.log('text: ', text)

		if (text.includes('Developer')) {
			await option.click()
			break
		}
	}
	await page.waitForTimeout(2000)
	await page.close()
})