import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            confirm: ""
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
        axios.post("/register",{
            name : this.state.name,
            email : this.state.email,
            password : this.state.password,
            confirm : this.state.confirm
        })
        .then(response => {
            console.log(response);
        })
        .then(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <form className="FormField" onSubmit={this.handleSubmit}>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="name">Full Name</label>
                    <input className="FormField__Input" type="text" id="name" placeholder="Enter your Full Name" name="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">Email Address</label>
                    <input className="FormField__Input" type="email" id="email" placeholder="Enter your email address" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">Password</label>
                    <input className="FormField__Input" type="password" id="password" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="confirm">Confirm Password</label>
                    <input className="FormField__Input" type="password" id="confirm" placeholder="Confirm your password" name="confirm" value={this.state.confirm} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <button className="FormField__Button mr-20" type="submit" >Sign Up</button>
                    <Link to="/sign-in" className="FormField__Link">Already have an account?</Link>
                </div>
            </form>
        );
    }
}
export default SignUpForm;