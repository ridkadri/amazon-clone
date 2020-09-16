import React, {useEffect} from 'react';
import './App.css';

//components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_k8ZdFUiX2rabCxkRWAGMfWXH'
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >> ', authUser)

      if(authUser) {
        //the user just logged in/ user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/checkout'>
            <Header/>
            <Checkout/>
          </Route>
          <Route path='/payment'>
            <Header/>
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
          </Route>
          <Route path='/'>
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
