export class NgrxIntroPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngrx-intro-app h1')).getText();
  }
}
