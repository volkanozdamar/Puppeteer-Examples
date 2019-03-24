const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const pixeltwo = devices['Pixel 2'];

puppeteer.launch().then(async browser => {
const page = await browser.newPage();
await page.emulate(pixeltwo);
await page.goto('https://www.sonymobile.com/gb');
await page.screenshot({path: '4_emulatemobile.png',fullPage:false});
await browser.close();
});