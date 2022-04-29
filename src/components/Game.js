import React from "react";
import Board from "./Board";

const Game = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <p>Next player: X</p>
      <br />
      <Board />
    </div>
  );
};

export default Game;
