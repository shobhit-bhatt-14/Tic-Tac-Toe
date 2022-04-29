import React from "react";

const Square = (props) => {
  return (
    <button className="bg-white text-center border-secondary border-1 shadow-none">
      {props.value}
    </button>
  );
};

export default Square;
