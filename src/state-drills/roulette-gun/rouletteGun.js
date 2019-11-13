import React, { Component } from "react";

export default class RouletteGun extends Component {
  state = {
    options: [
      "spinning the chamber and pulling the trigger! ...",
      "you're safe!",
      "BANG!"
    ],
    chamber: null,
    spinningTheChamber: false
  };

  handleTriggerPull() {
    this.setState({
      spinningTheChamber: true
    });

    this.timeout = setTimeout(() => {
      let rand = Math.floor(Math.random() * 8 + 1);
      this.setState({
        chamber: rand,
        spinningTheChamber: false
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    let out;

    if (this.state.spinningTheChamber) {
      out = this.state.options[0];
    } else if (this.state.chamber === this.props.bulletInChamber) {
      out = this.state.options[2];
    } else {
      out = this.state.options[1];
    }

    return (
      <div>
        <p>{out}</p>
        <button onClick={() => this.handleTriggerPull()}>
          pull the trigger!
        </button>
      </div>
    );
  }
}
