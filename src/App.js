import React from "react";
import Pexeso from "./Pexeso";
import SideBar from "./SideBar";
import "./App.css";

const App = () => {
  return (
    <div className="app_container">
      <Pexeso />
      <SideBar />
    </div>
  );
};

export default App;
