import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./Layout/Layout.jsx"

const Home = React.lazy(()=> import('./pages/Home/Home.jsx'))
const OurPlans = React.lazy(()=> import('./pages/OurPlans/OurPlans.jsx'))
const Testimonials = React.lazy(()=> import('./pages/Testimonials/Testimonials.jsx'))
const AboutUs = React.lazy(()=> import('./pages/AboutUs/AboutUs.jsx'))
const ContactUs = React.lazy(()=> import('./pages/ContactUs/ContactUs.jsx'))
const BookMarketing = React.lazy(()=> import('./pages/BookMarketing/BookMarketing.jsx'))
const BookWriting = React.lazy(()=> import('./pages/BookWriting/BookWriting.jsx'))
const BookPublishing = React.lazy(()=> import('./pages/BookPublishing/BookPublishing.jsx'))




const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
        <Route path="/ourplans" element={<OurPlans />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/book-marketing" element={<BookMarketing />} />
        <Route path="/book-writing" element={<BookWriting />} />
        <Route path="/book-publishing" element={<BookPublishing />} />
      </Route>
    </>
  )
)

export default App