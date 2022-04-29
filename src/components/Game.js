import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
    const [value, setValue] = useState('');
    const [player, setPlayer] = useState('X');


  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <p>Next player: {player}</p>
      <br />
      <Board value={value} setValue={setValue} player={player} setPlayer={setPlayer} />
    </div>
  );
};

export default Game;
