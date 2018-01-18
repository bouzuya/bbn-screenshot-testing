import { Scenario } from '@bouzuya/screenshot-testing';
import { Page } from 'puppeteer';

const myScenarios = [
  {
    name: 'entry-detail',
    path: '/2018/01/01/'
  },
  {
    name: 'entry-index',
    path: '/2018/01/01/related/'
  }
]
  .map((i) => Object.assign({ viewports: ['320x480', '1024x768'] }, i))
  .map((i) => Object.assign({ url: 'https://blog.bouzuya.net' + i.path }, i));

const scenarios: Scenario[] = myScenarios.reduce((a, myScenario) => {
  const { name, url, viewports } = myScenario;
  return a.concat(viewports.map((viewport) => {
    return {
      action: async (page: Page) => {
        const [width, height] = viewport.split('x').map((i) => parseInt(i, 10));
        await page.setViewport({ height, width });
        await page.goto(url);
        return {};
      },
      name: name + '/' + viewport
    };
  }));
}, [] as Scenario[]);

export { scenarios };
