import React from "react";
import "./Contact.css";
import { SocialIcon } from "react-social-icons";

function Contact() {
  return (
    <>
      <div className="contacts_container">
        <h1>Contact Us:</h1>
        <SocialIcon
          url="https://instagram.com"
          bgColor="#292b2c"
          fgColor="aliceblue"
        />
        <a href="https://www.instagram.com/physicssoc/">Instagram</a>
        <SocialIcon
          url="https://email.com"
          bgColor="#292b2c"
          fgColor="aliceblue"
        />
        <a href="mailto:physicsoc@socs.universityofgalway.ie">Email</a>
      </div>
    </>
  );
}
export default Contact;
