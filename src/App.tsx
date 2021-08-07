import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import What from "./What";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <What />
      </header>
    </div>
  );
}

export default App;
