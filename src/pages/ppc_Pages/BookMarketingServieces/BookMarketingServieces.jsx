import React from 'react'
import BWSHeroSection from '../BookWritingServices/BWSHeroSection.jsx'
import BWSWhyChooseUs from '../BookWritingServices/BWSWhyChooseUs.jsx'
import BWSAbout from '../BookWritingServices//BWSAbout.jsx'
import BWSPortfolio from '../BookWritingServices//BWSPortfolio.jsx'
import BWSStrategies from '../BookWritingServices//BWSStrategies.jsx'
import WhatPeopleSay from '../../Home/WhatPeopleSay.jsx'
import ContactForm from '../../Home/ContactForm.jsx'

function BookMarketingServieces() {
  return (
    <>
    <BWSHeroSection title={<>Professional Book <br /> Marketing Services!</>} description={"Our book marketing service is dedicated to helping authors turn their published work into a widely recognized success. Are you one of those authors dreaming of reaching more readers? Allow us to transform your book’s potential into real-world visibility with the expertise of our professional book marketers! Our book promotion and marketing services aren’t limited to any genre or platform, and we strive to cater to your specific goals."}/>
    <BWSWhyChooseUs/>
    <BWSAbout/>
    <BWSPortfolio/>
    <BWSStrategies/>
    <WhatPeopleSay/>
    <ContactForm/>
    </>
  )
}

export default BookMarketingServieces
