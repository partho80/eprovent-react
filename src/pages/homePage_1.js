import React from 'react'
import Header from '../component/Header/header'
import Hero_section from '../component/Hero/hero_section'
import About_event from '../component/About/about_event'
import Meet_our_speaker from '../component/Speaker/meet_our_speaker'
import Pricing from '../component/Pricing/pricing'
import Event_schedule from '../component/Event/event_schedule';
import Services_counter from '../component/Services/services_counter';
import Memory from '../component/Memory/memory';
import Sponsor from '../component/Sponsor/sponsor';
import Blog from '../component/Blog/blog';
import Footer from '../component/Footer/footer'

function homePage_1() {
  return (
    <div>
      <Header />
      <Hero_section />
      <About_event />
      <Meet_our_speaker />
      <Pricing />
      <Event_schedule />
      <Services_counter />
      <Memory />
      <Sponsor />
      <Blog />
      <Footer />
    </div>
  )
}

export default homePage_1