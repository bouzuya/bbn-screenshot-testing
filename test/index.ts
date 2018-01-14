import { execute, htmlReport } from '@bouzuya/screenshot-testing';
import { Options } from '@bouzuya/screenshot-testing/lib/data/options';
import { scenarios } from './scenario';

const main = () => {
  const command = process.argv[2];
  const ciOrUndefined: string | undefined = process.argv[3];
  if (
    command !== 'approve' &&
    command !== 'capture' &&
    command !== 'compare' &&
    command !== 'test'
  ) throw new Error('unknown command: ' + command);
  if (
    typeof ciOrUndefined !== 'undefined' &&
    ciOrUndefined !== 'ci'
  ) throw new Error('unknown ci: ' + ciOrUndefined);
  const ciMode = typeof ciOrUndefined !== 'undefined' && ciOrUndefined === 'ci';
  const options: Options = {
    path: {
      approved: 'approved',
      captured: '.tmp/captured',
      compared: '.tmp/compared'
    },
    report: htmlReport({ open: ciMode ? 'never' : 'failed' }),
    scenarios
  };

  execute(command, options);
};

main();
