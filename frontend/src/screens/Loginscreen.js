import React, { useState, useEffect } from "react";
import "./screen.css";
import Loader from "../components/Loader";
import Error from "../components/Error";
import axios from "axios";

const Loginscreen = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState();
  const [error, setError] = useState();

  async function login() {
    const user = {
      email,
      password,
    }
    try {
      setloading(true);
      const result = (await axios.post('/api/users/login', user)).data;
      setloading(false);

      localStorage.setItem('currentUser', JSON.stringify(result));
      window.location.href= '/home';
    }
    catch (error) {
      console.log(error);
      setloading(false);
      setError(true);
    }
  }
  return (
    <div>
      {loading && (<Loader/>)}
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          {error && <Error message = "Invalid Credentials"/>}
          <div className="bs">
            <h1 id="h_one">Login</h1>
            <input
              type="Email"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <div className="button">
              <button
                className="btn btn-primary mt-3 justify-content"
                onClick={login}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginscreen;
