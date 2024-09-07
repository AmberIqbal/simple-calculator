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

  return (
    <>
      <Heading />
      <Outputscreen />
      <Buttons
        handleButtonClick={handleButtonClick}
        handleClear={handleClear}
      />
    </>
  );
}

export default App;
