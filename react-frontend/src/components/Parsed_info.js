import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { verifyData } from './Repository';

class ParsedInfoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            fName: "",
            mName: "",
            sName: "",
            gender: "",
            relation: "",
            nominee: "",
            pNo: "",
            prof: "",
            presentAddr: "",
            permAddr: ""

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        })

    }
    handleSubmit(e) {
        e.preventDefault();
        console.log("The form was submitted with the following data: ");
        console.log(this.state);
        verifyData(this.state)
            .catch(err => alert("Sorry!!! Your given data is not correct."));
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                fName: this.userData.fathers_name,
                mName: this.userData.mothers_name
            })
        } else {
            this.setState({
                name: '',
                fName: '',
                mName: ''
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }
    render() {
        return (
            <form className="FormField" >
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="name">Applicant's Name</label>
                    <input className="FormField__Input" type="text" id="name" placeholder="" name="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="mName">Mother's Name</label>
                    <input className="FormField__Input" type="text" id="mName" placeholder="" name="mName" value={this.state.mName} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="fName">Father's Name</label>
                    <input className="FormField__Input" type="text" id="fName" placeholder="" name="fName" value={this.state.fName} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="sName">Spouse Name</label>
                    <input className="FormField__Input" type="text" id="sName" placeholder="" name="sName" value={this.state.sName} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="gender">Gender(M/F/T)</label>
                    <input className="FormField__Input" type="text" id="gender" placeholder="Enter your gender" name="gender" value={this.state.gender} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="prof">Profesion</label>
                    <input className="FormField__Input" type="text" id="prof" placeholder="Enter your profession" name="prof" value={this.state.prof} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="pNo">Phone Number</label>
                    <input className="FormField__Input" type="text" id="pNo" placeholder="Enter your phone no." name="pNo" value={this.state.pNo} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="presentAddr">Present Address</label>
                    <input className="FormField__Input" type="text" id="presentAddr" placeholder="Confirm your present Address" name="presentAddr" value={this.state.presentAddr} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="permAddr">Permanent Address</label>
                    <input className="FormField__Input" type="text" id="permAddr" placeholder="Confirm your permanent address" name="permAddr" value={this.state.permAddr} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="nominee">Nominee</label>
                    <input className="FormField__Input" type="text" id="nominee" placeholder="Enter nominee name" name="nominee" value={this.state.nominee} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="relation">Relation</label>
                    <input className="FormField__Input" type="text" id="relation" placeholder="Relation with nominee" name="relation" value={this.state.relation} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="picture">Picture</label>

                </div>
                <div className="FormField">
                    <label className="FormField__CheckboxLabel">
                        <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> Make sure your given data is correct.
                </label>

                </div>
                <div className="FormField">
                    <Link onClick={this.handleSubmit} exact to="/verify-pin" className="FormField__Button mr-20" type="submit" >Verify Data</Link>
                </div>
                <div className="FormField">
                    <Link exact to="/verify-pin" className="FormField__Label" >Continue to next page...</Link>
                </div>

            </form>
        );
    }
}
export default ParsedInfoForm;