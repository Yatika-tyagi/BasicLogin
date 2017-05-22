import { BasicLoginPage } from './app.po';

describe('basic-login App', () => {
  let page: BasicLoginPage;

  beforeEach(() => {
    page = new BasicLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
