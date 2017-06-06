import { StylePage } from './app.po';

describe('style App', () => {
  let page: StylePage;

  beforeEach(() => {
    page = new StylePage();
  });

  it('should display a map with zoom level 4', () => {
    page.navigateTo();
    expect(page.getMap().getAttribute('ng-reflect-zoom')).toEqual('4');
  });
});
