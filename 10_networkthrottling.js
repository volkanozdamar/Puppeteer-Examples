const puppeteer = require('puppeteer')
puppeteer.launch().then(async browser => {
// Create a new tab
const page = await browser.newPage()
// Connect to Chrome DevTools
const client = await page.target().createCDPSession()

// Set throttling property
await client.send('Network.emulateNetworkConditions', {
	'offline': false,
	'downloadThroughput': 4 * 1024 * 1024 / 8, 
	'uploadThroughput': 3 * 1024 * 1024 / 8, 
	'latency': 150
})

// Navigate and take a screenshot
await page.tracing.start({path: '10_networkthrottling.json'});
await page.goto('https://volkanozdamar.com')
await page.tracing.stop();
await page.screenshot({path: '10_networkthrottling.png'})
await browser.close()
})
