
import { Builder, Capabilities, By } from "selenium-webdriver"
import { forEachChild } from "typescript"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(1000)

})

test('choices is displayed when you click draw', async () => {
    await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(1000)
})

// Check that clicking an “Add to Duo” button displays the div with id = “player-id”
test('clicking an “Add to Duo” button displays the div with id = “player-id”', async () => {
    // await driver.findElement(By.id('draw')).click()
    // const choices = await driver.findElement(By.className('choices'))
    // const firstBot = choices[0]

    // await driver.sleep(1000)
})

