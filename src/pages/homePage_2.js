import React from 'react'
import Header from '../component/Header/header'
import Hero_section_2 from '../component/Hero/hero_section_2'
import JoinEvent from '../component/Event/joinEvent'
import AboutEvent_2 from '../component/About/aboutEvent_2'
import Meet_our_speaker_2 from '../component/Speaker/meet_our_speaker_2'
import Services_counter from '../component/Services/services_counter'
import Event_schedule_2 from '../component/Event/event_schedule_2'
import PricingSectionHalf from '../component/Pricing/pricingSectionHalf'
import Sponsor from '../component/Sponsor/sponsor';
import Blog from '../component/Blog/blog'
import Footer from '../component/Footer/footer'


function homePage_2() {
  return (
    <div>



      <Header />
      <Hero_section_2 />
      <JoinEvent />
      <AboutEvent_2 />
      <Meet_our_speaker_2 />
      <Services_counter />
      <Event_schedule_2 />
      <PricingSectionHalf />
      <Sponsor />
      <Blog />
      <Footer />


    </div>
  )
}

export default homePage_2