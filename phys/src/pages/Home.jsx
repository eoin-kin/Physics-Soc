import React from "react";
import Header from "../components/Header";
import "./Home.css";
import "./Master.css";
import Contact from "../components/Contact";
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
        <ul>
          <li>Auditor: Raven Blok</li>
          <li>Vice-Auditor: Aisling Kinsella</li>
          <li>Treasurer: Elisabeth Pfeiffer</li>
          <li>Vice-Treasurer: Oskar Sokol</li>
          <li>Secretary: Emilijus Bielis</li>
          <li>Special Events and Safety Officer: Niamh O'Brien</li>
          <li>Engineering Liason: Adam Gaughran</li>
          <li>Ordinary Committee Member: Aoife Farren</li>
          <li>Ordinary Committee Member: Chichi Agwaraonye</li>
          <li>Ordinary Committee Member: Tom Browne</li>
          <li>Ordinary Committee Member: Eoin Kenny</li>
          <li>Researcher: Jonathan O'Connor</li>
        </ul>
      </div>
      <br />
      <Contact />
    </>
  );
};
