const puppeteer = require('puppeteer');

(async () => {
const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto('https://google.com');
await page.pdf({path: '2_generatingpdf.pdf',format: 'A4'});

await browser.close();

})();