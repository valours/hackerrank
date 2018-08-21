import test from 'ava';

// eslint-disable-next-line
const staircase = require('./staircase');

test('staircase', (t) => {
  const input = 4;
  const output = [
    '   #',
    '  ##',
    ' ###',
    '####',
  ];
  t.deepEqual(staircase(input), output);
});
