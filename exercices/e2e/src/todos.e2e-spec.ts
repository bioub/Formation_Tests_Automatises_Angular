import { browser, logging } from 'protractor';

import { TodosPage } from './todos.po';

describe('Home page', () => {
  let page: TodosPage;

  beforeEach(() => {
    page = new TodosPage();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  it('should show see an new todo', async () => {
    await page.navigateTo();
    const initialItemsText = await page.getItemsText();
    expect(initialItemsText.length).toBe(3);
    expect(initialItemsText[0]).toContain('Item 1');

    await page.fillTodoField('ABC');
    await page.clickOnButton();

    const newItemsText = await page.getItemsText();
    expect(newItemsText.length).toBe(4);
    expect(newItemsText[0]).toContain('ABC');
  });
});
