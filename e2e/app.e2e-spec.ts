import { RH2Page } from './app.po';

describe('rh2 App', () => {
  let page: RH2Page;

  beforeEach(() => {
    page = new RH2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
