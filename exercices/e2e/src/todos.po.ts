import { browser, by, element } from 'protractor';

export class TodosPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/todos') as Promise<unknown>;
  }

  fillTodoField(text: string) {
    return element(by.css('app-todo-form input')).sendKeys(text);
  }

  clickOnButton() {
    return element(by.css('app-todo-form button')).click();
  }

  getItemsText() {
    return element.all(by.css('app-todo-item')).map<string>((el) => el.getText());
  }
}
