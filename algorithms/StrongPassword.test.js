import test from 'ava';

const strongPassword = require('./StrongPassword');

test.skip('The password must be strong', (t) => {
  // given
  const input = [3, 'Ab1'];

  // when
  const password = strongPassword(...input);

  // then
  t.is(password, 3);
});
