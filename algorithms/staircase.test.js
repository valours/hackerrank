import test from 'ava';

// eslint-disable-next-line
const staircase = require('.');

test.skip('staircase', (t) => {
  const input = 4;
  const output = [
    '   #',
    '  ##',
    ' ###',
    '####',
  ];
  t.is(staircase(input), output);
});
