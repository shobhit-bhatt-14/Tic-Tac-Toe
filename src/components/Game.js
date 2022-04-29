import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [values, setValues] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");

  return (
    <div className="text-center">
      <p>Next player: {player}</p>
      <Board
        values={values}
        setValues={setValues}
        player={player}
        setPlayer={setPlayer}
      />
    </div>
  );
};

export default Game;
