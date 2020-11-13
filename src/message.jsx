import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

function Message() {
  return (
    <div className="wrapper">
      <h2>SEND ME MESSAGE</h2>
      <form>
        <textarea></textarea>
      </form>
    </div>
  );
}

export default Message;
