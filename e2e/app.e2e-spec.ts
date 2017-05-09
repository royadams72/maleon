import { Maleon2Page } from './app.po';

describe('maleon2 App', () => {
  let page: Maleon2Page;

  beforeEach(() => {
    page = new Maleon2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
