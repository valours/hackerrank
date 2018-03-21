import test from 'ava';

// eslint-disable-next-line
const plus_minus = require('.');

test('plus_minus', (t) => {
  const input = [-4, 3, -9, 0, 4, 1];
  const output = [0.5, 0.333333, 0.166667];
  t.is(plus_minus(input), output);
});
