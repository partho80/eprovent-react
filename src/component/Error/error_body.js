import React from 'react'
import {Link} from 'react-router-dom' 
function error_body() {
  return (
      <div>
          <div id="page-error" className="section-padding-bottom">
              <div className="page-error-section">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-6 offset-md-3">
                              <div className="error-content">
                                  <div className="ec-img">
                                      <img src="assets/img/404-page.gif" alt=""/>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="row mb-5">
                          <div className="back-home-btn mx-auto text-center">
                              <Link to='/' className="btn btn-custom btn-custom-primary error-btn" href="index.html">Back to home</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default error_body