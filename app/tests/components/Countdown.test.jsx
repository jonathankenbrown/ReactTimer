var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils'); //install by npm install react-addons-test-utils@0.14.6 --save-dev <-- MUST MATCH REACT VER.

var CountDown = require('CountDown');

describe('CountDown', () => {
  it('should exist', () => {
    expect(CountDown).toExist();
  });

  describe('handlesSetCountdown', () => {
    it('should set state to started and countdown', (done) => { // use done to avoid asyncronous
      var countdown = TestUtils.renderIntoDocument(<CountDown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });
    it('should not keep counting down if reaches 0', (done) => { // use done to avoid asyncronous
      var countdown = TestUtils.renderIntoDocument(<CountDown/>);
      countdown.handleSetCountdown(2);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });
  });
});
