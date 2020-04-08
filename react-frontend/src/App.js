import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import Info from './components/Info';
import Pindata from './components/pin';
import Verified from './components/verified';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App__Aside">
          <div className="Text__Set">
            <h1>EKYC DEMO</h1>
            <h2>Electronic Know Your Customer</h2>
            <h2>"We promise to protect your digital financial processes"</h2>
          </div>
        </div>
        <div className="App__Form">
          <Route exact path="/">
          <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>

            <div className="FormTitle">
                <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
            </div>
            <div className="FormCenter">
              <SignUpForm />
            </div>
          </Route>
          <Route exact path="/sign-in">
          <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>

            <div className="FormTitle">
                <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
            </div>
            <div className="FormCenter">
              <SignInForm />
            </div>
          </Route>
          <Route exact path="/upload-info">
            <div className="FormCenter">
              <Info />
            </div>
          </Route>
          <Route exact path = "/verify-pin">
            <div className = "FormCenter">
              <Pindata/>
            </div>
          </Route>
          <Route exact path = "/verified">
            <div className = "FormCenter">
               <Verified />
            </div>
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;