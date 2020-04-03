import React from 'react';

function SignInForm() {
    return (
        <form className="FormField">
            <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input className="FormField__Input" type="text" id="name" placeholder="Enter your Full Name" name="name" />
            </div>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Email Address</label>
                <input className="FormField__Input" type="email" id="email" placeholder="Enter your email address" name="email" />
            </div>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input className="FormField__Input" type="password" id="password" placeholder="Enter your password" name="password" />
            </div>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="confirm">Confirm Password</label>
                <input className="FormField__Input" type="password" id="confirm" placeholder="Confirm your password" name="confirm" />
            </div>
            <div className="FormField">
                <button className="FormField__Button mr-20">Sign Up</button>
                <a href="#" className="FormField__Link">Already have an account?</a>
            </div>
        </form>
    );
}
export default SignInForm;