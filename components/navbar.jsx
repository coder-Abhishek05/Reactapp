// components/Navbar.js
import React from "react";

function Navbar() {
  const container = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    listStyle: "none",
    backgroundImage: "linear-gradient(to right, #ff416c, #ff4b2b)",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
    textDecoration: "none",
  };
  return (
    <nav style={container}>
      <li style={{ color: "white", textDecoration: "none" }}>
        <a href="../public/index.html">Home</a>
      </li>
      <li style={{ color: "white" }}>
        <a href="../public/about.html">About</a>
      </li>
      <li style={{ color: "white" }}>
        <a href="../public/contact.html">Contact</a>
      </li>
    </nav>
  );
}

export default Navbar;
