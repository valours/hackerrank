import t from 'ava';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
const staircase = require('.');

let consoleLog;

t.before(() => {
  consoleLog = sinon.spy(console, 'log');
});

t('staircase', (t) => {
  // given
  const n = 6  

  // when
  staircase(n);

  // then
  const argsExpected = [
    '     #',
    '    ##',
    '   ###',
    '  ####',
    ' #####',
    '######',
  ] 
  sinon.assert.callCount(consoleLog, 6)
  // expect(consoleLog.callCount).to.equal(6);
  consoleLog.getCalls().forEach((call,i) => {
    expect(call).to.have.be.calledWith(argsExpected[i]);
  })
  t.pass();
});
