import React from 'react'
import HeroSection from '../Home/HeroSection.jsx'
import AboutWriting from './AboutWriting.jsx'
import WritingStrategies from './WritingStrategies.jsx'
import WritingProcess from './WritingProcess.jsx'
import ContactForm from '../Home/ContactForm.jsx'
import Portfolio from '../../components/Portfolio.jsx'


function BookWriting() {
  return (
    <>
    <HeroSection title={'Book Publishing & Editing Services – Your Manuscript Deserves a Professional Finish'} description={'Our expert publishing and editing specialists help refine, enhance, and professionally prepare your manuscript for the marketplace. From structural improvement to polished formatting, we ensure your book reflects excellence, clarity, and authorial confidence. Whether you’re working on fiction, nonfiction, memoir, business literature, or personal stories, we bring out the best in your writing and prepare it for readers, retailers, and publishing platforms.'}/>
    <AboutWriting/>
    <WritingStrategies/>
    <Portfolio title={"Our Recent Portfolio"} description={"Browse through a selection of our recent projects showcasing creativity, originality, and professional craftsmanship."}/>
    <WritingProcess/>
    <ContactForm/>
      
    </>
  )
}

export default BookWriting
