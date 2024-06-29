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
          <li>
            <b>Auditor:</b> Raven Blok
          </li>
          <li>
            <b>Vice-Auditor:</b> Aisling Kinsella
          </li>
          <li>
            <b>Treasurer:</b> Elisabeth Pfeiffer
          </li>
          <li>
            <b>Vice-Treasurer:</b> Oskar Sokol
          </li>
          <li>
            <b>Secretary:</b> Emilijus Bielis
          </li>
          <li>
            <b>Special Events and Safety Officer:</b> Niamh O'Brien
          </li>
          <li>
            <b>Engineering Liason:</b> Adam Gaughran
          </li>
          <li>
            <b>Ordinary Committee Member:</b> Aoife Farren
          </li>
          <li>
            <b>Ordinary Committee Member:</b> Chichi Agwaraonye
          </li>
          <li>
            <b>Ordinary Committee Member:</b> Tom Browne
          </li>
          <li>
            <b>Ordinary Committee Member:</b> Eoin Kenny
          </li>
          <li>
            <b>Researcher:</b> Jonathan O'Connor
          </li>
        </ul>
      </div>
      <br />
      <Contact />
    </>
  );
};
