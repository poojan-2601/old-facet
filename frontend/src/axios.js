import axios from 'axios'

export default axios.create({
    baseURL : "http://127.0.0.1:5000",
    headers:{
        Authorization: localStorage.getItem('token')?'Bearer '+localStorage.getItem('token'):null,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})