import puppeteer from 'puppeteer';

describe('show/hide event details', () => {
  // const testParams = { slowMo: 100 };
  let browser, page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(async () => {
    browser.close();
  });

  // Scenario 1
  test('an event is collapsed by default', async () => {
    const modal = await page.$('.modal');
    expect(modal).toBeNull();
  });

  // Scenario 2
  test('user can expand an event to reveal its details', async () => {
    await page.click('.event .details-btn');
    let modal = await page.$('.modal');
    modal = null ? undefined : modal;
    expect(modal).toBeDefined();
  });

  // // Scenario 3
  test('user can collapse an event to hide its details', async() => {
    let modal;
    await page.click('.modal .close')
      .then(
        setTimeout(async ()=> {
          modal = await page.$('.modal');
        }, 100));
    // const modal = await page.$('.modal');
    expect(modal).toBeUndefined();
  });

});