const puppeteer = require('puppeteer');

(async () => {
const browser = await puppeteer.launch()
const page = await browser.newPage()
await page.goto('https://twitter.com/aleynatilki')
const timeline = await page.$('.ProfileHeaderCard');
await timeline.screenshot({
path:"profileHeader.png"
});
browser.close();
})();
