import React, { useState } from "react";
import Game from "./index.js";
import "./App.css";
function App() {
  const [isRed, setRed] = useState(false);

  const up = () => {
    setRed(!isRed);
  };
  return (
    <div className={isRed ? "red" : ""}>
      <label>
        Dark Mode
        <button style={{ marginLeft: 5 }} onClick={up}>
          /
        </button>
      </label>
      <div>
        <Game />
      </div>
    </div>
  );
}

export default App;
