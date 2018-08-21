import test from 'ava';

const superReducedString = require('.');

test('superReducedString', (t) => {
  const input = 'aabbcccdd';
  const output = 'abcd';
  t.is(superReducedString(input), output);
});
