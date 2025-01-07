import { test } from '@playwright/test'
test('Part 22 Right Click Test', { tag: ['@21To25', '@21To30'] }, async ({ page }) => {

	await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

	const rightClick = page.locator('.context-menu-one')
	await rightClick.click({ button: 'right' })

	await page.waitForTimeout(2000)
	await page.close()
})