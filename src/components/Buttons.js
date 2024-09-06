import React from "react";
function Buttons() {
  const buttonContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(6, 100px)",
    gridGap: "40px",
  };

  const buttonStyle = {
    width: "100px",
    height: "80px",
    fontSize: "18px",
    cursor: "pointer",
    backgroundColor: "grey",
    color: "white",
    border: "none",
    borderRadius: "5px",
  };
  return (
    <div style={buttonContainerStyle}>
      {/*first row */}
      <button style={buttonStyle}>Clear</button>
      <button style={buttonStyle}>Delete</button>
      <button style={buttonStyle}>.</button>
      <button style={buttonStyle}>/</button>
      {/*2nd row */}
      <button style={buttonStyle}>7</button>
      <button style={buttonStyle}>8</button>
      <button style={buttonStyle}>9</button>
      <button style={buttonStyle}>*</button>
      {/*3rd row */}
      <button style={buttonStyle}>4</button>
      <button style={buttonStyle}>5</button>
      <button style={buttonStyle}>6</button>
      <button style={buttonStyle}>-</button>
      {/*4th row */}
      <button style={buttonStyle}>1</button>
      <button style={buttonStyle}>2</button>
      <button style={buttonStyle}>3</button>
      <button style={buttonStyle}>+</button>
      {/*fifth row */}
      <button style={buttonStyle}>0</button>
      <button style={buttonStyle}>=</button>
    </div>
  );
}
export default Buttons;
