import React, { Component } from 'react';

class Button extends Component {
  render() {
    console.log(this.props);
    const {title, click} = this.props;
    return (
      <button onClick={click}>{title}</button>
    );
  }
}

export default Button;
