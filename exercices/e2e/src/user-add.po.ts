import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/users/add') as Promise<unknown>;
  }

  fillNameField(text: string) {
    // element(by.css('app-user-form input[name=name"]'))
    return element(by.name('name')).sendKeys(text);
  }

  // getTitleText(): Promise<string> {
  //   return element(by.css('app-root .content span')).getText() as Promise<string>;
  // }
}
