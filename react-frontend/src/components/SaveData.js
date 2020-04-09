import React from "react";
import { Link, Route } from "react-router-dom";
import { insertData } from "./Repository";

class SaveData extends React.Component {

    handleSubmit() {
        insertData()
        .catch(err => alert("Sorry!!! Unable to save"));
    }
    render() {
        return (
            <form className="FormField">
                <div className="FormField">
                    <h3>We are at the end of our E-KYC registration process.</h3>
                    <h3>Finally please save your information.</h3>
                    <br />
                    <Link onClick={this.handleSubmit} exact to="/end" className="FormField__Button mr-20">Save Data</Link>
                </div>
                
            </form>
        );
    }
}

export default SaveData;