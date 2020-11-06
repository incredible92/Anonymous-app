import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

function Register() {
  return (
    <div className="wrapper">
      <h2>REGISTER</h2>
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
        <button className="submit">Register Account</button>
      </form>
      <p>
        Already have an account?
        <Link className="reg" to="/login">
          {" "}
          <span>Login</span>
        </Link>
      </p>
    </div>
  );
}

export default Register;
