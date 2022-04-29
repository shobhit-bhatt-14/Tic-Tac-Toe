import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill('x') }]);
  const [step, setStep] = useState(0);
  const [nextX, setNextX] = useState(true);

  const handleClick = (i) => {
    const his = history.slice(0, step + 1);
    const current = his[his.length - 1];
    const squares = current.squares.slice();

    if (getWinner(squares) || squares[i]) return;

    squares[i] = nextX ? 'X' : 'O';

    setHistory
    setStep(his.length);
    setNextX(!nextX);
  };

  return (
    <div className="text-center">
      <p>Next player: X</p>
      <br />
      <Board values={history[step].squares} handleClick={handleClick} />
    </div>
  );
};

const getWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

export default Game;
