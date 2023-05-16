import './App.css';
import { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  state = {
    isVisible: false,
  };

  toggleVisibility = () => this.setState({ isVisible: !this.state.isVisible });

  render() {
    return (
      <div className="App">
        <h1>Workshop State</h1>
        <button className="visibility-btn" onClick={this.toggleVisibility}>
          {this.state.isVisible ? 'Hide' : 'Show'} Counter
        </button>
        {/*this.state.isVisible === true ? <Counter /> : ''*/}
        {this.state.isVisible && <Counter />}
      </div>
    );
  }
}

export default App;
