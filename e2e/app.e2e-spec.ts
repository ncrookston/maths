import { MathsPage } from './app.po';

describe('maths App', function() {
  let page: MathsPage;

  beforeEach(() => {
    page = new MathsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
