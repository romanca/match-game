import React from "react";
import "./App.css";

const SideBar = () => {
  return (
    <div className="sidebar_container">
      <div className="player1_container">
        <div className="player1_header">
          <div className="header_titles">Player 1</div>
          <div className="header_titles">SCORE:2</div>
        </div>
        <div className="player1_counters_container">
          <div className="player1_module-border-wrap">
            <div className="player1_module">
              <div className="player1_pair_counter">0</div>
            </div>
          </div>
          <div className="counter_title">found pairs</div>
        </div>
      </div>
      <div className="player2_container">
        <div className="player2_header">
          <div className="header_titles">Player 2</div>
          <div className="header_titles">SCORE:12</div>
        </div>
        <div className="player2_counters_container">
          <div className="player2_module-border-wrap">
            <div className="player2_module">
              <div className="player2_pair_counter">0</div>
            </div>
          </div>
          <div className="counter_title">found pairs</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
