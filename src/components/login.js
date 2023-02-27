import React, { useState } from "react";
import axios from "axios";

const config = {
  headers:{
    "ngrok-skip-browser-warning": "true"
  }
};

function Login({ user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const urlBase = "https://2017-2406-7400-92-d03c-f79e-b04c-be75-8c4e.in.ngrok.io/api/v1";

  const startLogin = (credentials) => {
    console.log(credentials);
    axios
      .post(`${urlBase}/admin/login`, credentials,config)
      .then(() => {
        console.log("Sucess");
        localStorage.setItem("Id", 1);
        user(1);
        setEmail("");
        setPassword("");
      })
      .catch(() => {
        alert("Inavlid Credintials");
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    let username = email;
    const credentials = {
      username,
      password,
    };
    startLogin(credentials);
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3>Admin Log In</h3>
          <div className="form-group mt-3">
            <h5>User Name</h5>
            <input
              type="text"
              required
              className="form-control mt-1"
              placeholder="Enter name"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <h5>Password</h5>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="d-grid mt-5">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => handleLogin(e)}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
