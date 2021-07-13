import React from "react";

// input: obj
// output: JSX
const Spinner = ({ size }) => {
  return (
    <span
      className="spinner"
      style={{ width: `${size}px`, height: `${size}px` }}
    ></span>
  );
};

export default Spinner;
