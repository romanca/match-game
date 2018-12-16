import React, { Component } from "react";

class Game extends Component {
  state = {
    isPlayer1Active: true,
    card1: undefined,
    card2: undefined,
    loading: false,
    discardedCards: []
  };

  ActiveClassToggler(player) {
    if (player === "player1") {
      if (this.state.isPlayer1Active) return "active";
      return "passive";
    } else {
      if (this.state.isPlayer1Active) return "passive";
      return "active";
    }
  }

  imgSrc(id) {
    const { card1, card2, discardedCards } = this.state;
    if (card1 === id || card2 === id) {
      return require("../assets/img/" +
        this.props.activeDeck.pathName +
        "/" +
        this.props.activeDeck.cards[id].cardName +
        ".png");
    } else if (discardedCards.includes(id))
      return require("../assets/img/end.png");
    else return require("../assets/img/back.png");
  }

  imgClassToggler() {
    if (this.props.activeDeck.numberOfCards <= 40)
      return "img-fluid card-img-lg";
    return "img-fluid card-img-sm";
  }

  onImgClick = id => {
    if (
      this.state.card1 === id ||
      this.state.card2 === id ||
      this.state.discardedCards.includes(id)
    )
      return;
    this.flipCard(id);
  };

  flipCard(id) {
    const { card1, card2 } = this.state;
    if (this.state.loading) return;
    if (card1 === undefined) {
      this.setState({ card1: id });
    } else {
      this.setState({ card2: id });
      if (card2 === card1) {
        return;
      }
    }
    console.log(this.state.card1, this.state.card2);
  }

  render() {
    const { player1, player2 } = this.props;
    return (
      <div>
        <div className="score text-center">
          <h3 className={this.ActiveClassToggler("player1")}>{player1.name}</h3>
          <h3>
            {player1.score} | {player2.score}
          </h3>
          <h3 className={this.ActiveClassToggler("player2")}>{player2.name}</h3>
        </div>
        <div className="game-board">
          {this.props.activeDeck.cards.map(card => (
            <div className="card" key={card.id}>
              <img
                onClick={() => this.onImgClick(card.id)}
                className={this.imgClassToggler()}
                src={this.imgSrc(card.id)}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Game;
