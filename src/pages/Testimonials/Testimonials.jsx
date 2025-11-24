import React from 'react'
import Header from '../../components/Header.jsx'
import WhatPeopleSay from '../Home/WhatPeopleSay.jsx'
import ContactForm from '../Home/ContactForm.jsx'
import FAQS from './FAQS.jsx'

function Testimonials() {
  return (
    <>
    <Header title={"FAQ'S"} description={""}/>
    <FAQS/>
    <WhatPeopleSay/>
    <ContactForm/>

      
    </>
  )
}

export default Testimonials
