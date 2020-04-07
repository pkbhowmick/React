import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Info extends Component {
    render() {
        return (
            <form className="FormField" >
                <div className="FormField">
                    <label className="FormField__Info" htmlFor="nidFront">Upload Nid Front Side</label>
                    <button className="FormField__Button mr-20" type="submit" >Upload</button>
                </div>
                <div className="FormField">
                    <label className="FormField__Info" htmlFor="nidBack">Upload Nid Back Side</label>
                    <button className="FormField__Button mr-20" type="submit" >Upload</button>
                </div>
                <div className="FormField">
                    <label className="FormField__Info" htmlFor="facePic">Upload your picture</label>
                    <button className="FormField__Button mr-20" type="submit" >Open camera</button>
                </div>
            </form>
        );
    }
}
export default Info;