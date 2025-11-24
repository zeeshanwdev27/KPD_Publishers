import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function AboutMarketing() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };


  return (
    <motion.div 
      className='min-h-[70vh] flex flex-col lg:flex-row justify-center lg:items-center py-8 px-4 md:px-15 lg:py-12 lg:gap-40 mx-auto text-black'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >


      
      {/* Left Content */}
      <motion.div 
        className='flex flex-col gap-6 lg:max-w-lg mb-8 lg:mb-0'
        variants={containerVariants}
      >

        <motion.h1 
          className='text-3xl md:text-4xl lg:text-4xl font-semibold leading-tight text-slate-900'
          variants={itemVariants}
        >
          Targeted Book Promotion Strategies with Precision Planning 
        </motion.h1>

        <motion.p 
          className='text-slate-700 leading-relaxed'
          variants={itemVariants}
        >
          At KDP Publishers, we understand that every book has its own personality, audience, and 
market potential. Our promotional team takes time to evaluate your book’s strengths, 
positioning, genre, and reader demographic. Using these insights, we construct a custom 
marketing plan that blends proven traditional methods with modern digital outreach. 
        </motion.p>


        <motion.div 
          className='flex flex-col sm:flex-row gap-4 justify-start'
          variants={itemVariants}
        >
          <motion.button 
            className='cursor-pointer bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-lg'
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Chat With Us
          </motion.button>
      
          <Link to="tel:+5512884168">
            <motion.button 
              className='w-full cursor-pointer bg-amber-500 border-2 border-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-transparent hover:border-amber-500 hover:text-amber-500 transition duration-300'
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Talk To An Expert
            </motion.button>
          </Link>

        </motion.div>
      </motion.div>
      

    {/* Right Image */}
      <motion.img 
        src="/book2.png" 
        className='w-80 h-80 lg:w-120 lg:h-110' 
        alt="ebooks_images" 
        variants={imageVariants}
      />



    </motion.div>
  )
}

export default AboutMarketing