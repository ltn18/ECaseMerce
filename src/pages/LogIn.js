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

  const setUser = () => {
    dispatch({
      type: "SET_USER",
      user: {
        email: email,
      },
    });
  };

  // need to hash password before push to header

  const signIn = async (e) => {
  //   await axios
  //     .post(`http://localhost:8080/customer/login`, {
  //       headers: {
  //         Authorization: email + " " + password,
  //       },
  //     })
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err.message));



      e.preventDefault();
      let signInSuccessfully = false;
      await fetch((URL), {
          headers: {
              "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({
              email: email,
              password: password,
          })

      }).then(result => {
              if(result.status === 200) {
                  alert("Log in successfully");
                  signInSuccessfully = true;
              }
              else if (email === '' || password === '') {
                  alert("You must not leave fields empty")
              }
              else if (result.status === 404) {
                  alert("Email does not exist")
              }
              else if (result.status === 403) {
                  alert("Incorrect password")
              }
              else {
                  alert("Error")
              }
              return result.json();
          }
  ).then(data => {
      if (signInSuccessfully === true) {
          setUser();
          setTimeout(() => history.push("/"), 2000);
      }
    })
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
