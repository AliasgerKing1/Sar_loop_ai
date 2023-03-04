import axios from "axios";

let apiUrl = "http://localhost:4000/api/user"
let addUser = (obj) => {
    return axios.post(apiUrl, obj)
}

let delUser = () => {
    return axios.delete(apiUrl)
}
export {addUser, delUser}