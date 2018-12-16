import React, { Component } from "react";

class Game extends Component {
  state = {
    isPlayer1Active: true,
    wasPlayerSuccessful: false,
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
    if (this.state.loading) return;
    if (this.state.card1 === undefined) {
      this.setState({ card1: id });
    } else {
      this.setState({ card2: id });
      if (this.state.card1 === this.state.card2) {
        return;
      }
    }
    if (this.state.card1 !== undefined) this.evaluate();
  }

  evaluate() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.countScore();
      this.reset();
    }, 1500);
  }

  countScore() {
    this.setState({ wasPlayerSuccessful: false });
    if (
      this.props.activeDeck.cards[this.state.card1].cardName ===
      this.props.activeDeck.cards[this.state.card2].cardName
    ) {
      if (this.state.isPlayer1Active) {
        this.props.player1.score += 1;
        this.setState({ wasPlayerSuccessful: true });
      } else {
        this.props.player2.score += 1;
        this.setState({ wasPlayerSuccessful: true });
      }
      this.state.discardedCards.push(this.state.card1);
      this.state.discardedCards.push(this.state.card2);
      if (
        this.state.discardedCards.length === this.props.activeDeck.cards.length
      ) {
        //return this.selectPage('result');
      }
    }
  }

  switchPlayers() {
    this.setState({ isPlayer1Active: !this.state.isPlayer1Active });
  }

  reset() {
    this.setState({ card1: undefined });
    this.setState({ card2: undefined });
    this.setState({ loading: false });
    if (!this.state.wasPlayerSuccessful) {
      this.switchPlayers();
    }
  }

  render() {
    console.log("card1:", this.state.card1, "card2", this.state.card2);
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
