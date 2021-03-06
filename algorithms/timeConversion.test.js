import t from 'ava';

const timeConversion = require('./timeConversion');

t('Il est 19:05:45', (t) => {
  const input = '07:05:45PM';
  const output = '19:05:45';
  t.is(timeConversion(input), output);
});

t('Il est 19:05:45', (t) => {
  const input = '11:05:45PM';
  const output = '23:05:45';
  t.is(timeConversion(input), output);
});

t('Il est 19:05:45', (t) => {
  const input = '12:05:45AM';
  const output = '00:05:45';
  t.is(timeConversion(input), output);
});
