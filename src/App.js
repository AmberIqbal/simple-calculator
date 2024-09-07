import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import Outputscreen from "./components/Outputscreen";
import Buttons from "./components/Buttons";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput(input + value);
  };
  const handleClear = () => {
    setInput("");
  };
  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("error");
    }
  };
  return (
    <>
      <Heading />
      <Outputscreen value={input} />
      <Buttons
        handleButtonClick={handleButtonClick}
        handleClear={handleClear}
        handleDelete={handleDelete}
        handleCalculate={handleCalculate}
      />
    </>
  );
}

export default App;
