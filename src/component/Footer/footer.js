import React from 'react'
import { Link } from 'react-router-dom'


function footer() {
  return (
      <div>
          {/* <!-- Seat Booking Section Start --> */}
          <section id="seat-booking" className="seat-booking">
              <div className="seat-booking-area spt-80">
                  <div className="container">
                      <div className="row">
                          <div className="seat-booking-content text-center mt-5">
                              <p className="seat-booking-text" data-aos="fade-up">hurry up!</p>
                              <h2 className="seat-booking-title" data-aos="fade-up">Book your Seat!</h2>
                              <a href="#" className="btn btn-custom btn-custom-primary" data-aos="fade-up"><span className="mr-2"><i
                                  className="fa-solid fa-chair"></i></span> Buy Ticket</a>
                          </div>
                      </div>
                  </div>
                  <div className="seat-booking-overlay"></div>
              </div>
          </section>
          {/* <!-- Seat Booking Section End --> */}

          {/* <!-- Footer Section Start --> */}
          <footer id="footer" className="footer">
              <div className="footer-area spt-80">
                  <div className="container">
                      <div className="footer-wrapper">
                          <div className="footer-top" data-aos="fade-up">
                              <h2 className="footer-top-title">Want Something Extra?</h2>
                              <div className="footer-subscribe">
                                  <form className="subscribe-form">
                                      <input type="text" placeholder="Email Address"/>
                                          <button type="submit"
                                              className="btn btn-custom btn-custom-primary sub-show">Subscribe</button>
                                          <button type="submit" className="btn btn-custom btn-custom-primary sub-hide"><i
                                              className="fa-solid fa-arrow-right"></i></button>
                                  </form>
                              </div>
                          </div>
                          <div className="main-footer text-center mx-auto">
                              <img src="assets/img/footer-logo.png" alt="" className="footer-logo" data-aos="fade-up"/>
                                  <ul className="footer-social social-collection" data-aos="fade-up">
                                      <li><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a></li>
                                      <li><a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a></li>
                                      <li><a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></li>
                                      <li><a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                      <li><a href="https://dribbble.com/"><i className="fa-brands fa-dribbble"></i></a></li>
                                      <li><a href="https://www.behance.net/"><i className="fa-brands fa-behance"></i></a></li>
                                  </ul>
                                  <ul className="footer-menu-collection" data-aos="fade-up">
                                      <li><Link to="/aboutUs">About us</Link></li>
                                      <li><Link to="/services">Services</Link></li>
                                      <li><Link to="#">Speakers</Link></li>
                                      <li><Link href="#">Event</Link></li>
                                      <li><Link href="#">Schedule</Link></li>
                                      <li><Link to="/blog">Blog</Link></li>
                                  </ul>
                                  <hr className="footer-hr"/>
                                      <div className="footer-copyright">
                                          <p className="copyright-text">All Rights Reserved &#64;Luminouslabs</p>
                                      </div>
                                  </div>
                          </div>
                      </div>
                  </div>
          </footer>
    </div>
  )
}

export default footer