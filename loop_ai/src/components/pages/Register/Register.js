import React, { useState } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'
import {useFormik} from "formik"

import registerSchema from '../../../Scehmas/RegisterSchema';

import Text from '../../../shared/Inputtypes/Text';
import Email from '../../../shared/Inputtypes/Email';
import Password from '../../../shared/Inputtypes/Password';
import CheckBox from "../../../shared/Inputtypes/CheckBox"
import FormErrors from '../../../shared/FormError/FormError';

import Footer from '../../../shared/Footer/Footer';
import AuthHeader from '../../shared/AuthHeader/AuthHeader';
import SocialButton from "../../../shared/SocialButton/SocialButton"
import { addUser } from '../../../services/UserService/UserService';

const initialValues = {
    username : "",
    email : "",
    password : "",
    confPass : "",
    join_date : "",
    type : ""
}
const Register = () => {
    let navigate = useNavigate();
  let {values , handleBlur,handleSubmit,handleChange,touched,errors} = useFormik({
    initialValues : initialValues,
    validationSchema : registerSchema,
    onSubmit : () => {
        values.join_date = Date()
        addUser(values).then(result=> {
            if(result.data.success === true) {
                navigate("/")
            }
        });
    }
  })
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
                                    <h5 className="text-primary">Create New Account</h5>
                                    <p className="text-muted">Get your free velzon account now</p>
                                </div>
                                <div className="p-2 mt-4">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="useremail" className="form-label">Email <span className="text-danger">*</span></label>
                                            <Email name={"email"} placeholder={"Enter email address"} change={handleChange} blur={handleBlur} classes={"form-control " + (errors.email && touched.email ? "is-invalid" : "")}/>
<FormErrors errMsg={errors.email} touched={touched.email} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Username <span className="text-danger">*</span></label>
                                            <Text name={"username"} placeholder={"Enter username"} change={handleChange} blur={handleBlur} classes={"form-control " + (errors.username && touched.username ? "is-invalid" : "")}/>
<FormErrors errMsg={errors.username} touched={touched.username}/>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="password-input">Password</label>
                                            <div className="position-relative auth-pass-inputgroup">
                                            <Password name={"password"} autoComplete="off" placeholder={"Enter password" } id="password-input" onpaste="return false" aria-describedby="passwordInput" change={handleChange} blur={handleBlur} classes={"form-control pe-5 password-input " + (errors.password && touched.password ? "is-invalid" : "")} />
                  <FormErrors errMsg={errors.password} touched={touched.password}/>
                                                <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="password-input">Password</label>
                                            <div className="position-relative auth-pass-inputgroup">
                                            <Password name={"confPass"} autoComplete="off" placeholder={"Enter Confirm password" } id="password-input" onpaste="return false" aria-describedby="passwordInput" change={handleChange} blur={handleBlur} classes={"form-control pe-5 password-input " + (errors.confPass && touched.confPass ? "is-invalid" : "")} />
                  <FormErrors errMsg={errors.confPass} touched={touched.confPass}/>
                                                <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="type" className="form-label">Type</label>
                                            <select name="type" id="" onChange={handleChange} onBlur={handleBlur} class={"form-control  " + (errors.type && touched.type ? "is-invalid" : "")}>
                                                <option value="">Select</option>
                                                <option value="designer">Designer</option>
                                                <option value="developer">Developer</option>
                                            </select>
                                            <FormErrors errMsg={errors.type} touched={touched.type} />
                                        </div>

                                        <div className="mb-4">
                                            <p className="mb-0 fs-12 text-muted fst-italic">By registering you agree to the Velzon <a href="#" className="text-primary text-decoration-underline fst-normal fw-medium">Terms of Use</a></p>
                                        </div>

                                        <div id="password-contain" className="p-3 bg-light mb-2 rounded">
                                            <h5 className="fs-13">Password must contain:</h5>
                                            <p id="pass-length" className="invalid fs-12 mb-2">Minimum <b>8 characters</b></p>
                                            <p id="pass-lower" className="invalid fs-12 mb-2">At <b>lowercase</b> letter (a-z)</p>
                                            <p id="pass-upper" className="invalid fs-12 mb-2">At least <b>uppercase</b> letter (A-Z)</p>
                                            <p id="pass-number" className="invalid fs-12 mb-0">A least <b>number</b> (0-9)</p>
                                        </div>

                                        <div className="mt-4">
                                            <button className="btn btn-success w-100" type="submit">Sign Up</button>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <div className="signin-other-title">
                                                <h5 className="fs-13 mb-4 title text-muted">Create account with</h5>
                                            </div>

                                            <SocialButton/>
                                        </div>
                                    </form>

                                </div>
                            </div>
                            {/* <!-- end card body --> */}
                        </div>
                        {/* <!-- end card --> */}

                        <div className="mt-4 text-center">
                            <p className="mb-0">Already have an account ? <NavLink to="/" className="fw-semibold text-primary text-decoration-underline"> Signin </NavLink> </p>
                        </div>

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

export default Register