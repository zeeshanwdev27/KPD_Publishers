import React from 'react'
import HeroSection from './HeroSection.jsx'
import Categories from './Categories.jsx'
import Portfolio from '../../components/Portfolio.jsx'
import About from './About.jsx'
import BookPublishingExperts from './BookPublishingExperts.jsx'
// import OurPricing from './OurPricing.jsx'
import WhatPeopleSay from './WhatPeopleSay.jsx'
import ContactForm from './ContactForm.jsx'

function Home() {
  return (
    <>
    <HeroSection title={'Book Publishers in USA - A BestSellers Awaits.'} description={'As experts in book writing, publishing, and marketing, KDP Publishers is your one-stop shop for all your book publishing services needs. We offer end-to-end solutions that will help you transform your manuscript into a bestseller, leaving a lasting impact on your readers. With personalized pricing packages and discount bundles you can get the best of what you desire!'}/>
    <Categories/>
    <Portfolio title='Book Categories'/>
    <About/>
    <BookPublishingExperts/>
    {/* <OurPricing/> */}
    <WhatPeopleSay/>
    <ContactForm/>
    </>
  )
}

export default Home
