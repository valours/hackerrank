import test from 'ava';

const countingValleys = require('./countingValley');

test('UDDDUDUU', (t) => {
  const input = [8, 'UDDDUDUU'];
  const output = 1;
  t.is(countingValleys(...input), output);
})

test('DDUUDDUDUUUD', (t) => {
  const input = [12, 'DDUUDDUDUUUD'];
  const output = 2;
  t.is(countingValleys(...input), output);
})