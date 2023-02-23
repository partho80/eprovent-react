import React from 'react'
import Header from '../component/Header/header'
import AboutUs_Header from '../component/About/aboutUs_Header'
import About_event from '../component/About/about_event'
import Meet_our_speaker_2 from '../component/Speaker/meet_our_speaker_2'
import Memory from '../component/Memory/memory'
import SponsoreBlock from '../component/Sponsor/sponsoreBlock'
import Footer from '../component/Footer/footer'

function aboutUs() {
  return (
    <div>
      <Header />
      <AboutUs_Header />
      <About_event />
      <Meet_our_speaker_2 />
      <Memory />
      <SponsoreBlock />
      <Footer />

    </div>
  )
}

export default aboutUs