import React, { Component } from "react";

class Result extends Component {
  resultMessage() {
    const { player1, player2 } = this.props;
    if (player1.score > player2.score)
      return `${player1.name} won with a total of ${player1.score} points.`;
    else if (player2.score > player1.score)
      return `${player2.name} won with a total of ${player2.score} points.`;
    else return "Match ended as a draw.";
  }

  newGame = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className="text-center">
        <h1 className="h1">Result</h1>
        <hr />
        <h4>{this.resultMessage()}</h4>

        <br />
        <br />
        <button
          className="btn btn-lg btn-danger"
          onClick={() => this.newGame()}
        >
          Start a new game
        </button>
      </div>
    );
  }
}

export default Result;
