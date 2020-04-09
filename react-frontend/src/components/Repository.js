import axios from 'axios';

export function signup(data) {
    return axios.post("/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        confirm: data.confirm
    })
        .then(response => {
            localStorage.setItem('signup-token', JSON.stringify(response.data.token));
            return response.data
        })
        .then(error => {
            console.log(error);
        })
}

export function login(data) {
    return axios.post("/sign-in", {
        email: data.email,
        password: data.password
    })
        .then(response => {
            localStorage.setItem('signin-token', JSON.stringify(response.data.token));
            return response.data
        })
        .then(error => {
            console.log(error);
        })
}

export function verify(data) {
    console.log("here we go");
    if ((data.pin.length) < 6) {
        console.log("oops!");
        alert("Pin must contain 6 digits");
    }
    else if (data.pin != data.verify_pin) alert("Verification Pin must be the same as the Pin");
    else {
        return axios.post(" http://35.240.221.96:6000/save_pin/", {
            nid: "09911236445",
            pin: data.pin
        })
            .then(response => {
                alert("Verified!");
                return response.data;
            })
            .then(error => {
                console.log("Error! again!");
            })
    }
}
export function faceVerification(image) {
    return axios.post("http://35.240.221.96:6000/facce_verification", {
        face: image
    })
        .then(response => {
            return response
        })
        .then(error => {
            console.log(error);
        })
}

export function verifyData(data) {
    return axios.post("http://35.240.221.96:6000/verify_nid_data", {

        name: data.name,
        fathers_name: data.fName,
        mothers_name: data.mName,
        spouse_name: data.sName,
        gender: data.gender,
        profession: data.prof,
        mobile: data.pNo,
        present_address: data.presentAddr,
        permanent_address: data.parmAddr,
        Nominee: data.nominee,
        Relation: data.relation
    })
    .then(response => {
        alert("Verifying your data....");
        alert("Congratulations. Your information is verified.");
        console.log(response)
    })
}

export function insertData() {
    return axios.post("http://35.240.221.96:6000/insert_nid_info", {

    })
    .then(response => {
        alert("Your information is saved.");
        console.log(response)
    })
}

