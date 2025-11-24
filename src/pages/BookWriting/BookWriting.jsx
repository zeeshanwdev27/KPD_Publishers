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
    <HeroSection title={'Book Writing Services – Our Nice-Specific Writers Can Do Wonders.'} description={'Our team of skilled writers specializes in various genres and niches to help you share your experiences, ideas, and expertise without any boundaries. From heartwarming romances to spine-tingling thrillers, we have the talent and expertise to craft the perfect story that resonates with you and your target audience. Get the best book writing services today.'}/>
    <AboutWriting/>
    <WritingStrategies/>
    <Portfolio title={"Our Recent Portfolio"} description={"Browse through a selection of our recent projects showcasing creativity, originality, and professional craftsmanship."}/>
    <WritingProcess/>
    <ContactForm/>
      
    </>
  )
}

export default BookWriting
