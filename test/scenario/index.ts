import { Scenario } from '@bouzuya/screenshot-testing/lib/data/scenario';
import { Page } from 'puppeteer';

const scenarios: Scenario[] = [
  {
    action: async (page: Page) => {
      await page.setViewport({ height: 480, width: 320 });
      await page.goto('https://blog.bouzuya.net/2018/01/01/');
      return {};
    },
    name: 'entry-detail/320x480'
  },
  {
    action: async (page: Page) => {
      await page.setViewport({ height: 768, width: 1024 });
      await page.goto('https://blog.bouzuya.net/2018/01/01/');
      return {};
    },
    name: 'entry-detail/1024x768'
  },
  {
    action: async (page: Page) => {
      await page.setViewport({ height: 480, width: 320 });
      await page.goto('https://blog.bouzuya.net/2018/01/01/related/');
      return {};
    },
    name: 'entry-index/320x480'
  },
  {
    action: async (page: Page) => {
      await page.setViewport({ height: 768, width: 1024 });
      await page.goto('https://blog.bouzuya.net/2018/01/01/related/');
      return {};
    },
    name: 'entry-index/1024x768'
  }
];

export { scenarios };
