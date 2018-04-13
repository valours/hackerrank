import test from 'ava';

const camelCase = require('.');

test('camelCase', (t) => {
  const input = 'saveChangesInTheEditor';
  const output = 5;
  t.is(camelCase(input), output);
});
