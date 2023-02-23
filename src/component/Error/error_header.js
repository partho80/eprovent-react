import React from 'react'
import { Link } from 'react-router-dom'


function error_header() {
  return (
      <div>
          <div className="top-banner" style={{ backgroundImage: `url('assets/img/banner.jpg')`}}>
              <div className="container">
                  <div className="row">
                      <div className="banner-title">
                          <h2>Page Not Found</h2>
                          <div className="banner-breadcrumb">
                              <nav aria-label="breadcrumb">
                                  <ol className="breadcrumb">
                                      <li className="breadcrumb-item"><Link to='#'>Home</Link></li>
                                      <li className="breadcrumb-item active" aria-current="page">Page Not Found</li>
                                  </ol>
                              </nav>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="overlay"></div>
          </div>
    </div>
  )
}

export default error_header