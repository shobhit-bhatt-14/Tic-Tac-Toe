import React from "react";

const Square = (props) => {
    const handleClick = () => {
        props.setPlayer(props.player === 'X' ? 'O' : 'X');
        
        let val = props.values;
        val[props.index] = props.player;

        props.setValues(val);
    }

  return (
    <button className="bg-white text-center fw-bold border-0" onClick={handleClick}>
      {props.values[props.index]}
    </button>
  );
};

export default Square;
