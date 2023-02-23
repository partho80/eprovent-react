import React from 'react'

function pricing_section() {
    return (
        <div>    <section id="pricing" className="pricing spb-80">
            <div className="pricing-area">
                <div className="container">
                    {/* <!-- Section Top Title --> */}
                    <div className="section-top-box text-center" data-aos="fade-up">
                        <h2 className="st-title">Explore Pricing Policies</h2>
                        <p className="st-desc">It is a long established fact that a reader will be distracted by the readable
                            content of a
                            page when looking at its layout. The point of using is the will be distracted.</p>
                    </div>
                    {/* <!-- Section Top Title --> */}
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="single-pricing" data-aos="fade-up">
                                <div className="pricing-content-wrapper">
                                    <div className="single-pricing-top text-center">
                                        <p className="spt-text">Single day pass</p>
                                        <h2 className="spt-price">$150</h2>
                                    </div>
                                    <div className="single-pricing-bottom">
                                        <ul className="sp-det-collection">
                                            <li>One catered lunch</li>
                                            <li>Afternoon snacks</li>
                                            <li>Fun swag</li>
                                            <li>Entrance Afterparty</li>
                                        </ul>
                                        <a href="#" className="btn btn-custom btn-custom-primary-reverse"><span className="mr-2"><i
                                            className="fa-solid fa-chair"></i></span> Purchase Ticket</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="single-pricing" data-aos="fade-up">
                                <div className="pricing-content-wrapper">
                                    <div className="single-pricing-top text-center">
                                        <p className="spt-text">Single day pass</p>
                                        <h2 className="spt-price">$250</h2>
                                    </div>
                                    <div className="single-pricing-bottom">
                                        <ul className="sp-det-collection">
                                            <li>One catered lunch</li>
                                            <li>Afternoon snacks</li>
                                            <li>Fun swag</li>
                                            <li>Entrance Afterparty</li>
                                        </ul>
                                        <a href="#" className="btn btn-custom btn-custom-primary-reverse"><span className="mr-2"><i
                                            className="fa-solid fa-chair"></i></span> Purchase Ticket</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="single-pricing" data-aos="fade-up">
                                <div className="pricing-content-wrapper">
                                    <div className="single-pricing-top text-center">
                                        <p className="spt-text">Single day pass</p>
                                        <h2 className="spt-price">$350</h2>
                                    </div>
                                    <div className="single-pricing-bottom">
                                        <ul className="sp-det-collection">
                                            <li>One catered lunch</li>
                                            <li>Afternoon snacks</li>
                                            <li>Fun swag</li>
                                            <li>Entrance Afterparty</li>
                                        </ul>
                                        <a href="#" className="btn btn-custom btn-custom-primary-reverse"><span className="mr-2"><i
                                            className="fa-solid fa-chair"></i></span> Purchase Ticket</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-down-text" data-aos="fade-up">
                        <p>NTB: All prices exclude 25% VAT.</p>
                    </div>
                </div>
            </div>
        </section></div>
    )
}

export default pricing_section