import React from 'react'
import BWSHeroSection from '../BookWritingServices/BWSHeroSection.jsx'
import BWSWhyChooseUs from '../BookWritingServices/BWSWhyChooseUs.jsx'
import BWSAbout from '../BookWritingServices//BWSAbout.jsx'
import BWSPortfolio from '../BookWritingServices//BWSPortfolio.jsx'
import BWSStrategies from '../BookWritingServices//BWSStrategies.jsx'
import WhatPeopleSay from '../../Home/WhatPeopleSay.jsx'
import ContactForm from '../../Home/ContactForm.jsx'

function BookPublishingServices() {
  return (
    <>
    <BWSHeroSection title={<>Professional Book <br /> Publishing Services!</>} description={"Our book publishing service is dedicated to helping authors turn their completed manuscripts into beautifully published books. Are you one of the dreamers ready to see your story in print and online stores? Allow us to transform your manuscript into a professionally published book with the expertise of our experienced publishing team! Our book publishing services aren’t limited by genre, format, or style, and we work hard to meet your publishing needs."}/>
    <BWSWhyChooseUs/>
    <BWSAbout/>
    <BWSPortfolio/>
    <BWSStrategies/>
    <WhatPeopleSay/>
    <ContactForm/>
    </>
  )
}

export default BookPublishingServices
