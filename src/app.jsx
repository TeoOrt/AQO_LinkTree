import React from "react";
import Linktree from "./Linktree";
import Logo from "./images/logo.png";
import "./app.css";
function App() {
  return (
    <div className="App">
      <img src={Logo} className="Logo" alt="AQO Logo" />
      <div className="LinkTree">
        <Linktree />
      </div>
    </div>
  );
}

export default App;
