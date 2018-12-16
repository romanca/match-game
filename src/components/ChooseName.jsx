import React, { Component } from "react";

class ChooseName extends Component {
  state = {};

  render() {
    return (
      <div className="container-fluid text-center">
        <h1>Choose your name</h1>
        <hr />
        <h2>Player 1:</h2>
        <br />
        <input id="1" onChange={this.props.onChange} type="text" />
        <h2>Player 2:</h2>
        <br />
        <input id="2" onChange={this.props.onChange} type="text" />
        <br />
        <br />
        <button
          onClick={() => this.props.onClick("ChoosePexeso")}
          className="btn btn-lg btn-danger"
        >
          Next Screen
        </button>
      </div>
    );
  }
}

export default ChooseName;
