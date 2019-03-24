const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();  
//const browser = await puppeteer.launch({headless: false});
const page = await browser.newPage();

await page.goto('https://sonymobile.com/gb');
await page.screenshot({path: '1_simpleexample.png'});

await browser.close();

})();