import { MegaSena01Page } from './app.po';

describe('mega-sena01 App', function() {
  let page: MegaSena01Page;

  beforeEach(() => {
    page = new MegaSena01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
