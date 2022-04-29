import React from "react";
import Square from "./Square";

const Board = () => {
  let board = [];
  [...Array(9)].map((ele, index) => {
    board.push(<Square key={index} value={index} />);

    if ((index + 1) % 3 == 0) {
      board.push(<br />);
    }
  });

  return <div className="">{board}</div>;
};

export default Board;
