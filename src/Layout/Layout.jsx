import React, { Suspense } from 'react'
import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar/Navbar.jsx'
import ScrollToTop from '../ScrollToTop/ScrollToTop.jsx'
import Footer from '../components/Footer/Footer.jsx'


function Layout() {

  
  return (
    <>
    <ScrollToTop/>

    <Navbar/>
    
    <div className='min-h-screen pt-20'>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        <Outlet/>
        </Suspense>
    </div>

    <Footer/>
    </>
  )
}

export default Layout