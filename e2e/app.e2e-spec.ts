import { CmNg2Page } from './app.po';

describe('cm-ng2 App', function() {
  let page: CmNg2Page;

  beforeEach(() => {
    page = new CmNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
