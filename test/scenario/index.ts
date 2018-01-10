import { Scenario } from '@bouzuya/screenshot-testing/lib/data/scenario';
import { Page } from 'puppeteer';

const scenarios: Scenario[] = [
  {
    action: async (page: Page) => {
      page.setViewport({ height: 480, width: 320 });
      page.goto('https://blog.bouzuya.net/2016/01/01/');
      return {};
    },
    name: 'entry-index/320x480'
  }
];

export { scenarios };
