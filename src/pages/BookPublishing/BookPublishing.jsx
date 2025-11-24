import React from 'react'
import HeroSection from '../Home/HeroSection.jsx'
import AboutPublishing from './AboutPublishing.jsx'
import PublishingStrategies from './PublishingStrategies.jsx'
import PublishingProcess from './PublishingProcess.jsx'
import ContactForm from '../Home/ContactForm.jsx'
import Portfolio from '../../components/Portfolio.jsx'


function BookPublishing() {
  return (
    <>
    <HeroSection title={"Share Your Book with Readers Around the World Through Our Premier Publishing Services"} description={"Your book is ready to be discovered, but you’re not sure how to publish it or where to begin. That’s exactly where KDP Publishers steps in. We help your manuscript reach the right readers with dedication, industry insight, and seamless execution. Our team of skilled publishing professionals ensures that your book is launched quickly, efficiently, and with maximum care."}/>
    <AboutPublishing/>
    <PublishingStrategies/>
    <Portfolio title={"Our Recent Portfolio"} description={"Our results speak for themselves. We take pride in offering unmatched creativity, remarkable design, and customized publishing craftsmanship."}/>
    <PublishingProcess/>
    <ContactForm/>
      
    </>
  )
}

export default BookPublishing
