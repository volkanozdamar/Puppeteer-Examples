const puppeteer = require('puppeteer');

(async () => {
 const browser = await puppeteer.launch({headless: false});
 const page = await browser.newPage();
 await page.goto('https://sonymobile.com/gb');
 await page.click('#menu-primary-menu > li:nth-child(2) > a');
 await page.waitForSelector('.btn-alt-special');
 await page.$('.btn-alt-special');
 await page.click('.btn-alt-special');
 await page.click('#phones-display_size-lt_5');
 const titles = await page.evaluate(
     () =>
     Array.from(page.$$('div.product-name-wrap a strong'))
     .map(partner=>partner.innerText.trim()
     )
    );
 console.log(titles);
 
 await browser.close();
})(); 