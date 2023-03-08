import axios from "axios";

let addPhoto = (obj) => {
return axios.post("http://localhost:4000/api/admin/screenshot", obj);
}
let token = localStorage.getItem("token");
const header = token;

let getPhoto = () => {
return axios.get("http://localhost:4000/api/admin/screenshot",{ headers: { header } });
}

export {addPhoto,getPhoto}