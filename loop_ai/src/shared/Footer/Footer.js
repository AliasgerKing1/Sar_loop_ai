import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
  return (
    <>
             {/* <!-- footer --> */}
             <footer className="footer start-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <p className="mb-0 text-muted">Loop_ai &copy; {currentYear}-{nextYear} all rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- end Footer --> */}
    </>
  )
}

export default Footer