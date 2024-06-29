import React from "react";
import "./Contact.css";
import { SocialIcon } from "react-social-icons";

function Contact() {
  return (
    <>
      <div className="contacts_container">
        <h1>Contact Us:</h1>
        <div className="socials">
          <SocialIcon
            url="https://instagram.com"
            href="https://www.instagram.com/physicssoc/"
            bgColor="#292b2c"
            fgColor="aliceblue"
          />

          <SocialIcon
            url="https://email.com"
            href="mailto:physicsoc@socs.universityofgalway.ie"
            bgColor="#292b2c"
            fgColor="aliceblue"
          />

          <SocialIcon
            url="https://discord.com"
            href="https://tr.ee/bnTyfqSaEV"
            bgColor="#292b2c"
            fgColor="aliceblue"
          />
        </div>
      </div>
    </>
  );
}
export default Contact;
