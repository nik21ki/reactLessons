import React, { Component } from 'react';

class Result extends Component {
  render() {
    const {value} = this.props;
    return (
      <h1>Result: {value}.</h1>
    );
  }
}

export default Result;
