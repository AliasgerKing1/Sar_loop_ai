import * as yup from "yup";


const registerSchema = yup.object({
    fname : yup.string().max(15,"first name have maximun 15 character").required("Enter your first name !"),
    lname : yup.string().max(15,"last name have maximun 15 character").required("Enter your last name !"),
    email : yup.string().email("This email address is invalid").required("Enter your Email !"),
    password : yup.string().min(8,"Password should have atleast 8 character").required("Enter your password !"),
    confPass : yup.string().required("Enter your confirm password").oneOf([yup.ref("password"), null], "password and confirm passwors does nio match !"),
    // terms : yup.string().required("Accept terms and conditions to proceed")
})

export default registerSchema