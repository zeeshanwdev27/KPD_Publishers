import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { PhoneCall, Mail, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Portfolio({title, description}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const dummyData = [
    {
      image: "Portfolio/img1.jpg",
    },
        {
      image: "Portfolio/img2.jpg",
    },
        {
      image: "Portfolio/img3.jpg",
    },
        {
      image: "Portfolio/img4.jpg",
    },
        {
      image: "Portfolio/img5.jpg",
    },
        {
      image: "Portfolio/img6.jpg",
    },
        {
      image: "Portfolio/img7.jpg",
    },
        {
      image: "Portfolio/img8.jpg",
    },
        {
      image: "Portfolio/img9.jpg",
    },
        {
      image: "Portfolio/img10.jpg",
    },
        {
      image: "Portfolio/img11.jpg",
    },
        {
      image: "Portfolio/img12.jpg",
    },
        {
      image: "Portfolio/img13.jpg",
    },
        {
      image: "Portfolio/img14.jpg",
    },
        {
      image: "Portfolio/img15.jpg",
    },
        {
      image: "Portfolio/img16.jpg",
    },

  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="px-3 xs:px-4 sm:px-6 md:px-8 lg:px-40 py-12 sm:py-16 lg:py-20 xl:py-10 bg-white"
    >
      {/* Header Section */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col gap-3 sm:gap-4 text-center"
      >

        <h1 className="text-amber-500 text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold  mb-3 sm:mb-4">
          {title}
        </h1>

        <p className="text-slate-600 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed px-2">
        {description}
        </p>
      </motion.div>

      {/* Swiper Section */}
      <motion.div variants={itemVariants} className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10, centeredSlides: false },
            400: { slidesPerView: 1.2, spaceBetween: 15, centeredSlides: true },
            480: { slidesPerView: 1.5, spaceBetween: 20, centeredSlides: true },
            640: { slidesPerView: 2, spaceBetween: 25, centeredSlides: true },
            768: { slidesPerView: 2.5, spaceBetween: 30, centeredSlides: true },
            1024: { slidesPerView: 3, spaceBetween: 35, centeredSlides: true },
            1280: { slidesPerView: 4, spaceBetween: 40, centeredSlides: true },
            1536: { slidesPerView: 5, spaceBetween: 45, centeredSlides: true },
            1920: { slidesPerView: 6, spaceBetween: 50, centeredSlides: true },
          }}
          loop={true}
          className="book-swiper"
          speed={800}
        >
          {dummyData.map((data, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={slideVariants}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
                className="relative h-72 lg:h-80 w-47  lg:w-52 mx-auto group cursor-pointer"
              >
                {/* Book Cover Image */}
                <div className="relative h-full w-full overflow-hidden rounded-sm shadow-lg sm:shadow-xl lg:shadow-2xl hover:shadow-2xl transition-all duration-300 border-2 border-white">
                  <img
                    src={data.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={`Book cover ${index + 1}`}
                    style={{ display: "block" }}
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>

                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-amber-500/20 to-amber-500/20 blur-lg sm:blur-xl -z-10" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div
          className="swiper-button-prev !-left-1 xs:!-left-2 sm:!-left-3 md:!-left-4 lg:!-left-6 !w-8 !h-8 xs:!w-10 xs:!h-10 sm:!w-12 sm:!h-12 !bg-white/90 backdrop-blur-sm !rounded-lg xs:!rounded-xl !shadow-lg xs:!shadow-xl !border !border-slate-200 after:!text-xs xs:after:!text-sm hover:!bg-white hover:!shadow-2xl hover:scale-110 transition-all duration-200"
          style={{ "--swiper-navigation-color": "#f59e0b" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        ></motion.div>

        <motion.div
          className="swiper-button-next !-right-1 xs:!-right-2 sm:!-right-3 md:!-right-4 lg:!-right-6 !w-8 !h-8 xs:!w-10 xs:!h-10 sm:!w-12 sm:!h-12 !bg-white/90 backdrop-blur-sm !rounded-lg xs:!rounded-xl !shadow-lg xs:!shadow-xl !border !border-slate-200 after:!text-xs xs:after:!text-sm hover:!bg-white hover:!shadow-2xl hover:scale-110 transition-all duration-200"
          style={{ "--swiper-navigation-color": "#f59e0b" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        ></motion.div>

        {/* Custom Pagination */}
        <div className="swiper-pagination !bottom-2 sm:!bottom-4 mt-6 sm:mt-8"></div>
      </motion.div>

      {/* Custom CSS for Swiper */}
      <style jsx global>{`
        .book-swiper {
          padding: 20px 0px 50px !important;
          overflow: hidden !important;
        }

        .swiper-wrapper {
          align-items: center;
        }

        .swiper-slide {
          transition: transform 0.3s ease;
          opacity: 0.6;
          transform: scale(0.85);
        }

        .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }

        .swiper-slide-prev,
        .swiper-slide-next {
          opacity: 0.8;
          transform: scale(0.92);
        }

        /* Mobile styles */
        @media (max-width: 639px) {
          .book-swiper {
            padding: 15px 0px 40px !important;
          }

          .swiper-slide {
            opacity: 0.7;
            transform: scale(0.9);
          }

          .swiper-slide-active {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Tablet styles */
        @media (min-width: 640px) and (max-width: 1023px) {
          .book-swiper {
            padding: 30px 0px 60px !important;
          }
        }

        /* Desktop styles */
        @media (min-width: 1024px) {
          .book-swiper {
            padding: 40px 0px 50px !important;
          }
        }

        /* Large desktop styles */
        @media (min-width: 1536px) {
          .book-swiper {
            padding: 50px 0px 80px !important;
          }
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #f59e0b;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #f59e0b;
          width: 20px;
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
        }

        /* Larger pagination for mobile */
        @media (max-width: 639px) {
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }

          .swiper-pagination-bullet-active {
            width: 24px;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default Portfolio;