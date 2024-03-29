import React from "react";
import Square from "./Square";

const Board = (props) => {
  const renderSquare = (i) => {
    return (
      <Square
        handleClick={() => props.handleClick(i)}
        value={props.values[i]}
      />
    );
  };

  return (
    <table>
      <tbody>
        <tr>
          <td className="border border-2 border-secondary">{renderSquare(0)}</td>
          <td className="border border-2 border-secondary">{renderSquare(1)}</td>
          <td className="border border-2 border-secondary">{renderSquare(2)}</td>
        </tr>
        <tr>
          <td className="border border-2 border-secondary">{renderSquare(3)}</td>
          <td className="border border-2 border-secondary">{renderSquare(4)}</td>
          <td className="border border-2 border-secondary">{renderSquare(5)}</td>
        </tr>
        <tr>
          <td className="border border-2 border-secondary">{renderSquare(6)}</td>
          <td className="border border-2 border-secondary">{renderSquare(7)}</td>
          <td className="border border-2 border-secondary">{renderSquare(8)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Board;
