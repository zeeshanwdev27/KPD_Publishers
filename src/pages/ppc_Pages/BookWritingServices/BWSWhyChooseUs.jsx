import React from 'react'

export default function BWSAbout() {
  return (
    <div className='h-auto min-h-[80vh] py-20 md:py-30 px-6 sm:px-8 md:px-20 lg:px-40 flex flex-col gap-12 md:gap-20'>

        <div className='flex flex-col lg:flex-row gap-10 lg:gap-30 justify-center mx-auto'>
            {/* images */}
            <img src="/PPC_Pages/Marketing/WhyChooseUs/childimg.png" alt="childimg" className='w-full max-w-md lg:w-180 lg:h-100 mx-auto lg:mx-0' />

            <div className='flex flex-col w-full mt-0 lg:mt-10 lg:gap-10'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left'>Why Choose <span className='text-[#FF9631]'>KDP Publications</span><br className='hidden lg:block' /> as Your Book Writing & <br className='hidden lg:block' /> <span className='text-[#FF9631]'>Publishing Partner?</span></h1>
                <p className='text-sm font-medium w-full max-w-3xl mt-4 lg:mt-0 text-center lg:text-left mx-auto lg:mx-0'>At KDP Publications, we offer everything you need to turn your idea into a professionally published book—from writing and editing to complete publishing support. Don't let your manuscript sit unfinished or unnoticed. Partner with one of the most trusted book publishing teams and let us bring your story to life.We are dedicated to helping authors publish high-quality books that stand out in the market. When you work with us, you benefit from expert guidance, creative support, and a smooth, hassle-free publishing experience.</p>
            </div>
        </div>

        <div className='flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-10'>

            <div className='border-2 border-[#FF9631] p-4 flex flex-col gap-3 w-full sm:max-w-xs rounded-2xl'>
                <img src="/PPC_Pages/Marketing/WhyChooseUs/Value.png" alt="Value_Logo" className='w-12 h-10 md:w-15 md:h-12'/>
                <h1 className='text-lg md:text-xl font-bold'>Quality Work</h1>
                <p className='text-sm'>We focus on delivering professionally written and perfectly formatted content. Our KDP writing and publishing experts ensure every book meets industry standards and captivates readers.</p>
            </div>

            <div className='border-2 border-[#FF9631] p-4 flex flex-col gap-3 w-full sm:max-w-xs rounded-2xl'>
                <img src="/PPC_Pages/Marketing/WhyChooseUs/Time.png" alt="Time_Logo" className='w-12 h-10 md:w-15 md:h-12'/>
                <h1 className='text-lg md:text-xl font-bold'>Quality Work</h1>
                <p className='text-sm'>We focus on delivering professionally written and perfectly formatted content. Our KDP writing and publishing experts ensure every book meets industry standards and captivates readers.</p>
            </div>

            <div className='border-2 border-[#FF9631] p-4 flex flex-col gap-3 w-full sm:max-w-xs rounded-2xl'>
                <img src="/PPC_Pages/Marketing/WhyChooseUs/Smile.png" alt="Smile_Logo" className='w-12 h-10 md:w-15 md:h-12'/>
                <h1 className='text-lg md:text-xl font-bold'>Quality Work</h1>
                <p className='text-sm'>We focus on delivering professionally written and perfectly formatted content. Our KDP writing and publishing experts ensure every book meets industry standards and captivates readers.</p>
            </div>

            <div className='border-2 border-[#FF9631] p-4 flex flex-col gap-3 w-full sm:max-w-xs rounded-2xl'>
                <img src="/PPC_Pages/Marketing/WhyChooseUs/Support.png" alt="Support_Logo" className='w-12 h-10 md:w-15 md:h-12'/>
                <h1 className='text-lg md:text-xl font-bold'>Quality Work</h1>
                <p className='text-sm'>We focus on delivering professionally written and perfectly formatted content. Our KDP writing and publishing experts ensure every book meets industry standards and captivates readers.</p>
            </div>

        </div>
      
    </div>
  )
}