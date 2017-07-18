import { MiscPage } from './app.po';

describe('misc App', () => {
  let page: MiscPage;

  beforeEach(() => {
    page = new MiscPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
