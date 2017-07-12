import { LaddercdPage } from './app.po';

describe('laddercd App', () => {
  let page: LaddercdPage;

  beforeEach(() => {
    page = new LaddercdPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
