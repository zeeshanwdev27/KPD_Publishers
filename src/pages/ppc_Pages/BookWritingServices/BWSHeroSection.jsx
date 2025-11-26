import React from 'react'
import { Link } from "react-router";
import Swal from "sweetalert2";

function HeroSection({title, description}) {
  return (
    <div className="h-auto min-h-[80vh] mx-auto py-20 md:py-30 lg:pt-25 px-4 sm:px-6 md:px-8 lg:px-50 gap-8 lg:gap-50 text-white w-full flex flex-col lg:flex-row bg-[url('/PPC_Pages/Marketing/herobg.png')] bg-cover bg-no-repeat overflow-hidden">

      {/* Left Side */}
     <div className='flex flex-col gap-6 md:gap-8 w-full lg:max-w-2xl '>

      <div className="relative p-3 rounded-4xl bg-white/75 w-full max-w-90 md:max-w-100 flex items-center mx-auto md:mx-0">
        <div className="absolute -left-3 p-3 md:p-3 px-4 md:px-5 rounded-4xl bg-[#FF9631] text-white text-xs md:text-sm font-bold text-center z-10">
          HOT PROMO
        </div>
        <p className="text-xs md:text-sm text-black flex items-center font-bold flex-1 ml-25 md:ml-30">
          Discount 60% Special World Book Day
        </p>
      </div>

      <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center lg:text-left'>{title}</h1>

      <p className='text-sm lg:text-lg font-medium w-full max-w-md lg:max-w-xl text-center lg:text-left mx-auto lg:mx-0'>{description}</p>

      <div className='flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4'>
        <img src="/PPC_Pages/Marketing/axiom.png" alt="axiom" className='w-12 h-12 md:w-15 md:h-15' />
        <img src="/PPC_Pages/Marketing/finalist.png" alt="finalist" className='w-12 h-12 md:w-15 md:h-15' />
        <img src="/PPC_Pages/Marketing/global.png" alt="global" className='w-12 h-12 md:w-15 md:h-15' />
        <img src="/PPC_Pages/Marketing/gold.png" alt="gold" className='w-12 h-12 md:w-15 md:h-15' />
        <img src="/PPC_Pages/Marketing/illum.png" alt="illum" className='w-12 h-12 md:w-15 md:h-15' />
        <img src="/PPC_Pages/Marketing/moon.png" alt="moon" className='w-12 h-12 md:w-15 md:h-15' />
      </div>

      {/* Call To Actions */}
      <div className='flex flex-col sm:flex-row gap-3 md:gap-5 justify-center lg:justify-start'>
        <button className='bg-linear-to-b from-white to-[#E4D8CA] text-black p-3 px-5 rounded-md font-bold cursor-pointer hover:opacity-80 transition'  
        onClick={() => {
          if (window.LiveChatWidget?.call) {
            window.LiveChatWidget.call("maximize");
          }
          }}>Chat With Us
          </button>
        <Link to={'/contact-us/'} className='bg-[#FF9631] p-3 px-5 rounded-md text-white font-bold cursor-pointer hover:bg-[#FF9631]/70 transition text-center'>Get Free Consultation</Link>
      </div>

     </div>



     {/* Right Side */}
     <div className='relative flex flex-col gap-6 md:gap-10 py-8 md:py-10 border-4 md:border-5 border-[#FF9631] rounded-xl px-6 md:px-10 h-auto md:h-[60vh] w-full max-w-md lg:max-w-lg  lg:mx-0 bg-white text-black order-1 '>

     <img src="/PPC_Pages/Marketing/discount.png" alt="discountlogo" className='absolute w-30 h-18 md:w-40 md:h-25 -top-8 md:-top-10 -right-3 md:-right-10' />

      <div className='flex flex-col gap-2'>
          <h1 className='text-2xl md:text-3xl font-bold text-center'>Request A <span className='text-[#FF9631]'>Quote</span></h1>
          <p className='text-sm md:text-md text-center'>We don't just Built sites. We built Brand Experience</p>
      </div>

      <form className='flex flex-col gap-4 md:gap-5'
          onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
      
                  try {
                    const response = await fetch(
                      "https://kdppublications.com/sendmail.php",
                      {
                        method: "POST",
                        body: formData,
                      }
                    );
      
                    const result = await response.text();
      
                    if (result.includes("success")) {
                      Swal.fire({
                        icon: "success",
                        title: "Message Send!",
                        text: "🎉 Thank you! Message Send Successfully.",
                        confirmButtonColor: "#FBBF24",
                      });
                      e.target.reset();
                    } else if (result.includes("invalid_email")) {
                      Swal.fire({
                        icon: "warning",
                        title: "Invalid Email",
                        text: "⚠️ Please enter a valid email address.",
                        confirmButtonColor: "#FBBF24",
                      });
                      e.target.reset();
                    } else {
                      Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "❌ Something went wrong. Please try again later.",
                        confirmButtonColor: "#FBBF24",
                      });
                      e.target.reset();
                    }
                  } catch (error) {
                    Swal.fire({
                      icon: "error",
                      title: "Network Error",
                      text: "🚨 Please check your connection and try again.",
                      confirmButtonColor: "#FBBF24",
                    });
                    console.error(error);
                    e.target.reset();
                  }
          }} >
        <div className='flex flex-col gap-4 md:gap-5'>
        <input type="text" name='fullname' required placeholder='Full Name*' className='border-b border-[#FF9631] p-2 md:p-1 focus:outline-none focus:border-b-2 focus:border-[#ff7a00] focus:ring-0' />
        <input type="email" name='email' required placeholder='Email Address*' className='border-b border-[#FF9631] p-2 md:p-1 focus:outline-none focus:border-b-2 focus:border-[#ff7a00] focus:ring-0' />
        <input type="number" name='phonenumber' required placeholder='Phone Number*' className='border-b border-[#FF9631] p-2 md:p-1 focus:outline-none focus:border-b-2 focus:border-[#ff7a00] focus:ring-0' />
        <input type="text" name='message' placeholder='Write us a message' className='border-b border-[#FF9631] p-2 md:p-1 focus:outline-none focus:border-b-2 focus:border-[#ff7a00] focus:ring-0' />
        </div>

        <p className='text-xs md:text-sm'>Disclaimer: You agree to receive messages from KDP Publications. This includes SMS messages for appointment scheduling, reminders, and billing. Message frequency may vary. Text STOP to opt out. See our Privacy Policy and Terms and Conditions.</p>

        <button type='submit' className='p-3 md:p-4 bg-[#FF9631] text-white rounded-md cursor-pointer hover:bg-[#FF9631]/80'>Get A Quote</button>
      </form>

     </div>

    </div>
  )
}

export default HeroSection