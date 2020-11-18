const ig = require('express').Router();
const puppeteer = require("puppeteer");

async function getVideo(URL) {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto('https://downloadgram.com/');

    await page.type('#dg-url', `${URL}`);
	await page.click('#dg-submit', {delay: 300});

    await page.waitForSelector('#results > div > a', {delay: 300);
    let getData = await page.$eval('#results > div > a', (element) => {
        return element.getAttribute('href');
    });
	browser.close();
    return { getData }
}

youtube.get('/', async (req, res) => {
    var URL = req.query.URL;
    const gets = await igram(URL);
    res.json(gets)
});

module.exports = ig;