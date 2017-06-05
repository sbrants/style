import { StylePage } from './app.po';

describe('style App', () => {
  let page: StylePage;

  beforeEach(() => {
    page = new StylePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
