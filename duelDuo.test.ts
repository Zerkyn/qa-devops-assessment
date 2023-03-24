
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})
test('Draw button shows bot choices', async () => {
    await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    const choicesShown = await choices.isDisplayed()
    expect(choicesShown).toBe(true)
})
test('"Add to duo" button shows player duo', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.className('bot-btn')).click()
    await driver.sleep(2000)
    const duo = await driver.findElement(By.id('player-duo'))
    const duoShown = await duo.isDisplayed()
    expect(duoShown).toBe(true)
})
test('"Removed from Duo" button removes bot', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.className('bot-btn')).click()
    await driver.sleep(2000)
    await driver.findElement(By.xpath("//div[@className='player-duo'"))
    await driver.findElement(By.className('bot-btn')).click()
    await driver.sleep(2000)
    const duo = await driver.findElement(By.id('player-duo'))
    const duoShown = await duo.isDisplayed()
    expect(duoShown).toBe(false)
})