import React from 'react'
import HeroSection from '../Home/HeroSection.jsx'
import AboutMarketing from './AboutMarketing.jsx'
import MarketingStrategies from './MarketingStrategies.jsx'
import MarketingProcess from './MarketingProcess.jsx'
import ContactForm from '../Home/ContactForm.jsx'
import Portfolio from '../../components/Portfolio.jsx'


function BookMarketing() {
  return (
    <>
    <HeroSection title={'Book Marketing Services – Taking Your Book Further Than Ever'} description={'Finishing a manuscript is only the first milestone on your journey toward recognition and commercial success. That’s why we offer a complete range of promotional services designed to boost visibility and connect your book with the readers it deserves. With KDP Publishers’ full-scale book marketing solutions, you can expand your reach and share your words with audiences across the globe.'}/>
    <AboutMarketing/>
    <MarketingStrategies/>
    <Portfolio title={"Our Latest Work"} description={"Browse through a selection of our recent projects showcasing creativity, originality, and professional craftsmanship."}/>
    <MarketingProcess/>
    <ContactForm/>
      
    </>
  )
}

export default BookMarketing
