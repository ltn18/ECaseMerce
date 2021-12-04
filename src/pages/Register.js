import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../css/LogIn.css";

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // need to hash password before push to header

  const signIn = async (e) => {
    e.preventDefault();
    // //firebase login
    // auth.signInWithEmailAndPassword(email, password)
    //     .then(auth => {
    //         history.push("/")
    //     })
    //     .catch(error => alert(error.message))

    // await axios
    //   .post(`http://localhost:3000/signin`, {
    //     headers: {
    //       Authorization: email + " " + password,
    //     },
    //   })
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err.message));

    history.push("/login");
  };

  const register = (e) => {
    // e.preventDefault();
    // auth.createUserWithEmailAndPassword(email, password)
    //     .then((auth) => {
    //         // successfully create new user
    //         console.log(auth);
    //         if (auth) {
    //             history.push("/");
    //         }
    //     })
    //     .catch(error => alert(error.message))
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
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <h5>Phone Number</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <h5>Gender</h5>
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
