import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [step, setStep] = useState(0);
  const [next, setNext] = useState(true);

  const handleClick = () => {
    setPlayer(player === "X" ? "O" : "X");

    let val = values;
    setValues(val);
  };

  return (
    <div className="text-center">
      <p>Next player: {player}</p>
      <br />
      <Board values={values} handleClick={handleClick} />
    </div>
  );
};

export default Game;
