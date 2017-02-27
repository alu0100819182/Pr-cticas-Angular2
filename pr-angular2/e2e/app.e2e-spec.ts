import { PrAngular2Page } from './app.po';

describe('pr-angular2 App', () => {
  let page: PrAngular2Page;

  beforeEach(() => {
    page = new PrAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
