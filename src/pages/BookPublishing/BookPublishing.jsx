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
    <HeroSection title={"eBook Publishing Has Never Been Easier. Get Professional Digital Publishing Services"} description={"In today’s expanding digital reading world, eBooks have become one of the most effective ways to reach a global audience. At KDP Publishers, we simplify the publishing journey and transform your manuscript into a professionally formatted and market-ready digital book. Whether you are a first-time author or an established writer, we make the process seamless, guided, and stress-free."}/>
    <AboutPublishing/>
    <PublishingStrategies/>
    <Portfolio title={"Our Recent Portfolio"} description={"Our results speak for themselves. We take pride in offering unmatched creativity, remarkable design, and customized publishing craftsmanship."}/>
    <PublishingProcess/>
    <ContactForm/>
      
    </>
  )
}

export default BookPublishing
