import { MicelaneosPage } from './app.po';

describe('micelaneos App', () => {
  let page: MicelaneosPage;

  beforeEach(() => {
    page = new MicelaneosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
