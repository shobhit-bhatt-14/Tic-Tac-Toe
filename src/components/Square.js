import React from "react";

const Square = (props) => {
    const handleClick = () => {
        props.setPlayer(props.player === 'X' ? 'O' : 'X');
        props.setValue(props.player);
    }

  return (
    <button className="bg-white text-center border border-secondary border-1 shadow-none" onClick={handleClick}>
      {props.value}
    </button>
  );
};

export default Square;
