import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'
import {useFormik} from "formik"

import registerSchema from '../../../Scehmas/RegisterSchema';

import Text from '../../shared/Inputtypes/Text';
import Email from '../../shared/Inputtypes/Email';
import Password from '../../shared/Inputtypes/Password';
import CheckBox from "../../shared/Inputtypes/CheckBox"
import FormErrors from '../../shared/FormError/FormError';

const initialValues = {
    fname : "",
    lname : "",
    email : "",
    password : "",
    confPass : "",
    terms : "",
}
const Register = () => {
    
  let {values , handleBlur,handleSubmit,handleChange,touched,errors} = useFormik({
    initialValues : initialValues,
    validationSchema : registerSchema,
    onSubmit : () => {
        console.log(values)
    }
  })
    
  return (
    <>
        <div className="sticky-header">
    <a href="#wrapper" data-type="section-switch" className="scrollup">
        <i className="icofont-bubble-up"></i>
    </a>
    {/* <!-- Preloader Start Here --> */}
    {/* <div id="preloader"></div> */}
    {/* <!-- Preloader End Here --> */}
    <div id="wrapper" className="wrapper overflow-hidden">

        {/* <!--=====================================-->
        <!--=          Header Menu Start       	=-->
        <!--=====================================--> */}
        <div className="login-page-wrap">
            <div className="content-wrap">
                <div className="login-content">
                    <div className="login-form-wrap">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <NavLink className="nav-link" data-toggle="tab" to="/" role="tab" aria-selected="true"><i className="icofont-users-alt-4"></i> Sign In </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" data-toggle="tab" to="/register" role="tab" aria-selected="false"><i className="icofont-download"></i> Registration</NavLink>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane registration-tab fade show active" role="tabpanel">
                                <h3 className="item-title">Sign Up Your Account</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <Text name={"fname"} classes={"form-control " + (errors.fname && touched.fname ? "is-invalid" : "")} placeholder={"First Name"} change={handleChange} blur={handleBlur} autoComplete="off" />
                                        <FormErrors errMsg={errors.fname} touched={touched.fname}/>
                                    </div>
                                    <div className="form-group">
                                        <Text name={"lname"} classes={"form-control " + (errors.lname && touched.lname ? "is-invalid" : "")} placeholder={"Last Name"} change={handleChange} blur={handleBlur} autoComplete="off" />
                                        <FormErrors errMsg={errors.lname} touched={touched.lname}/>
                                    </div>
                                    <div className="form-group">
                                        <Email name="email" autoComplete="off" placeholder="E-mail" change={handleChange} blur={handleBlur} classes={"form-control " + (errors.email && touched.email ? "is-invalid" : "")}/>
                                        <FormErrors errMsg={errors.email} touched={touched.email}/>
                                    </div>
                                    <div className="form-group">
                                        <Password name="password" autoComplete="off" placeholder="Type Password" change={handleChange} blur={handleBlur} classes={"form-control " + (errors.password && touched.password ? "is-invalid" : "")} />
                                        <FormErrors errMsg={errors.password} touched={touched.password}/>
                                    </div>
                                    <div className="form-group">
                                        <Password name="confPass" autoComplete="off" placeholder="Type Confirm Password" change={handleChange} blur={handleBlur} classes={"form-control " + (errors.confPass && touched.confPass ? "is-invalid" : "")}/>
                                        <FormErrors errMsg={errors.confPass} touched={touched.confPass}/>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-check mb-3">
                                            <input type="checkbox" className="form-check-input" id="validationFormCheck1" />
                                            {/* <FormErrors errMsg={errors.terms} touched={touched.terms}/> */}
                                            <label className="form-check-label" htmlFor="validationFormCheck1">I accept the <a href="#">Terms and Conditions</a></label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" name="registration" className="submit-btn" style={{textAlign : "center"}}>Complete Registration</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map-line">
                    <img src="/assets/media/banner/map_line.png" alt="map" />
                    <ul className="map-marker">
                        <li><img src="/assets/media/banner/marker_1.png" alt="marker" /></li>
                        <li><img src="/assets/media/banner/marker_2.png" alt="marker" /></li>
                        <li><img src="/assets/media/banner/marker_3.png" alt="marker" /></li>
                        <li><img src="/assets/media/banner/marker_4.png" alt="marker" /></li>
                    </ul>
                </div>
            </div>
        </div>
{/* 
        <!--=====================================-->
        <!--=      Header Search Start          =-->
        <!--=====================================--> */}
        <div id="header-search" className="header-search">
            <button type="button" className="close">×</button>
            <form className="header-search-form">
                <input type="search" defualtvalue="" placeholder="Search here..." />
                <button type="submit" className="search-btn">
                    <i className="flaticon-search"></i>
                </button>
            </form>
        </div>
    </div>
    </div>
    </>
  )
}

export default Register