import axios from "axios"

let apiUrl = "http://localhost:4000/api/admin"


let getAdmin = () => {
    return axios.get(apiUrl)
}




let totalUser = () => {
return axios.get(`${apiUrl}/total`)
}
let allUser = () => {
return axios.get(`${apiUrl}/user`)
}

export {totalUser, allUser, getAdmin}