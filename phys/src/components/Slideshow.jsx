import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./Slideshow.css";
export const Slideshow = ({ details }) => {
  return (
    <>
      <br />
      <br />

      <Container>
        <div className="gal_con">
          <h1>{details.title}</h1>

          <img src={details.first} className="gal_photo"></img>

          <img src={details.second} className="gal_photo"></img>

          <img src={details.third} className="gal_photo"></img>
        </div>
      </Container>
      <br />
      <br />
    </>
  );
};
