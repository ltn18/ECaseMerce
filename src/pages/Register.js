import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../css/LogIn.css";

const Register = () => {
  const URL = "http://localhost:8080/customer/create" ;


  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retype, setRetype] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  // need to hash password before push to header

  const signIn = async (e) => {
    e.preventDefault();
    history.push("/login");
  };

  async function register(e) {
    e.preventDefault();
        if (email === '' || password === '' || phoneNumber === '' || gender === '') {
            alert("Cannot leave empty fields")
            return;
        }
        if (password !== retype) {
            alert("Retyped password does not match");
            return;
        }
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) === false) {
            alert("wrong email format");
            return;
        }

        let result = await fetch((URL), {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password,
                phoneNumber: phoneNumber,
                gender: gender,
            })
        });
       
        if (result.status === 200) {
            alert("Registered successfully")
            setTimeout(() => history.push("/login"), 2000);
        }
        else {
            alert("Error!")
        }
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="ECaseMerce_edit.jpg" alt="logo" />
      </Link>

      <div className="login__container">
        <h1>Register</h1>
        <form>
          <h5>CWRU Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <h5>Confirm Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setRetype(e.target.value)}
          ></input>

          <h5>Phone Number</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></input>

          <h5>Gender</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setGender(e.target.value)}
          ></input>

          <button
            className="login__signInButton"
            type="submit"
            onClick={register}
          >
            Register
          </button>
        </form>

        <button onClick={signIn} className="login__registerButton">
          Already have an account? Sign-in
        </button>
      </div>
    </div>
  );
};

export default Register;
