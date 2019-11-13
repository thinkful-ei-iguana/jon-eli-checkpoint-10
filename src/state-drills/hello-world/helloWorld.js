import React, { Component } from "react";

export default class HelloWorld extends Component {
  state = {
    who: "world"
  };

  changeWho(who) {
    this.setState({
      who: who
    });
  }

  render() {
    return (
      <div>
        <p>Hello {this.state.who}!</p>
        <button onClick={() => this.changeWho("world")}>world</button>
        <button onClick={() => this.changeWho("friend")}>friend</button>
        <button onClick={() => this.changeWho("react")}>react</button>
      </div>
    );
  }
}
