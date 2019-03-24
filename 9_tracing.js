const puppeteer = require('puppeteer');
(async () => {
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.tracing.start({path: '9_tracing.json'});
await page.goto('https://www.sonymobile.com/gb');
await page.tracing.stop();
await browser.close();
})();