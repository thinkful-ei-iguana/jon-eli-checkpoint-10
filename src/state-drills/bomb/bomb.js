import React, { Component } from "react";
// "tick", "tock" or "BOOM!!!!"
export default class Bomb extends Component {
  state = {
    count: 0
  };

  componentDidMount() {
    this.counter = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.counter);
  }

  render() {
    let word;

    if (this.state.count % 2 === 0) {
      word = "tick";
    } else if (this.state.count >= 8) {
      word = "boom!";
      clearInterval(this.counter);
    } else if (this.state.count % 2 !== 0) {
      word = "tock";
    }

    return (
      <div>
        <p>{word}</p>
      </div>
    );
  }
}
