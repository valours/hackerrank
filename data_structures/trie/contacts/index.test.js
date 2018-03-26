import test from 'ava';

const contacts = require('.');

test.only('contacts', (t) => {
  const queries = [
    ['add', 'hack'],
    ['add', 'hackerrank'],
    ['find', 'hac'],
    ['find', 'hak'],
  ];
  const output = [2, 0];
  t.is(contacts(queries), output);
});
