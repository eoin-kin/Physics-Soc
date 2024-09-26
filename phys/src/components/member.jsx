import React from "react";
import "./member.css";

export const Member = ({ com_member }) => {
  return (
    <>
      <br></br>
      <div className="wrapper">
        <img src="atom.png" className="atom" />
        <img src={com_member.img} className="headshot" />
        <div className="profile">
          <h1>{com_member.name}</h1>
          <p>
            {com_member.position} {com_member.pronouns}
          </p>
        </div>
        <img src="atom.png" className="atom" />
      </div>
    </>
  );
};
