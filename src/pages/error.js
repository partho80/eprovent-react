import React from 'react'
import Header from '../component/Header/header'
import Footer from '../component/Footer/footer'
import Error_header from '../component/Error/error_header'
import Error_body from '../component/Error/error_body'


function error() {
  return (
    <div>
      <Header />
      <Error_header />
      <Error_body />
      <Footer />
    </div>
  )
}

export default error