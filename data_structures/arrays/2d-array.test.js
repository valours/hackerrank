import t from 'ava';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
const hourglassSum = require('./2d-array');

let consoleLog;

t.before(() => {
  consoleLog = sinon.spy(console, 'log');
});

t('2D array', (t) => {
  // given
  const n = [
    [0, 4, 3],
    [2, 1, 0],
    [8, 6, 6],
  ];

  // when
  hourglassSum(n);

  // then
  sinon.assert.calledWith(consoleLog, 28);
  t.pass();
});

t('2D array', (t) => {
  // given
  const n = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ]

  // when
  hourglassSum(n);

  // then
  sinon.assert.calledOnceWithExactly(consoleLog, 28);
  t.pass();
});
