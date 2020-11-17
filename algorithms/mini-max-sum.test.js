
import t from 'ava';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import miniMaxSum from './mini-max-sum';

chai.use(sinonChai);

let consoleLog;

t.before(() => {
  consoleLog = sinon.spy(console, 'log');
});

t('Mini-Max Sum', (t) => {
  // given
  const n = [1, 2, 3, 4, 5];

  // when
  miniMaxSum(n);

  // then
  sinon.assert.calledWith(consoleLog, '10 14');
  t.pass();
});

t('Mini-Max Sum', (t) => {
  // given
  const n = [7, 69, 2, 221, 8974];

  // when
  miniMaxSum(n);

  // then
  sinon.assert.calledWith(consoleLog, '299 9271');
  t.pass();
});
