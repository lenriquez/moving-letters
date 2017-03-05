import { MovingLettersPage } from './app.po';

describe('moving-letters App', () => {
  let page: MovingLettersPage;

  beforeEach(() => {
    page = new MovingLettersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
