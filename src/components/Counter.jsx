import { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      timer: 0,
    };

    console.log('run constructor');
  }

  increment = () => this.setState({ counter: this.state.counter + 1 });

  decrement = () => this.setState({ counter: this.state.counter - 1 });

  reset = () => this.setState({ counter: 0 });

  componentDidMount = () => {
    console.log('run componentDidMount');
    this.myInterval = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };

  componentDidUpdate = () => {
    console.log('run componentDidUpdate');
  };

  componentWillUnmount = () => {
    console.log('run componentWillUnmount');
    clearInterval(this.myInterval);
  };

  render() {
    console.log('run render');
    return (
      <div>
        <button className="increment-btn mx-2" onClick={this.increment}>
          +
        </button>
        <span>{this.state.counter}</span>
        <button className="decrement-btn mx-2" onClick={this.decrement}>
          -
        </button>
        <div>
          <button className="rest-btn" onClick={this.reset}>
            Reset
          </button>
        </div>
        <h2>timer: {this.state.timer}</h2>
      </div>
    );
  }
}

export default Counter;
