import { MeetingPointPage } from './app.po';

describe('meeting-point App', function() {
  let page: MeetingPointPage;

  beforeEach(() => {
    page = new MeetingPointPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
