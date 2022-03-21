import React from "react";
import "./App.css";

const SideBar = () => {
  return (
    <div className="sidebar_container">
      <div className="player1_container">
        <div className="player1_header">
          <div style={{ width: "100%", fontWeight: "bold" }}>Player 1</div>
          <div style={{ width: "100%", fontWeight: "bold" }}>SCORE:2</div>
        </div>
        <div className="player1_counters_container">
          <div className="player1_module-border-wrap">
            <div className="player1_module">
              <div className="player1_pair_counter">0</div>
            </div>
          </div>
          <div className="player1_module-border-wrap">
            <div className="player1_module">
              <div className="player1_pair_counter">0</div>
            </div>
          </div>
        </div>
      </div>
      <div className="player2_container">
        <div className="player2_header">
          <div style={{ width: "100%", fontWeight: "bold" }}>Player 2</div>
          <div style={{ width: "100%", fontWeight: "bold" }}>SCORE:12</div>
        </div>
        <div className="player2_counters_container">
          <div className="player2_module-border-wrap">
            <div className="player2_module">
              <div className="player2_pair_counter">0</div>
            </div>
          </div>
          <div className="player2_module-border-wrap">
            <div className="player2_module">
              <div className="player2_pair_counter">0</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        style={{
          width: "100%",
          border: "1px solid black",
          marginTop: "5px",
        }}
      ></div> */}
    </div>
  );
};

export default SideBar;
