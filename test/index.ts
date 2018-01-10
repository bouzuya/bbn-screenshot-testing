import { execute } from '@bouzuya/screenshot-testing';
import { Options } from '@bouzuya/screenshot-testing/lib/data/options';
import { scenarios } from './scenario';

const main = () => {
  const command = process.argv[2];
  if (
    command !== 'approve' &&
    command !== 'capture' &&
    command !== 'compare' &&
    command !== 'test'
  ) throw new Error('unknown command: ' + command);

  const options: Options = {
    path: {
      approved: 'approved',
      captured: '.tmp/captured',
      compared: '.tmp/compared'
    },
    scenarios
  };

  execute(command, options);
};

main();
