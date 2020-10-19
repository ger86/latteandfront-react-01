import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Incrementar contador</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default Counter;
