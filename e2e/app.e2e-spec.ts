import { InsurexPage } from './app.po';

describe('insurex App', function() {
  let page: InsurexPage;

  beforeEach(() => {
    page = new InsurexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
