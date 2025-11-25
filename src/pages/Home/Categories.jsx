import React from 'react'
import { Truck, CheckCheck, Smile  } from "lucide-react";


function Categories() {
  return (
    <div id='next-section' className='h-full lg:h-[20vh] mt-10 md:mt-10 lg:mt-0 lg:py-15 px-5 flex flex-col items-center gap-15'>

        <div className='flex flex-col md:flex-row gap-5 lg:gap-10 pt-5'>

            <div className='p-3 md:p-4 lg:p-6 px-15 md:px-5 lg:px-20 justify-center items-center flex bg-amber-500 rounded-xl gap-2 text-white'>
                <Truck className='w-5 h-5'/>
                <p className='text-md font-medium'>Free Worldwide Shipping</p>
            </div>

            <div className='p-3 md:p-4 lg:p-6 px-15 md:px-5 lg:px-20 justify-center items-center flex bg-amber-500 rounded-xl gap-2 text-white'>
                <CheckCheck  className='w-5 h-5'/>
                <p className='text-md font-medium'>Refund Guarantee</p>
            </div>

            <div className='p-3 md:p-4 lg:p-6 px-15 md:px-5 lg:px-20 justify-center items-center flex bg-amber-500 rounded-xl gap-2 text-white'>
                <Smile  className='w-5 h-5'/>
                <p className='md:text-md font-medium'>Happy Customer</p>
            </div>

        </div>
    </div>
  )
}

export default Categories
