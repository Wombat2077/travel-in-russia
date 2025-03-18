import axios from "axios";


const client = axios.create({
    baseURL: 'http://localhost:5090/'
})

export {
    client 
}