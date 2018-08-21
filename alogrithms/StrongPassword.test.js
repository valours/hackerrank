import test from 'ava';

const strongPassword = require('./StrongPassword');

test('strongPassword', (t) => {
  const input = 'saveChangesInTheEditor';
  const output = 5;
  t.is(strongPassword(input), output);
});
