import React, { Component } from 'react';
import './App.css';
import Button from "./components/Button";
import Result from "./components/Result";

class App extends Component {
  constructor() {
    console.log('constructor');
    super();
    this.state = {
      value: 0,
      isLoading: true
    }
  }
  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => this.setState({ ...this.state, isLoading: false}), 1000)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState, this.state);
    return this.state.isLoading !== nextState.isLoading || Math.abs(this.state.value) % 2 === 1;
  }

  dec() {
    this.setState({
      ...this.state,
      value: this.state.value - 1
    })
  }

  inc() {
    this.setState({
      ...this.state,
      value: this.state.value + 1
    })
  }

  render() {
    console.log('render');
    const {value, isLoading} = this.state;

    return (
      <div className="App">
        {!isLoading && <div>
          <Result value={value}/>
          <Button title={"-"} click={() => this.dec()} />
          <Button title={"+"} click={() => this.inc()} />
        </div>}
        {isLoading && <h1>Loading</h1>}
      </div>
    );
  }
}

export default App;
