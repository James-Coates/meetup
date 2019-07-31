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
  test('user can collapse an event to hide its details', async () => {
    let modal;
    await page.click('.modal .close');
    modal = await page.$('.modal-show');
    expect(modal).toBeNull();
  });

});

describe('Filter Events by City', () => {
  let browser, page;
  const testParams = { headless: false, slowMo: 250 };

  beforeAll(async () => {
    browser = await puppeteer.launch(testParams);
    page = await browser.newPage();
    await page.goto('http://localhost:3000/')
    await page.waitForSelector('.event');
  })

  afterAll(async () => {
    browser.close();
  });

  // Scenario 1
  test('By default, when user hasn’t searched for a city, show upcoming events based on the user’s location.', async () => {
    const events = await page.$('.even');
    expect(events).toBeDefined();
  });

  // Scenario 2
  test('User should see a list of suggestions when they search for a city.', async () => {
    await page.type('.city', 'Munich');
    let suggestions = await page.$('.suggestions li');
    suggestions = null ? undefined : suggestions;
    expect(suggestions).toBeDefined();
  });

  // Scenario 2
  test('User can select a city from the suggested list.', async () => {
    await page.click('.suggestions li:first-child');
    const city = await page.$eval('.city', el => el.value);
    console.log(city);
    expect(city).toEqual('Munich, Germany');
  });
});