import { Scenario } from '@bouzuya/screenshot-testing/lib/data/scenario';
import { Page } from 'puppeteer';

const scenarios: Scenario[] = [
  {
    action: async (page: Page) => {
      await page.setViewport({ height: 480, width: 320 });
      await page.goto('https://blog.bouzuya.net/2018/01/01/');
      return {};
    },
    name: 'entry-index/320x480'
  }
];

export { scenarios };
