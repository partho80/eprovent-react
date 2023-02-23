import React from 'react'

function contact_header() {
  return (
      <div>
          <div className="top-banner" style={{ backgroundImage: `url('assets/img/banner.jpg')`}}>
              <div className="container">
                  <div className="row">
                      <div className="banner-title">
                          <h2>Contact</h2>
                          <div className="banner-breadcrumb">
                              <nav aria-label="breadcrumb">
                                  <ol className="breadcrumb">
                                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                                      <li className="breadcrumb-item active" aria-current="page">Contact</li>
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

export default contact_header