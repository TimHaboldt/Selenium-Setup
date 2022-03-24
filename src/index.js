import {Builder, By, Key, until} from 'selenium-webdriver'

function delay (ms) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

(async function example() {
    // Only works if you have chrome installed. Otherwise use firefox
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://www.workwise.io');
        await driver.manage().setTimeouts({implicit: 300000})
        await driver.findElement(By.xpath("//span[contains(text(),'Alle akzeptieren')]")).click();
        await delay(10000);
    } finally {
        await driver.quit();
    }
})();