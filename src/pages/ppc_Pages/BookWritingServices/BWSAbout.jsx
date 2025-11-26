import React from 'react'
import { CircleCheckBig } from 'lucide-react';
import { Link } from "react-router";

function BWSAbout() {
  return (
    <div className='h-auto min-h-[60vh] py-12 md:py-20 px-6 sm:px-8 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 lg:gap-80 justify-center items-center bg-[#FFF2E5]'>


        {/* Left */}
        <div className='flex flex-col gap-6 md:gap-8 order-2 lg:order-1'>

            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF9631] text-center lg:text-left'>Turn Your Manuscript into a Published <br className='hidden lg:block' /> Bestseller with KDP Publications!</h1>
            <p className='w-full max-w-xl text-sm font-medium text-center lg:text-left'>Are you an aspiring author looking to publish your book professionally? KDP Publications is here to help. Our skilled team of writers, editors, and publishing experts transforms your ideas into polished, market-ready books. With our commitment to quality and creativity, we make your publishing journey smooth, efficient, and successful.</p>


            <ul className='flex flex-col gap-3 md:gap-2'>
                <li className='text-sm md:text-md font-medium flex gap-2 items-start md:items-center'><CircleCheckBig className='w-5 h-5 text-[#FF9631] flex-shrink-0 mt-0.5 md:mt-0' strokeWidth={2.5}/> Our expert team provides complete book writing & publishing support.</li>
                <li className='text-sm md:text-md font-medium flex gap-2 items-start md:items-center'><CircleCheckBig className='w-5 h-5 text-[#FF9631] flex-shrink-0 mt-0.5 md:mt-0' strokeWidth={2.5}/> We help you craft an engaging story that captivates readers from start to finish.</li>
                <li className='text-sm md:text-md font-medium flex gap-2 items-start md:items-center'><CircleCheckBig className='w-5 h-5 text-[#FF9631] flex-shrink-0 mt-0.5 md:mt-0' strokeWidth={2.5}/> With our editorial guidance, you can refine and perfect your manuscript.</li>
                <li className='text-sm md:text-md font-medium flex gap-2 items-start md:items-center'><CircleCheckBig className='w-5 h-5 text-[#FF9631] flex-shrink-0 mt-0.5 md:mt-0' strokeWidth={2.5}/> Enjoy seamless service—from writing to editing to final publishing.</li>
            </ul>


            <div className='flex flex-col sm:flex-row gap-3 md:gap-5 justify-center lg:justify-start'>
                <button className='bg-linear-to-b from-white to-[#E4D8CA] text-black p-3 px-5 rounded-md font-bold cursor-pointer hover:opacity-80 transition'
                  onClick={() => {
                    if (window.LiveChatWidget?.call) {
                      window.LiveChatWidget.call("maximize");
                    }
                  }}
                >Chat With Us</button>
                <Link to={'/contact-us/'} className='bg-[#FF9631] p-3 px-5 rounded-md text-white font-bold cursor-pointer hover:bg-[#FF9631]/70 transition text-center'>Get Free Consultation</Link>
            </div>
        
        </div>


        {/* Right */}
        <img src="/PPC_Pages/Marketing/About/book.png" alt="book-img" className='w-60 h-60 sm:w-80 sm:h-80 lg:w-110 lg:h-110 order-1 lg:order-2' />
      
    </div>
  )
}

export default BWSAbout