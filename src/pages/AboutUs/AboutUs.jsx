import React from 'react'
import Header from '../../components/Header.jsx'
import About from '../Home/About.jsx'
import ContactForm from '../Home/ContactForm.jsx'
import YouAreTheBoss from './YouAreTheBoss.jsx'

function AboutUs() {
  return (
    <>
    <Header title={'Our Identity'} description={"What Makes Us Different"}/>
    <About/>
    <YouAreTheBoss/>
    <ContactForm/>

      
    </>
  )
}

export default AboutUs
