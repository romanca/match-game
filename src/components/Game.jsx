import React, { Component } from "react";

class Game extends Component {
  state = {};
  render() {
    const { player1, player2 } = this.props;
    return (
      <div className="score text-center">
        <h3>{player1.name}</h3>
        <h3>
          {player1.score} | {player2.score}
        </h3>
        <h3>{player2.name}</h3>
      </div>
    );
  }
}

export default Game;
