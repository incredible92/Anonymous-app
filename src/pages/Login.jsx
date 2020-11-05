import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

function LoginPage() {
  return (
    <div className="wrapper">
      <h1>LOGIN</h1>
      <p>
        Recieve anonymous compliments from your friends and send anonymous
        messages to your friends for free.
      </p>
      <form>
        <span>your Username</span>
        <input
          type="text"
          name="name"
          placeholder="Enter your username"
          required
        />

        <span>Password</span>
        <input
          type="text"
          name="name"
          placeholder="Enter your password"
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default LoginPage;
