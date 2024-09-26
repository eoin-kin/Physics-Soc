import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import "./Gallery.css";
import { Slideshow } from "../components/Slideshow";
export const Gallery = () => {
  return (
    <div>
      <Header />
      <Slideshow
        details={{
          title: "Committee 2023/2024",
          first: "phys com.PNG",
          second: "ball 1.jpg",
          third: "ball 2.jpg",
        }}
      ></Slideshow>
      <Contact />
    </div>
  );
};
