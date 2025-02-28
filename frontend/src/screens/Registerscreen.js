import React, { useState, useEffect } from "react";
import "./screen.css";
import Loader from "../components/Loader";
import Error from "../components/Error";
import axios from "axios";
import Success from "../components/Success";


const Registerscreen = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const [loading, setloading] = useState(false);
  const [error, setError] = useState();
  const[success, setsuccess] = useState()

   async function register() {
    if (password == cpassword) {
      const user = {
        name,
        email,
        password,
        cpassword,
      };
      try {
        setloading(true);
        const result = (await axios.post('/api/users/register', user)).data
        setloading(false);
        setsuccess(true);
        setname('');
        setemail('');
        setpassword('');
        setcpassword('');
      } catch (error) {
        console.log(error);
        setloading(false);
        setError(true);
      }
    } else {
      alert("Password do not match");
    }
  }
  return (
    <div>
      {loading && (<Loader/>)}
      {error && (<Error/>)}
      
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
        {success && (<Success message = "Registration Successful"/>)}
          <div className="bs">
            <h1 id="h_one">Register</h1>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
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
            <input
              type="password"
              className="form-control"
              placeholder="confirm password"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
            />

            <div className="button">
              <button
                className="btn btn-primary mt-3 justify-content"
                onClick={register}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registerscreen;
