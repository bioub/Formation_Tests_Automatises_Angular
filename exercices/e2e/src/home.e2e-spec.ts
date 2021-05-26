import { browser, logging } from 'protractor';

import { HomePage } from './home.po';

describe('Home page', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  it('should show welcome', async () => {
    await page.navigateTo();
    const welcomeText = await page.getWelcomeText();
    expect(welcomeText).toContain('Welcome');
  });

  // it('should show bonjour in french', async () => {
  //   await page.navigateTo();
  //   // cliquer sur le texte en pour passer l'application en fr
  //   const welcomeText = await page.getWelcomeText();
  //   expect(welcomeText).toContain('Bonjour');
  // });
});
