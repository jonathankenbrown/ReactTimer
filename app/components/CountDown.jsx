var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var CountDown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  handleSetCountdown: function (seconds){
    this.setState ({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;

      }
    }
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0 // use newCount if count is > 0, otherwise, set to 0
      });
    }, 1000);
  },
  render: function () {
    var {count} = this.state;

    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }

});

module.exports = CountDown;
