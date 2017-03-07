import { AngularSchedulerSpringFrontendPage } from './app.po';

describe('angular-scheduler-spring-frontend App', () => {
  let page: AngularSchedulerSpringFrontendPage;

  beforeEach(() => {
    page = new AngularSchedulerSpringFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
