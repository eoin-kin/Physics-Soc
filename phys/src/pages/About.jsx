import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";

export const About = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="floater">
        <h1>History</h1>
        <p>
          After a short hiatus Physics Soc returned in the 2023/24 academic year
          with such success, we were granted the Phoenix Award at Socs Ball!
          Come join us to keep building on this momentum; we need more mass :)
        </p>
        <p>...</p>
        <p>
          Physics Soc is one of University of Galway’s oldest academic
          societies. We provide an educational network for students to take part
          in weekly events, both social and academic, as well as events with
          other societies and colleges. As one of the societies in UoG we
          welcome all students, from any discipline and background.
        </p>
        <p>...</p>
        <p>
          Our goal as a society is to promote science, particularly physics,
          both on campus and in Galway. We focus on all aspects of physics from
          the niche and unpopular to the niche and mildly popular!
        </p>
        <p>...</p>
        <p>
          Keep an eye out for our weekly newsletter where we announce the events
          we will be running, give updates on our evil schemes, and highlight
          any fun news going on in the world of physics that would be
          interesting to those with a passion for the subject.
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Contact />
    </div>
  );
};
