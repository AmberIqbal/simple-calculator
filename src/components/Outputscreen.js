import React from "react";

function Outputscreen(props) {
  return (
    <div style={styles.container}>
      <input
        type="text"
        value={props.value}
        placeholder=""
        style={{
          width: "700px",
          height: "80px",
          fontSize: "20px",
        }}
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center", // Centers horizontally
    alignItems: "center", // Centers vertically
    marginBottom: "20px",
  },
};
export default Outputscreen;
