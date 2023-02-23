import React from 'react'

function contact_body() {
  return (
      <div><section id="contact-us" className="contact-us sp-80">
          <div className="contact-us-area">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
                          <div className="contact-card">
                              <p className="contact-card__icon"><i className="fa-solid fa-location-dot"></i></p>
                              <h4 className="card-title">Location</h4>
                              <p className="contact-card__text">255 Brooklyn, Sheet Name</p>
                              <p className="contact-card__text">New York, USA</p>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
                          <div className="contact-card">
                              <p className="contact-card__icon"><i className="fa-solid fa-globe"></i></p>
                              <h4 className="card-title">Email Now</h4>
                              <p className="contact-card__text">info@yourmail.com</p>
                              <p className="contact-card__text">www.yourwebsite.com</p>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up">
                          <div className="contact-card">
                              <p className="contact-card__icon"><i className="fa-solid fa-phone"></i></p>
                              <h4 className="card-title">Call Now</h4>
                              <p className="contact-card__text">(000) 123 456 987</p>
                              <p className="contact-card__text">(000) 122 457 999</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
          {/* <!-- Contact Us Section End -->

          <!-- Google Map Start --> */}
          <div id="googleMap" className="google-map">
              <div className="google-map-section" data-aos="fade-up">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58391.92348905992!2d90.33451974553982!3d23.83654255462999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3755c14a3366b005%3A0x901b07016468944c!2sMirpur%20DOHS%2C%20Dhaka!3m2!1d23.836468!2d90.36953919999999!5e0!3m2!1sen!2sbd!4v1642575818911!5m2!1sen!2sbd"
                      allowFullScreen="" loading="lazy"></iframe>
              </div>
          </div>
          {/* <!-- Google Map End -->

          <!-- Contact Us Form Section Start --> */}
          <section id="contact-us-form" className="contact-us-form sp-80">
              <div className="conatct-us-form-area">
                  <div className="container">
                      {/* <!-- Section Top Title --> */}
                      <div className="section-top-box text-center" data-aos="fade-up">
                          <h2 className="st-title">Get In Touch</h2>
                      </div>
                      {/* <!-- Section Top Title --> */}
                      <div className="row">
                          <div className="col-md-6 offset-md-3">
                              <div className="home-contact" data-aos="fade-up">
                                  <h4 className="hc-heading mb-4">Need help? Contact Us</h4>
                                  <form className="post-form contact-form cu-page-form home-contact-form" method="post" action="php/mail.php" id="cf">
                                      <div className="form-group">
                                          <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Your Full Name"/>
                                      </div>
                                      <div className="form-group">
                                          <input type="email" className="form-control" id="email" name="email" placeholder="Email"/>
                                      </div>
                                      <div className="form-group">
                                          <input type="text" className="form-control" id="sub-input" placeholder="Phone Number"/>
                                      </div>
                                      <div className="form-group">
                                          <textarea className="form-control" id="msg" name="msg" rows="3"
                                              placeholder="Write your message here..."></textarea>
                                      </div>
                                      <button type="submit" id="submit" name="submit" className="cf-btn btn btn-custom btn-custom-primary">Send
                                          Message</button>
                                      <div className="cf-msg"></div>
                                  </form>




                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section></div>
  )
}

export default contact_body