import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import {useFormik} from "formik"
import LoginSchema from '../../../Scehmas/LoginSchema';

import Email from '../../shared/Inputtypes/Email';
import Password from '../../shared/Inputtypes/Password';

import {AlertDanger} from "../../../shared/Alerts/Alerts"

import AuthHeader from '../../shared/AuthHeader/AuthHeader'
import Footer from '../../shared/Footer/Footer'
import SocialButton from "../../shared/SocialButton/SocialButton"
import FormErrors from '../../shared/FormError/FormError';

import { DoLogin } from '../../../services/UserService/LoginAuthService/LoginAuthService';
import { delUser } from '../../../services/UserService/UserService';
const initialValues = {
    email : "",
    password : "",
}
const Login = () => {
    let navigate = useNavigate();
    let [showSpinner, setShowSpinner] = useState(false);
    let [showAlert, setShowAlert] = useState(false);
let [msg, setMsg] = useState("");
    let {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
   initialValues : initialValues,
   validationSchema : LoginSchema,
    onSubmit : ()=> {
        setShowSpinner(true);
    DoLogin(values).then(result=> {
                        if (result.data.errType === 1) {
                            setMsg("This email/username or password is incorrect !");
                            setShowAlert(true);
                        }
                        if (result.data.errType === 2) {
                            setMsg("This Password is incorrect !");
                            setShowAlert(true);
                        }
                        if(result.data.status === 200) {
                            localStorage.setItem("token", result.data.token);
                            navigate("/auth/home")
                }
            })
        }
      })
      let del = () => {
delUser().then(result=> {
    console.log(result.data)
});
      }
  return (
    <>
    <div className="auth-page-wrapper pt-5">
        {/* <!-- auth page bg --> */}
        <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
            <div className="bg-overlay"></div>
            <div className="shape">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
      <path d="M0 36c144 17.6 432 87.2 720 88 288 .8 576-67.2 720-84v100H0z"></path>
    </svg>
            </div>
        </div>

        {/* <!-- auth page content --> */}
        <div className="auth-page-content">
            <div className="container">
              <AuthHeader/>

                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card mt-4">

                            <div className="card-body p-4">
                                <div className="text-center mt-2">
                                    <h5 className="text-primary">Welcome Back !</h5>
                                    <p className="text-muted">Sign in to continue to Velzon.</p>
                                </div>
                                <div className="p-2 mt-4">
                                    <form onSubmit={handleSubmit}>

                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Username</label>
                                            <Email name={"email"} placeholder={"Enter email address"} change={handleChange} blur={handleBlur} classes={"form-control " + (errors.email && touched.email ? "is-invalid" : "")}/>
<FormErrors errMsg={errors.email} touched={touched.email} />
                                        </div>

                                        <div className="mb-3">
                                            <div className="float-end">
                                                <a href="auth-pass-reset-basic.html" className="text-muted">Forgot password?</a>
                                            </div>
                                            <label className="form-label" htmlFor="password-input">Password</label>
                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                            <Password name={"password"} autoComplete="off" placeholder={"Enter password" } id="password-input" onpaste="return false" aria-describedby="passwordInput" change={handleChange} blur={handleBlur} classes={"form-control pe-5 password-input " + (errors.password && touched.password ? "is-invalid" : "")} />
                  <FormErrors errMsg={errors.password} touched={touched.password}/>
                                                <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>
                                            </div>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                            <label className="form-check-label" htmlFor="auth-remember-check">Remember me</label>
                                        </div>

                                        <div className="mt-4">
                                            <button className="btn btn-success w-100" type="submit">Sign In</button>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <div className="signin-other-title">
                                                <h5 className="fs-13 mb-4 title">Sign In with</h5>
                                            </div>
                                            <SocialButton/>
                                        </div>
                                        {
                                        showAlert ? (<AlertDanger msg={msg} />) : ""
                                      }
                                    </form>
                                </div>
                            </div>
                            {/* <!-- end card body --> */}
                        </div>
                        {/* <!-- end card --> */}

                        <div className="mt-4 text-center">
                            <p className="mb-0">Don't have an account ? <NavLink to="/register" className="fw-semibold text-primary text-decoration-underline"> Signup </NavLink> </p>
                        </div>
                        {/* <button className='btn btn-primary' onClick={del}>hii</button> */}

                    </div>
                </div>
                {/* <!-- end row --> */}
            </div>
            {/* <!-- end container --> */}
        </div>
        {/* <!-- end auth page content --> */}
<Footer/>
    </div>
    {/* <!-- end auth-page-wrapper --> */}
    </>
  )
}

export default Login