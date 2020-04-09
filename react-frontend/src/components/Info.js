import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
class Info extends Component {

    constructor() {
        super();

        this.fileInput = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const imgNidFront = this.fileInput.current.files[0];
        const formData = new FormData();
        formData.append('file', imgNidFront)
        axios.post('http://35.240.221.96:6000/parse_nid', imgNidFront, {
            headers: { 'content-Type': 'multipart/form-data' }
        })
            .then(response => {
                localStorage.setItem('user', JSON.stringify(response.data));

                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        return (
            <form className="FormField" >
                <div className="FormField">
                    <label className="FormField__Info" htmlFor="nidFront">Upload Nid Front Side</label>
                    <input type="file" accept="image/*" multiple="false" ref={this.fileInput} />
                    <button type="submit" onClick={this.handleSubmit}>Upload</button>

                </div>

                <div className="FormField">
                    <label className="FormField__Info" htmlFor="nidBack">Upload Nid Back Side</label>
                    <input type="file" accept="image/*" multiple="false" ref={this.fileInput} />
                    <button type="submit" onClick={this.handleSubmit}>Upload</button>
                </div>

                <div className="FormField">
                    <Link to="/parsed-info" className="FormField__Button mr-20" type="submit" >Show parsed data</Link>
                </div>
                <div className="FormField">
                    <label className="FormField__Info" htmlFor="facePic">Upload your picture</label>
                    <Link to="upload-photo" className="FormField__Button mr-20" >Open camera</Link>
                </div>
                <div className="FormField">
                    <Link to="/verify-pin" className="FormField__Button mr-20" type="submit" >Continue to next page</Link>
                </div>
            </form>
        );
    }
}
export default Info;