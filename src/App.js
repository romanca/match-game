import React, { Component } from "react";
import "./App.css";
import ChooseName from "./components/ChooseName";
import ChoosePexeso from "./components/ChoosePexeso";
import Game from "./components/Game";
import Result from "./components/Result";

class App extends Component {
  state = {
    pageSelected: "ChooseName",
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

  selectPage = page => {
    this.setState({ pageSelected: page });
  };

  render() {
    const { pageSelected } = this.state;
    if (pageSelected === "ChooseName") {
      return (
        <ChooseName
          onChange={this.handleChange}
          onClick={() => this.selectPage("ChoosePexeso")}
        />
      );
    }
    if (pageSelected === "ChoosePexeso") {
      return <ChoosePexeso onClick={() => this.selectPage("Game")} />;
    }
    if (pageSelected === "Game") {
      return <Game />;
    }
    if (pageSelected === "Result") {
      return <Result />;
    }
  }
}

export default App;
