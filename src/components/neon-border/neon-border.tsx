import React from "react";

const NeonBorder = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: "2px solid #00ff00",
        boxShadow:
          "0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00",
        borderRadius: "20px",
      }}
    ></div>
  );
};

export default NeonBorder;
