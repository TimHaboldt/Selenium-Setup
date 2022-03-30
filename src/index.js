import {Builder, By, Key, until} from 'selenium-webdriver'
import assert from "assert";

function delay (ms) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

(async function example() {
    // Only works if you have chrome installed. Otherwise use firefox
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().setTimeouts({implicit: 300000})
    await driver.manage().window().maximize();

    try {
        await driver.get('http://www.workwise.io');
        await driver.findElement(By.xpath("//span[contains(text(),'Alle akzeptieren')]")).click();
        const loginButtonContent = await driver.findElement(By.xpath("//button")).getText();
        assert.equal(loginButtonContent, 'Einloggen');
    } finally {
        await driver.quit();
    }
})();