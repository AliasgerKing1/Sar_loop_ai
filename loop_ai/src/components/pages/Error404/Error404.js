import React from 'react'
import { NavLink } from 'react-router-dom'

import Footer from '../../../shared/Footer/Footer'
const Error404 = () => {
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
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center pt-4">
                            <div className="">
                                <img src="/assets/images/error.svg" alt="" className="error-basic-img move-animation" />
                            </div>
                            <div className="mt-n4">
                                <h1 className="display-1 fw-medium">404</h1>
                                <h3 className="text-uppercase">Sorry, Page not Found 😭</h3>
                                <p className="text-muted mb-4">The page you are looking for not available!</p>
                                <NavLink to="/auth/home" className="btn btn-success"><i className="mdi mdi-home me-1"></i>Back to home</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end row --> */}

            </div>
            {/* <!-- end container --> */}
        </div>
        {/* <!-- end auth page content --> */}

        {/* <!-- footer --> */}
        <Footer/>
        {/* <!-- end Footer --> */}

    </div>
    {/* <!-- end auth-page-wrapper --> */}
    </>
  )
}

export default Error404