import React from "react";
function Buttons(props) {
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
      <button style={buttonStyle} onClick={props.handleClear}>
        Clear
      </button>
      <button style={buttonStyle} onClick={props.handleDelete}>
        Delete
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          props.handleButtonClick(".");
        }}
      >
        .
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          props.handleButtonClick("/");
        }}
      >
        /
      </button>
      {/*2nd row */}
      <button
        style={buttonStyle}
        onClick={() => {
          props.handleButtonClick("7");
        }}
      >
        7
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          props.handleButtonClick("8");
        }}
      >
        8
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          props.handleButtonClick("9");
        }}
      >
        9
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          props.handleButtonClick("*");
        }}
      >
        *
      </button>
      {/*3rd row */}
      <button
        style={buttonStyle}
        onClick={() => {
          props.handleButtonClick("4");
        }}
      >
        4
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          props.handleButtonClick("5");
        }}
      >
        5
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          props.handleButtonClick("6");
        }}
      >
        6
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          props.handleButtonClick("-");
        }}
      >
        -
      </button>
      {/*4th row */}
      <button
        style={buttonStyle}
        onClick={() => {
          props.handleButtonClick("1");
        }}
      >
        1
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          props.handleButtonClick("2");
        }}
      >
        2
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          props.handleButtonClick("3");
        }}
      >
        3
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          props.handleButtonClick("+");
        }}
      >
        +
      </button>
      {/*fifth row */}
      <button
        style={buttonStyle}
        onClick={() => {
          props.handleButtonClick("0");
        }}
      >
        0
      </button>
      <button style={buttonStyle} onClick={props.handleCalculate}>
        =
      </button>
    </div>
  );
}
export default Buttons;
