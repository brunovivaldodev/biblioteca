import request from 'axios';


const axios = request.create({
    baseURL: "http://localhost:4000",
})


export default axios
