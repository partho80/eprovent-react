import React from 'react'

function blog() {
  return (
      <div><section id="home-blog" className="home-blog-section spb-80">
          <div className="home-blog-area">
              <div className="container">
                  {/* <!-- Section Top Title --> */}
                  <div className="section-top-box text-center" data-aos="fade-up">
                      <h2 className="st-title">Latest News or Blog</h2>
                      <p className="st-desc">It is a long established fact that a reader will be distracted by the readable
                          content of a
                          page when looking at its layout. The point of using is the will be distracted.</p>
                  </div>
                  {/* <!-- Section Top Title --> */}
                  <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
                          <div className="single-home-blog">
                              <div className="shb-top">
                                  <img src="assets/img/home-blog-1.jpg" alt="" className="shb-img"/>
                              </div>
                              <div className="shb-bottom text-center">
                                  <ul className="social-collections shb-update flex-all">
                                      <li><span className="su-span"><i className="fa-light fa-calendar"></i></span> 01 Feb 22</li>
                                      <li> | </li>
                                      <li><span className="su-span"><i className="fa-light fa-comments"></i></span> 578</li>
                                  </ul>
                                  <a href="blog-details.html" className="sb-name">600 people come to
                                      the conference</a>
                                  <p className="sb-tag">Technology</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
                          <div className="single-home-blog">
                              <div className="shb-top">
                                  <img src="assets/img/home-blog-2.jpg" alt="" className="shb-img"/>
                              </div>
                              <div className="shb-bottom text-center">
                                  <ul className="social-collections shb-update flex-all">
                                      <li><span className="su-span"><i className="fa-light fa-calendar"></i></span> 01 Feb 22</li>
                                      <li> | </li>
                                      <li><span className="su-span"><i className="fa-light fa-comments"></i></span> 578</li>
                                  </ul>
                                  <a href="blog-details.html" className="sb-name">700 people come to
                                      the conference</a>
                                  <p className="sb-tag">Digital marketing</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
                          <div className="single-home-blog">
                              <div className="shb-top">
                                  <img src="assets/img/home-blog-3.jpg" alt="" className="shb-img"/>
                              </div>
                              <div className="shb-bottom text-center">
                                  <ul className="social-collections shb-update flex-all">
                                      <li><span className="su-span"><i className="fa-light fa-calendar"></i></span> 01 Feb 22</li>
                                      <li> | </li>
                                      <li><span className="su-span"><i className="fa-light fa-comments"></i></span> 578</li>
                                  </ul>
                                  <a href="blog-details.html" className="sb-name">900 people come to
                                      the conference</a>
                                  <p className="sb-tag">Networking</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="spb-btn-box mx-auto text-center" data-aos="fade-up">
                      <a href="blog.html" className="btn btn-custom btn-custom-primary spb-btn"><span
                          className="mr-2 plus-icon"><i class="fa fa-plus" aria-hidden="true"></i></span> More News</a>
                  </div>
              </div>
          </div>
      </section></div>
  )
}

export default blog