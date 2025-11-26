import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./Layout/Layout.jsx"

const Home = React.lazy(()=> import('./pages/Home/Home.jsx'))
// const OurPlans = React.lazy(()=> import('./pages/OurPlans/OurPlans.jsx'))
const Testimonials = React.lazy(()=> import('./pages/Testimonials/Testimonials.jsx'))
const AboutUs = React.lazy(()=> import('./pages/AboutUs/AboutUs.jsx'))
const ContactUs = React.lazy(()=> import('./pages/ContactUs/ContactUs.jsx'))
const BookMarketing = React.lazy(()=> import('./pages/BookMarketing/BookMarketing.jsx'))
const BookWriting = React.lazy(()=> import('./pages/BookWriting/BookWriting.jsx'))
const BookPublishing = React.lazy(()=> import('./pages/BookPublishing/BookPublishing.jsx'))
const PrivacyPolicy = React.lazy(()=> import('./pages/PrivacyPolicy/PrivacyPolicy.jsx'))
const TermsAndConditions = React.lazy(()=> import('./pages/TermsAndConditions/TermsAndConditions.jsx'))



// PPC Pages
const BookWritingServices = React.lazy(()=> import('./pages/ppc_Pages/BookWritingServices/BookWritingServices.jsx'))
const BookMarketingServieces = React.lazy(()=> import('./pages/ppc_Pages/BookMarketingServieces/BookMarketingServieces.jsx'))
const BookPublishingServices = React.lazy(()=> import('./pages/ppc_Pages/BookPublishingServices/BookPublishingServices.jsx'))




const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
        {/* <Route path="/ourplans" element={<OurPlans />} /> */}
        <Route path="/faqs" element={<Testimonials />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/book-marketing-services" element={<BookMarketing />} />
        <Route path="/book-writing-services" element={<BookWriting />} />
        <Route path="/book-publishing-services" element={<BookPublishing />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />


        <Route path="/book-writing" element={<BookWritingServices />} />
        <Route path="/book-marketing" element={<BookMarketingServieces />} />
        <Route path="/book-publishing" element={<BookPublishingServices />} />


      </Route>
    </>
  )
)

export default App