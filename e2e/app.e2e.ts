import { NgrxIntroPage } from './app.po';

describe('ngrx-intro App', function() {
  let page: NgrxIntroPage;

  beforeEach(() => {
    page = new NgrxIntroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ngrx-intro works!');
  });
});
