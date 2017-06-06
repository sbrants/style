import { browser, element, by } from 'protractor';

export class StylePage {
  navigateTo() {
    return browser.get('/');
  }

  getMap() {
    return element(by.css('app-root agm-map'));
  }
}
