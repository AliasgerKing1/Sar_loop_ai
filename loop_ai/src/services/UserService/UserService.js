import axios from "axios";

let apiUrl = "http://localhost:4000/api/user"
let addUser = (obj) => {
    return axios.post(apiUrl, obj)
}

export {addUser}