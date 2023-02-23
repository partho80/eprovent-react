import React from 'react'

function sponsoreBlock() {
  return (
      <div>
          <section id="sponsor" className="sponsor spb-80">
              <div className="sponsor-area-section">
                  <div className="container">
                      
                      <div className="section-top-box text-center" data-aos="fade-up">
                          <p className="sponsor-top-text mb-2">WHO HELPS US</p>
                          <h2 className="st-title fancy-underline">Our Special Sponsors</h2>
                      </div>
                      
                      <div className="row">
                          <div className="sponsor-wrapper">
                              <div className="sponsor-img-box" data-aos="fade-up">
                                  <img src="assets/img/sponsor-1.png" alt="" className="single-sponsor-img"/>
                              </div>
                              <div className="sponsor-img-box" data-aos="fade-up">
                                  <img src="assets/img/sponsor-2.png" alt="" className="single-sponsor-img"/>
                              </div>
                              <div className="sponsor-img-box" data-aos="fade-up">
                                  <img src="assets/img/sponsor-3.png" alt="" className="single-sponsor-img"/>
                              </div>
                              <div className="sponsor-img-box" data-aos="fade-up">
                                  <img src="assets/img/sponsor-4.png" alt="" className="single-sponsor-img"/>
                              </div>
                              <div className="sponsor-img-box" data-aos="fade-up">
                                  <img src="assets/img/sponsor-5.png" alt="" className="single-sponsor-img"/>
                              </div>
                              <div className="sponsor-img-box" data-aos="fade-up">
                                  <img src="assets/img/sponsor-6.png" alt="" className="single-sponsor-img"/>
                              </div>
                              <div className="sponsor-img-box" data-aos="fade-up">
                                  <img src="assets/img/sponsor-7.png" alt="" className="single-sponsor-img"/>
                              </div>
                          </div>

                          <div className="spb-btn-box mx-auto text-center" data-aos="fade-up">
                              <a href="blog.html" className="btn btn-custom btn-custom-primary spb-btn">
                                  <span className="mr-2"><i className="fa-solid fa-wallet"></i></span> Become a Sponsor</a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </div>
  )
}

export default sponsoreBlock