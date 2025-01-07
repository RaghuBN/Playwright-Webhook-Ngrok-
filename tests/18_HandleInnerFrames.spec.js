import { test } from '@playwright/test'
test('Part 18 Inner Frames Test', { tag: ['@16To20', '@11To20'] }, async ({ page }) => {

	await page.goto('https://ui.vision/demo/webtest/frames/')

	const frame3 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })
	frame3.fill("input[name='mytext3']", '3')

	const childFrames = frame3.childFrames()
	console.log('childFrames: ', childFrames.length)

	await childFrames[0].click('.vd3tt')

	await page.waitForTimeout(2000)
	await page.close()

})