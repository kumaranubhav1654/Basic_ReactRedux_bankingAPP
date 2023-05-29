import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header" style={{ textAlign: "left" }}>
      <strong>State Bank of BNGLR</strong>
      <div style={{ textAlign: "right" }}>
        <button>Home</button>
      </div>
    </div>
  );
};

export default Header;
