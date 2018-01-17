import { Scenario } from '@bouzuya/screenshot-testing/lib/data/scenario';
import { Page } from 'puppeteer';

const myScenarios = [
  {
    name: 'entry-detail',
    url: 'https://blog.bouzuya.net/2018/01/01/'
  },
  {
    name: 'entry-index',
    url: 'https://blog.bouzuya.net/2018/01/01/related/'
  }
].map((i) => Object.assign({ viewports: ['320x480', '1024x768'] }, i));

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
