import test from 'ava';

const strongPassword = require('./StrongPassword');

test.skip('the password must be strong', (t) => {
  const input = [3, 'Ab1'];
  const output = 3;
  t.is(strongPassword(...input), output);
});
