var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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
        case 'stopped':
          this.setState({count: 0});
        case 'paused' :
          clearInterval(this.timer)
          this.timer = undefined;
          break;

      }
    }
  },
  // componentWillUpdate: function (nextProps, nextState) { //just before a component updates
  //
  // },
  // componentWillMount: function () { // right BEFORE things are rendered (no access to DOM)
  //   console.log('componentWillMount');
  // },
  // componentDidMount: function () { // right after everything is rendered (have access to DOM)
  //   console.log('componentDidMount');
  // },
  componentWillUnmount: function () {
    // console.log('componentDidUnmount'); // fires when you leave a component (like go from Timer to Countdown)
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0 // use newCount if count is > 0, otherwise, set to 0
      });

      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  },
  handleStatusChange: function (newStatus) {
    this.setState({countdownStatus: newStatus});
  },
  render: function () {
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      }
    };

    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }

});

module.exports = CountDown;
