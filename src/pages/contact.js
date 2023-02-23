import React from 'react'
import Header from '../component/Header/header'
import Footer from '../component/Footer/footer'
import Contact_header from '../component/Contact/contact_header'
import Contact_body from '../component/Contact/contact_body'

function contact() {
  return (
    <div>
      <Header />
      <Contact_header />
      <Contact_body />

      <Footer />
    </div>
  )
}

export default contact