import React from "react";

const Square = (props) => {
  return (
    <button className="bg-white text-center fw-bold border-0" onClick={props.handleClick}>
      {props.value}
    </button>
  );
};

export default Square;
