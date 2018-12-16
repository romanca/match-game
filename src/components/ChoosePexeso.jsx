import React, { Component } from "react";
import pexesoDecks from "../pexeso";
import Game from "./Game";

class ChoosePexeso extends Component {
  state = {
    pexesoDecks,
    activeDeck: []
  };

  getPexesoImage(i) {
    return require("../assets/img/" +
      this.state.pexesoDecks[i].pathName +
      "/main.png");
  }

  selectPexeso = i => {
    this.setState({ activeDeck: this.state.pexesoDecks[i] });
  };

  activeClassToggler(i) {
    if (this.state.activeDeck.id === i) return "pexeso-active each-pexeso";
    return "each-pexeso";
  }

  render() {
    if (this.props.pageSelected === "Game") {
      return (
        <Game
          onClick={this.props.selectPage}
          player1={this.props.player1}
          player2={this.props.player2}
          pexesoDecks={this.state.pexesoDecks}
          activeDeck={this.state.activeDeck}
        />
      );
    }
    return (
      <div className="container-fluid text-center">
        <h1>Select Pexeso</h1>
        <hr />
        <div className="pexeso-show">
          {this.state.pexesoDecks.map(pexeso => (
            <div
              key={pexeso.id}
              className={this.activeClassToggler(pexeso.id)}
              onClick={() => this.selectPexeso(pexeso.id)}
            >
              <h3 className="pexeso-header">{pexeso.name}</h3>
              <img
                className="pexeso-main img-fluid"
                src={this.getPexesoImage(pexeso.id)}
                alt={pexeso.name}
              />
            </div>
          ))}
        </div>
        <div>
          <button
            onClick={() => this.props.onClick("Game")}
            className="btn btn-lg btn-danger margin-top-60"
          >
            Start Game
          </button>
        </div>
      </div>
    );
  }
}

export default ChoosePexeso;
