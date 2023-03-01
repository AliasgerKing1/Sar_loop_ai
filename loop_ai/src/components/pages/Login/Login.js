import React from 'react'
import { NavLink } from 'react-router-dom'
const Login = () => {
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
                    {/* <div className="item-logo">
                        <a href="#"><img src="./assets/media/logo_large.png" alt="logo" /></a>
                    </div> */}
                    <div className="login-form-wrap">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <NavLink className="nav-link" data-toggle="tab" to="/" role="tab" aria-selected="true"><i className="icofont-users-alt-4"></i> Sign In </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" data-toggle="tab" to="/register"  role="tab" aria-selected="false"><i className="icofont-download"></i> Registration</NavLink>
                            </li>
                        </ul>
                        <div className="tab-content">
                                <form>
                            <div className="tab-pane login-tab fade show active" role="tabpanel">
                                <h3 className="item-title">Sign Into <span>Your Account</span></h3>
                                <div className="google-signin">
                                    <a href="#"><img src="/assets/media/figure/google-icon.png" alt="Google" />Google Sign in</a>
                                </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="login-email" placeholder="Your E-mail" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" name="login-password" placeholder="Password" />
                                    </div>
                                    <div className="form-group reset-password">
                                        <a href="#">* Reset Password</a>
                                    </div>
                                    <div className="form-group mb-4">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="validationFormCheck2" />
                                            <label className="form-check-label" htmlFor="validationFormCheck2"><a href='#'>Keep me as signed in</a></label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" name="login-btn" className="submit-btn" defualtvalue="Login" />
                                    </div>
                            </div>
                                </form>
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

export default Login