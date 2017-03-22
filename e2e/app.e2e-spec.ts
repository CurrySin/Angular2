import { GameSitePage } from './app.po';

describe('game-site App', () => {
  let page: GameSitePage;

  beforeEach(() => {
    page = new GameSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
