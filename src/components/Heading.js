import React from "react";

class Heading extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h1
            style={{ color: "white", fontSize: "3rem", fontWeight: "bold" }}
            className="heading"
          >
            Calculator
          </h1>
        </div>
      </nav>
    );
  }
}

export default Heading;
