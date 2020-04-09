import React from "react";
import { Link, Route } from "react-router-dom";

class EndPage extends React.Component {
    render() {
        return (
            <div className="Title">
                <br />
                <h2>Your all information is saved.</h2>
                <br /> <br /> <br /> <br />
                <div className="Title">
                    <h1>THANK YOU</h1>
                    <h1>&</h1>
                    <h1>STAY SAFE</h1>
                </div>
                <div className="FormField">
                    <br /><br /><br /><br /> <br /><br /><br /><br />
                    <Link exact to="/" className="FormField__Label" >Go to Home page...</Link>
                </div>
            </div>

        );
    }
}

export default EndPage;