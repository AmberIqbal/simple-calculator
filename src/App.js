import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import Outputscreen from "./components/Outputscreen";
import Buttons from "./components/Buttons";
import React, { useState, useEffect } from "react";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";

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

  const handleKeyDown = (event) => {
    const key = event.key;
    if (/[0-9/*\-+.]/.test(key)) {
      setInput(input + key);
    }
    if (key === "Enter") {
      handleCalculate();
    }
    if (key === "Backspace") {
      handleDelete();
    }
    if (key === "Escape") {
      handleClear();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [input]);
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
