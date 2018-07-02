import test from 'ava';
const Darray = require('.');

// eslint-next-line
test('diagonal_difference', (t) => {
  const input = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ];
  const output = 7;
  t.is(Darray(input), output);
});
