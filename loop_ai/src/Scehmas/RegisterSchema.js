import * as Yup from "yup";


const registerSchema = Yup.object({
    username : Yup.string().min(3, "atleast usrname has 3 character").max(15,"username have maximun 15 character").required("Enter your username !"),
    email : Yup.string().email("This email address is invalid").required("Enter your Email !"),
    password : Yup.string().min(8,"Password should have atleast 8 character").required("Enter your password !"),
    confPass : Yup.string().required("Enter your confirm password").oneOf([Yup.ref("password"), null], "password and confirm passwors does nio match !"),
})

export default registerSchema