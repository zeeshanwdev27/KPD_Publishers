import React from 'react'
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Dummy testimonials data
const testimonials = [
  {
    id: 1,
    text: "KDP Publishers exceeded my expectations in every way. Their editing quality was outstanding, and their marketing efforts gave my book the visibility it truly deserved. I’m genuinely delighted with the final outcome and highly recommend their services.",
    rating: 5,
    name: "Olivia Harper",
    initials: "OH"
  },
  {
    id: 2,
    text: "KDP Publishers made my dream of becoming a published author come true. They guided me throughout the entire process with helpful feedback and continuous support. Their self-publishing services are perfect for anyone looking to launch their book successfully. ",
    rating: 5,
    name: "Michael Turner",
    initials: "MT"
  },
  {
    id: 3,
    text: "I was thoroughly impressed by the professionalism and expertise at KDP Publishers. Their writing, editing, and design teams worked together seamlessly to create a beautifully crafted book. Their creativity and dedication truly set them apart.",
    rating: 4,
    name: "Sophia Bennett ",
    initials: "SB"
  },
  {
    id: 4,
    text: "My publishing experience with KDP Publishers was completely stress-free. They handled everything—from book layout to marketing strategy—allowing me to focus solely on writing. I’m extremely satisfied and highly recommend them to aspiring authors.",
    rating: 5,
    name: "Daniel Brooks",
    initials: "DB"
  },
  {
    id: 5,
    text: "KDP Publishers transformed my manuscript into a polished, captivating book. Their marketing team helped me reach a wider audience and elevate my author brand. For writers looking to take their book to the next level, this agency is unmatched. ",
    rating: 5,
    name: "Ava Mitchell",
    initials: "LW"
  },
    {
    id: 6,
    text: "KDP Publishers provided a complete publishing solution, covering writing, editing, design, and promotion. The entire process was smooth, professional, and perfectly managed. I’m thrilled with the results and look forward to working with them again in the future.",
    rating: 5,
    name: "Ethan Collins",
    initials: "EC"
  }
];

function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? "fill-amber-500 text-amber-500" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className='min-h-[70vh] w-full flex flex-col gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 md:py-16 lg:py-20 bg-gray-50'
    >
      {/* Header Section */}
      <div className='flex items-center gap-6 mb-8 lg:mb-12'>
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900 text-center lg:text-left'
        >
          What People Say
        </motion.h1>
      </div>

      {/* Testimonials Slider */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative w-full"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + ' !mx-1 !w-2.5 !h-2.5"></span>';
            },
          }}
          autoplay={{ 
            delay: 5000,
            disableOnInteraction: false 
          }}
          breakpoints={{
            // Mobile first approach
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            // Small tablets
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // Tablets
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            // Large tablets
            1024: {
              slidesPerView: 2,
              spaceBetween: 28,
            },
            // Desktop
            1280: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
            // Large desktop
            1536: {
              slidesPerView: 3,
              spaceBetween: 32,
            }
          }}
          className="!pb-16" // Increased padding-bottom for pagination
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className="h-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-dashed border-gray-300 h-full flex flex-col'
              >
                {/* Quote Icon */}
                <div className="mb-3 sm:mb-4">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500 opacity-20" />
                </div>

                {/* Testimonial Text */}
                <p className='text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 flex-grow'>
                  "{testimonial.text}"
                </p>

                {/* Rating */}
                <div className='flex gap-1 mb-4 sm:mb-6 justify-center'>
                  {renderStars(testimonial.rating)}
                </div>

                {/* Client Info */}
                <div className='flex flex-col items-center gap-2 sm:gap-3 mt-auto'>
                  <div className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-amber-500 to-amber-500 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base lg:text-lg shadow-lg'>
                    {testimonial.initials}
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-800 text-base sm:text-lg lg:text-xl">{testimonial.name}</h3>
                    {/* <p className='text-gray-500 text-xs sm:text-sm lg:text-base mt-1'>{testimonial.position}</p> */}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>


        {/* Custom styles for pagination positioning */}
        <style jsx>{`
          :global(.swiper-pagination) {
            position: absolute !important;
            bottom: 2rem !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: auto !important;
            z-index: 10 !important;
          }
          :global(.swiper-pagination-bullet) {
            background: #d1d5db !important;
            opacity: 0.5 !important;
          }
          :global(.swiper-pagination-bullet-active) {
            background: #f59e0b !important;
            opacity: 1 !important;
          }
        `}</style>
      </motion.div>
    </motion.div>
  )
}

export default Testimonials