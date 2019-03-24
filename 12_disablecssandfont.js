const puppeteer = require('puppeteer');

(async () => {
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setRequestInterception(true);
    
page.on('request', (req) => {
    if(req.resourceType() == 'stylesheet' || req.resourceType() == 'font' ||
req.resourceType() == 'image'){
        req.abort();
    }
    else {
        req.continue();
    }
});
await page.goto('https://sonymobile.com/gb');
await page.screenshot({path: '12_disablecssandfont.png'});

await browser.close();

})();
