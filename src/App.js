import React, { useEffect } from 'react';
import './App.css';
import Header from "./Header";
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import LogIn from './LogIn';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';
import Search from './Search';

const promise = loadStripe(
  'pk_test_51IEpe6JlanqIcLJbuGeGeqCpFAcuPWkLTtrRklFZaH5clVOPaIug7ELzT35ByKzbZdb5P7viDdt0FoJa2tN2UfdG0051OZksMr'
  );

function App() {

  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log("USER is >>>", authUser);

      if (authUser) {
        // login
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        // logout
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
        
  }, [])

  return (
    <Router>
      <div className="app">
        
        <Switch>
          <Route path="/checkout">
            <Header></Header>
            <Checkout />
          </Route>

          <Route path="/login">
            <LogIn />
          </Route>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/search">
            <Header />
            <Search />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
