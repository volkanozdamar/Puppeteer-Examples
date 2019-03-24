const puppeteer = require('puppeteer');

(async () => {
 const browser = await puppeteer.launch({headless: false});
 const page = await browser.newPage();
 await page.goto('https://google.com');
 await page.type('.gLFyf','Puppeteer');
 await page.click(' div.FPdoLc.VlcLAe > center > input[type="submit"]:nth-child(1)');
 //await browser.close();
})(); 