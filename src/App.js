import React, { Component } from "react";
import "./App.css";
import ChooseName from "./components/ChooseName";
import ChoosePexeso from "./components/ChoosePexeso";
import Game from "./components/Game";
import Result from "./components/Result";

class App extends Component {
  state = {
    pageSelected: "menu",
    player1: {
      name: undefined,
      score: 0
    },
    player2: {
      name: undefined,
      score: 0
    },
    resultMessage: ""
  };

  handleChange = event => {
    if (event.target.id === "1") {
      this.setState({
        player1: {
          name: event.target.value
        }
      });
    } else {
      this.setState({
        player2: {
          name: event.target.value
        }
      });
    }
  };

  render() {
    return (
      <div className="App container-fluid">
        <ChooseName onPlayerNameChange={this.handleChange} />
        <ChoosePexeso />
        <Game />
        <Result />
      </div>
    );
  }
}

export default App;
