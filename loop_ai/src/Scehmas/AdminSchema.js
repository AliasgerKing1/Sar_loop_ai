import * as Yup from "yup";


const AdminSchema = Yup.object({
    username : Yup.string().required("Enter your Username !"),
    password : Yup.string().required("Enter your password !"),
})

export default AdminSchema