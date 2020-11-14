import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

function MessagePage() {
  return (
    <div className="wrapper">
      <h2>SEND ME MESSAGE</h2>
      <p className="text">
        Hey! This is a text message with a secret sender. Try it out! 😀
      </p>
      <form>
        <textarea className="text-message"></textarea>
        <Link to="/message">
          {" "}
          <button class="reg">Send</button>
        </Link>
      </form>
    </div>
  );
}

export default MessagePage;
