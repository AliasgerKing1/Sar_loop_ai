import React from 'react'

const AuthHeader = () => {
  return (
    <>
               <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center mt-sm-5 mb-4 text-white-50">
                            <div>
                                <a href="index.html" className="d-inline-block auth-logo">
                                    <img src="assets/images/logo-light.png" alt="" height="20" />
                                </a>
                            </div>
                            <p className="mt-3 fs-15 fw-medium">Loop Ai - Image to Code</p>
                        </div>
                    </div>
                </div>
                                {/* <!-- end row --> */}
    </>
  )
}

export default AuthHeader