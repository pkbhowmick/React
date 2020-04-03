import React from 'react';
import './App.css';
import SignInForm from './components/SignInForm'

function App() {
  return (
    <div className="App">
      <div className="App__Aside">
        <div className="Text__Set">
          <h1>EKYC DEMO</h1>
          <h2>Electronic Know Your Customer</h2>
          <h2>"We promise to protect your digital financial processes"</h2>
        </div>
      </div>
      <div className="App__Form">
        <div className="PageSwitcher">
          <a href="#" className="PageSwitcher__Item">Sign In</a>
          <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>
        </div>

        <div className="FormTitle">
          <a href="#" className="FormTitle__Link">Sign In</a>
          <a href="#" className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
        </div>

        <div className="FormCenter">
          <SignInForm/>
        </div>
       

      </div>

    </div>
  );
}

export default App;
