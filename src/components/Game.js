import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [step, setStep] = useState(0);
  const [nextX, setNextX] = useState(true);

  const current = history[step];
  const winner = getWinner(current.squares);

  let status = winner
    ? `Winner: ${winner}`
    : `Next player: ${nextX ? "X" : "O"}`;

  const handleClick = (i) => {
    const his = history.slice(0, step + 1);
    const current = his[his.length - 1];
    const squares = current.squares.slice();

    if (getWinner(squares) || squares[i]) return;

    squares[i] = nextX ? "X" : "O";

    setHistory(his.concat([{ squares: squares }]));
    setStep(his.length);
    setNextX(!nextX);
  };

  const jumpTo = (step) => {
    setStep(step);
    setNextX(step % 2 === 0);
  };

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button className="btn btn-primary" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  return (
    <div className="text-center">
      <div>{status}</div>
      <br />
      <div className="d-flex">
        <Board values={history[step].squares} handleClick={handleClick} />
        <ol>{moves}</ol>
      </div>
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
