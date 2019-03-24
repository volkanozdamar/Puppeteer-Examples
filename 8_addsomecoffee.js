const puppeteer = require('puppeteer');

describe( 'Test Website', async () => {
it( 'Browser Opens Successfully', async () => {
	browser = await puppeteer.launch();
});
it( 'Page Open Successfully', async () => {
	page = await browser.newPage();
});
it( 'Website Should Load', async () => {
	const response = await page.goto('https://sonymobile.com/gb', {
	waitUntil:'domcontentloaded'});
	}).timeout(0);
it( 'Browser Closes Successfully', async () => {
	await browser.close();
});
});
