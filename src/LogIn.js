import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import "./LogIn.css";

const LogIn = () => {

    const history = useHistory();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //firebase login
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // successfully create new user
                console.log(auth);
                if (auth) {
                    history.push("/");
                }
            })
            .catch(error => alert(error.message))

    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?resize=740%2C204" alt="logo"/>
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}></input>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>

                    <button className="login__signInButton" type="submit" onClick={signIn}>Sign In</button>
                </form>

                <p>By signing in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies.
                </p>

                <button onClick={register} className="login__registerButton">Create your amazon account</button>
            </div>
        </div>
    );
};

export default LogIn;