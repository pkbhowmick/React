import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import Info from './components/Info';
import Pindata from './components/pin';
import Verified from './components/verified';
import WebcamCapture from './components/Webcam';
import ParsedInfoForm from './components/Parsed_info';
import SaveData from './components/SaveData';
import EndPage from './components/EndPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/(|upload-info|verify-pin|verified|parsed-info|upload-done|save-info|end)">
          <div className="App__Aside">
            <div className="Text__Set">
              <h1>EKYC DEMO</h1>
              <h2>Electronic Know Your Customer</h2>
              <h2>"We promise to protect your digital financial processes"</h2>
            </div>
          </div>
          <div className="App__Form">
            <Route exact path="/(|upload-info|verify-pin|verified|parsed-info|upload-done|save-info|end)">
              <Route exact path="/(|upload-info|verify-pin|verified|parsed-info|upload-done|save-info)">
              <div className="Title">
                <h1><ul>Registration Process</ul></h1>
              </div>
              </Route>
              <Route exact path="/(|upload-info|upload-done)">
                <div className="FormCenter">
                  <Info />
                </div>
              </Route>
              <Route exact path="/verify-pin">
                <div className="FormCenter">
                  <Pindata />
                </div>
              </Route>
              <Route exact path="/verified">
                <div className="FormCenter">
                  <Verified />
                </div>
              </Route>
              <Route exact path="/parsed-info">
                <div className="FormCenter">
                  <ParsedInfoForm />
                </div>
              </Route>
              <Route exact path="/(save-info)">
                <div className="FormCenter">
                  <SaveData />
                </div>
              </Route>
              <Route exact path="/end">
                <EndPage/>
              </Route>

            </Route >
          </div >
        </Route>
        <Route exact path="/upload-photo">
          <div>
            <WebcamCapture />
          </div>
        </Route>
      </div>
    </Router >
  );
}

export default App;