import React, { useEffect } from 'react';
import Header from "./components/Header";
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';
import LogIn from './pages/LogIn';
import { useStateValue } from './StateProvider';
import Orders from './pages/Orders';

function App() {

  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {

    // auth.onAuthStateChanged(authUser => {
    //   console.log("USER is >>>", authUser);

    //   if (authUser) {
    //     // login
    //     dispatch({
    //       type: "SET_USER",
    //       user: authUser
    //     })
    //   }
    //   else {
    //     // logout
    //     dispatch({
    //       type: "SET_USER",
    //       user: null
    //     })
    //   }
    // })
        
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
