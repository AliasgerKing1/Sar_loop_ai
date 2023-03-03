import React from 'react'
import { NavLink } from 'react-router-dom'

import AuthHeader from '../../shared/AuthHeader/AuthHeader'
import Footer from '../../shared/Footer/Footer'
import SocialButton from "../../shared/SocialButton/SocialButton"

const Login = () => {
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
                                    <form action="https://themesbrand.com/velzon/html/modern/index.html">

                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Username</label>
                                            <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                        </div>

                                        <div className="mb-3">
                                            <div className="float-end">
                                                <a href="auth-pass-reset-basic.html" className="text-muted">Forgot password?</a>
                                            </div>
                                            <label className="form-label" htmlFor="password-input">Password</label>
                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                                <input type="password" className="form-control pe-5 password-input" placeholder="Enter password" id="password-input" />
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
                                    </form>
                                </div>
                            </div>
                            {/* <!-- end card body --> */}
                        </div>
                        {/* <!-- end card --> */}

                        <div className="mt-4 text-center">
                            <p className="mb-0">Don't have an account ? <NavLink to="/register" className="fw-semibold text-primary text-decoration-underline"> Signup </NavLink> </p>
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

export default Login