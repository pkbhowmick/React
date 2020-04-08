import axios from 'axios';

export function signup(data) {
    return axios.post("/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        confirm: data.confirm
    })
        .then(response => {
            localStorage.setItem('signup-token',JSON.stringify(response.data.token));
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
            localStorage.setItem('signin-token',JSON.stringify(response.data.token));
            return response.data
        })
        .then(error => {
            console.log(error);
        })
}

export function faceVerification(image) {
    return axios.post("http://35.240.221.96:6000/facce_verification", {
        face : image
    })
        .then(response => {
            return response
        })
        .then(error => {
            console.log(error);
        })
}


