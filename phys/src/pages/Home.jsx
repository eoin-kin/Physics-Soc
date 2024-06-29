import React from "react";
import Header from "../components/Header";
import "./Home.css";
import "./Master.css";
export const Home = () => {
  return (
    <>
      <Header />
      <img src="phys ban.png" className="banner" />
      <div className="floater">
        <h1>Our Mission</h1>
        <p>
          The Physics Society of University of Galway aims to join people
          together through a love of Physics.
        </p>
        <p>All enthusiasts are welcome!</p>
      </div>
      <br></br>
      <div className="floater">
        <h1>Our Committee</h1>
        <img src="phys com.PNG" />
      </div>
    </>
  );
};
