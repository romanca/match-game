import React, { Component } from "react";
import "./App.css";
import ChooseName from "./components/ChooseName";
import ChoosePexeso from "./components/ChoosePexeso";
import Result from "./components/Result";

class App extends Component {
  state = {
    pageSelected: "ChooseName",
    player1: {},
    player2: {}
  };

  handleChange = event => {
    if (event.target.id === "1") {
      this.setState({
        player1: {
          name: event.target.value,
          score: 0
        }
      });
    } else {
      this.setState({
        player2: {
          name: event.target.value,
          score: 0
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
        <ChooseName onChange={this.handleChange} onClick={this.selectPage} />
      );
    }
    if (pageSelected === "ChoosePexeso" || pageSelected === "Game") {
      return (
        <ChoosePexeso
          selectPage={this.selectPage}
          player1={this.state.player1}
          player2={this.state.player2}
          pageSelected={this.state.pageSelected}
          onClick={this.selectPage}
        />
      );
    }
    if (pageSelected === "Result") {
      return (
        <Result player1={this.state.player1} player2={this.state.player2} />
      );
    }
  }
}

export default App;
