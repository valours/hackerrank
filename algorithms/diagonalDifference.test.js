import test from 'ava';

const diagonalDifference = require('./diagonalDifference');

test('diagonal_difference', (t) => {
  const input = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ];
  const output = 15;

  t.is(diagonalDifference(input), output);
});