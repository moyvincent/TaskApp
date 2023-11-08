import React from "react";
import Left_nav from "./Components/left-nav";
import "./Assests/App.css";
import Top_nav from "./Components/top-nav";

const App = () => {
  return (
    <div className="task-layout">
      <div id="leftSideMenu" className="sidebar">
        <Left_nav />
      </div>
      <div className="main">
        <div className="header">
          <Top_nav />
        </div>
      </div>
    </div>
  );
};

export default App;
