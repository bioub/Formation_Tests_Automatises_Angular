import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getWelcomeText(): Promise<string> {
    return element(by.css('app-home p')).getText() as Promise<string>;
  }
}
