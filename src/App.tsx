import React, { ReactElement } from "react";
import Game from "./Game";
const App: React.FC = (): ReactElement => {
  return (
    <div className="app">
      <div className="container">
        <h1>Hidden Item Game</h1>
        <Game />
      </div>
    </div>
  );
};

export default App;

