import React from 'react'

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
                    <div className="item-logo">
                        <a href="#"><img src="/assets/media/logo_large.png" alt="logo" /></a>
                    </div>
                    <div className="login-form-wrap">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#login-tab" role="tab" aria-selected="true"><i className="icofont-users-alt-4"></i> Sign In </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#registration-tab" role="tab" aria-selected="false"><i className="icofont-download"></i> Registration</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                                <form>
                            <div className="tab-pane login-tab fade show active" id="login-tab" role="tabpanel">
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
                                            <label className="form-check-label" for="validationFormCheck2"><a href='#'>Keep me as signed in</a></label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" name="login-btn" className="submit-btn" value="Login" />
                                    </div>
                            </div>
                                </form>
                            <div className="tab-pane registration-tab fade" id="registration-tab" role="tabpanel">
                                <h3 className="item-title">Sign Up Your Account</h3>
                                <form>
                                    <div className="form-group">
                                        <input type="text" name="fname" className="form-control" placeholder="First Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="lname" className="form-control" placeholder="Last Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control" placeholder="E-mail" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" className="form-control" placeholder="Type Password" />
                                    </div>
                                    <div className="form-group">
                                        <input type="date" name="date" className="form-control" placeholder="Your Birth Day" />
                                    </div>
                                    <div className="form-group">
                                        <select className="select2" name="gender" data-placeholder="Select Gender">
                                            <option value=""></option>
                                            <option value="male">Male</option>
                                            <option value="male">Female</option>
                                            <option value="transgender">Transgender</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-check mb-3">
                                            <input type="checkbox" className="form-check-input" id="validationFormCheck1" />
                                            <label className="form-check-label" for="validationFormCheck1">I accept the <a href="#">Terms and Conditions</a></label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" name="registration" className="submit-btn" value="Complete Registration" />
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
                <input type="search" value="" placeholder="Search here..." />
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