import React from "react";
import ReactDom from "react-dom";
// import Navbar from "../components/navbar";
import Card from "../components/card";
import About from "./index.js";

ReactDom.render(
  <div>
    <About />
    <Card
      title="Welcome!"
      description="This is a welcome card on the home page."
      imageUrl="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg"
    />
  </div>,
  document.getElementById("root")
);
