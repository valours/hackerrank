import test from 'ava';

const superReducedString = require('.');

test('diagonal_difference', (t) => {
  const input = 'aabbcccdd';
  const output = 'abcd';
  t.is(superReducedString(input), output);
});
