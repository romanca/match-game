import React, { Component } from "react";

class ChooseName extends Component {
  state = {};

  render() {
    return (
      <div className="container-fluid text-center">
        <h1 className="h1">Choose your name</h1>
        <hr />
        <h2 className="h2">Player 1:</h2>
        <br />
        <input
          className="input"
          id="1"
          onChange={this.props.onChange}
          type="text"
          placeholder="Write your name.."
        />
        <h2 className="h2">Player 2:</h2>
        <br />
        <input
          className="input"
          id="2"
          onChange={this.props.onChange}
          type="text"
          placeholder="Write your name.."
        />
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
