import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

function LoginPage() {
  return (
    <div className="wrapper">
      <h2>LOGIN</h2>
      <p className="text">
        Recieve anonymous compliments from your friends and send anonymous
        messages to your friends for free.
      </p>
      <form>
        <span>Username</span>
        <input
          className="login-details"
          type="text"
          name="username"
          placeholder="Enter your username"
          required
        />

        <span className="password">Password</span>
        <input
          className="login-details "
          type="text"
          name="password"
          placeholder="Enter your password"
          required
        />
        <button className="submit">Submit</button>
      </form>
      <p>
        Don't have account?
        <Link className="reg" to="/register">
          {" "}
          <span>Register</span>
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
