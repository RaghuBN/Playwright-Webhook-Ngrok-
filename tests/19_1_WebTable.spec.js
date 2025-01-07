import { test, expect } from '@playwright/test'
test('Handling WebTable', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    console.log('---total number of columns & rows----------------')
    //1. total number of columns & rows 
    const table = page.locator("//table[@id='productTable']")
    const columns = page.locator("//table[@id='productTable']//th")
    console.log('no of colums: ', await columns.count())
    expect(await columns.count()).toBe(4)
    
    const rows = page.locator("//table[@id='productTable']/tbody/tr")
    console.log('no of rows: ', await rows.count())
    expect(await rows.count()).toBe(5)
  
    console.log('-----select check box for Smartwatch--------------')
    //2. select check box for Smartwatch
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch',
    })
    await matchedRow.locator('input').check()   
    
    console.log('------select multiple products by re-use function-------------')
    //3. select multiple products by re-use function
    await selectProduct(rows, page, 'Tablet')
    await selectProduct(rows, page, 'Smartphone')
    await selectProduct(rows, page, 'Laptop')
    console.log('----print all product details using loop same page---------------')

async function selectProduct(rows, page, name) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name,
    })
    await matchedRow.locator('input').check()
 }
})
