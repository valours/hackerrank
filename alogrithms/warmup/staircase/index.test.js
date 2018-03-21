import test from 'ava';

// eslint-disable-next-line
const staircase = require('.');

test('staircase', (t) => {
  const input = 4;
  const output = [
    '   #',
    '  ##',
    ' ###',
    '####',
  ];
  t.is(staircase(input), output);
});
