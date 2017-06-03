import { HomeEdPage } from './app.po';

describe('home-ed App', () => {
  let page: HomeEdPage;

  beforeEach(() => {
    page = new HomeEdPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
