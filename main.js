const puppeteer = require('puppeteer');

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://www.cnn.com/politics');
    await page.screenshot({'path': 'test.png'});

    browser.close();
}

run();
