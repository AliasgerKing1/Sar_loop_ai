import * as Yup from "yup";


const LoginSchema = Yup.object({
    email : Yup.string().email("This email address is invalid").required("Enter your Email !"),
    password : Yup.string().required("Enter your password !"),
})

export default LoginSchema