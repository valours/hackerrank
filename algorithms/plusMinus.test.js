import test from 'ava';

const plus_minus = require('./plusMinus');

test('plus_minus', (t) => {
  const input = [-4, 3, -9, 0, 4, 1];
  const output = [
    '0.500000',
    '0.333333',
    '0.166667'];
  t.deepEqual(plus_minus(input), output);
});
