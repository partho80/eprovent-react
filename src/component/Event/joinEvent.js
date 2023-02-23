import React from 'react'

function joinEvent() {
  return (
      <div>
          <div className="section join-event" id="join-event">
              <div className="join-event-area sp-80">
                  <div className="container">
                      {/* <!-- Section Top Title --> */}
                      <div className="section-top-box text-center" data-aos="fade-up">
                          <h2 className="st-title">Why you should <br/>
                              Join Event</h2>
                      </div>
                      {/* <!-- Section Top Title --> */}
                      <div className="row">
                          <div className="col-lg-4 col-md-6">
                              <div className="single-join-card" data-aos="fade-up">
                                  <p className="join-card-icon"><i className="fa-solid fa-network-wired"></i></p>
                                  <h4 className="join-card-title">Networking</h4>
                                  <p className="join-card-text">Risus in hendrerit gravida rutrum quisque non tellus orci ac.</p>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="single-join-card" data-aos="fade-up">
                                  <p className="join-card-icon"><i className="fa-solid fa-microphone"></i></p>
                                  <h4 className="join-card-title">Great Speakers</h4>
                                  <p className="join-card-text">Risus in hendrerit gravida rutrum quisque non tellus orci ac.</p>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-6">
                              <div className="single-join-card" data-aos="fade-up">
                                  <p className="join-card-icon"><i className="fas fa-gifts"></i></p>
                                  <h4 className="join-card-title">Have Fun</h4>
                                  <p className="join-card-text">Risus in hendrerit gravida rutrum quisque non tellus orci ac.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default joinEvent