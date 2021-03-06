import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { login } from './Repository'

class SignInForm extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e)
    {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name] : value
        })

    }
    handleSubmit(e)
    {
        e.preventDefault();
        console.log("The form was submitted with the following data: ");
        console.log(this.state);
        login(this.state)
        .catch(err => alert(err));
    }

    render() {
        return (
            <form className="FormField" onSubmit={this.handleSubmit}>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">Email Address</label>
                    <input className="FormField__Input" type="email" id="email" placeholder="Enter your email address" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">Password</label>
                    <input className="FormField__Input" type="password" id="password" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <Link exact to="/upload-info" className="FormField__Button mr-20" type="submit" >Sign In</Link>
                    <Link exact to="/" className="FormField__Link">Create new account?</Link>
                </div>
            </form>
        );
    }
}
export default SignInForm;