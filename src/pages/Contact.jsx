import React from "react";
import "./Login.scss";

function Contact() {
  return (
    <div className="wrapper">
      <h2>CONTACT US</h2>
      <span className="num">+234(0)8060131846 OR +234(0)7060697495</span>

      <p>You can contact us using the social media platform below:</p>
      <p>
        Twitter:
        <a
          className="reg"
          href="https://twitter.com/S_Abdullahi_1"
          rel="noreferrer"
          target="_blank"
        >
          @S_Abdullahi_1
        </a>
      </p>
    </div>
  );
}

export default Contact;
