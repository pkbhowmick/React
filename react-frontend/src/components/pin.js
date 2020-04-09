import React, { Component } from 'react';
//import Info from "./info";
import { verify } from './Repository'
import { Link } from 'react-router-dom'

export default class Pindata extends Component{
    constructor() {
        super();
        this.state = {
            pin: "",
            verify_pin: ""            
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
        console.log("Just wanna check: ");
        console.log(this.state.pin);
        console.log(this.state.verify_pin);
        
        verify(this.state)
        .catch(err => alert(err));
    }
  render(){
      
      return (
          
          <div >

            <form className="FormField" onSubmit={this.handleSubmit}>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="pin">PIN</label>
                    <input className="FormField__Input" type="password" id="pin" placeholder="PIN: " name="pin" value={this.state.pin} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="verify_pin">RE-ENTER PIN</label>
                    <input className="FormField__Input" type="password" id="verify_pin" placeholder="Re-enter PIN: " name="verify_pin" value={this.state.verify_pin} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <Link exact to="/verified" className="FormField__Button mr-20" type="submit" onClick={this.handleSubmit}>Verify PIN</Link>
                </div>
                <div className="FormField">
                    <br/><br/><br/><br/> <br/><br/><br/><br/>
                    <Link exact to="/save-info" className="FormField__Label" >Continue to next page...</Link>
                </div>
            </form>
          </div>
      )
  }
}
// function Pindata (){
//     const Pin = () =>{
//         console.log("Here am I");
//     }
//     return (
//         <div>
//         <label className="FormField__Info" htmlFor="nidBack">Upload Nid Back Side</label>
//         <button className="FormField__Button mr-20" onClick ={otp} >Generate OTP</button>
//         //<button onClick={otp}>OTP</button>
//         </div>
//     )
// }
// export default Otpdata;