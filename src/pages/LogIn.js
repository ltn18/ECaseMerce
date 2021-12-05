import { LaptopWindowsSharp } from "@material-ui/icons";
import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/LogIn.css";
import { useStateValue } from '../StateProvider';


const LogIn = () => {
  const URL = `http://localhost:8080/customer/login`

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [dispatch] = useStateValue();


  const signIn = async (e) => {
    e.preventDefault();
    
    const data = { email: email, password: password }
    await axios.post(URL, data).then(result => {
      console.log(result.data);
      window.localStorage.setItem('CustomerID', result.data[0].CustomerID)
      window.localStorage.setItem('Name', result.data[0].Name)
      window.localStorage.setItem('Email', result.data[0].Email)

      history.push("/");

    }).catch(err => console.log(err.message))
  };

  const register = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="ECaseMerce_edit.jpg" alt="logo" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
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

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing in you agree to ECaseMerce's Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your ECaseMerce account
        </button>
      </div>
    </div>
  );
};

export default LogIn;
