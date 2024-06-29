import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import "./Newsletter.css";

export const Newsletter = () => {
  return (
    <div>
      <Header />
      <div className="temp">
        <h1>Off for the Summer</h1>
        <p>Check back in during term to read our physics newsletter!</p>
      </div>

      <Contact />
    </div>
  );
};
