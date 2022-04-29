import React from "react";
import Square from "./Square";

const Board = (props) => {
  const renderSquare = (i) => {
    return (
      <Square
        key={i}
        value={props.value}
        setValue={props.setValue}
        player={props.player}
        setPlayer={props.setPlayer}
      />
    );
  };

  return <div className="">
      
  </div>;
};

export default Board;
