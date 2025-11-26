import React from 'react'
import BWSHeroSection from './BWSHeroSection.jsx'
import BWSWhyChooseUs from './BWSWhyChooseUs.jsx'
import BWSAbout from './BWSAbout.jsx'
import BWSPortfolio from './BWSPortfolio.jsx'
import BWSStrategies from './BWSStrategies.jsx'
import WhatPeopleSay from '../../Home/WhatPeopleSay.jsx'
import ContactForm from '../../Home/ContactForm.jsx'



function BookMarketingServices() {
  return (
    <>
    <BWSHeroSection title={<>Professional Book <br /> Writing Services!</>} description={"Our book writing service is dedicated to helping authors turn their dreams into published reality. Are you one of the dreamers? Allow us to transform your dreams into reality with the expertise of our professional book writers! Our Ghost book writing services aren't limited to any genre or style, and we try our best to cater to your needs."}/>
    <BWSWhyChooseUs/>
    <BWSAbout/>
    <BWSPortfolio/>
    <BWSStrategies/>
    <WhatPeopleSay/>
    <ContactForm/>
      
    </>
  )
}

export default BookMarketingServices
