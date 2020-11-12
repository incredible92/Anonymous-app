import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Login.scss";

function LoginPage() {
  const handleLogin = (e) => {
    e.preventDefault();
    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    const result = axios
      .post("http://localhost:9090/api/v1/login", body)
      .then((response) => console.log(response.data))
      .catch(console.log);

    console.log("loading");
    console.log(result);
  };
  return (
    <div className="wrapper">
      <h2>LOGIN</h2>
      <p className="text">
        Recieve anonymous compliments from your friends and send anonymous
        messages to your friends for free.
      </p>
      <form onSubmit={(e) => handleLogin(e)}>
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
          type="password"
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
