import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
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

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
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

      {/* Left Image */}
      <motion.img 
        src="/bookvid.gif" 
        className='w-100 h-80 md:w-150 md:h-120 lg:w-180 lg:h-120' 
        alt="ebooks_images" 
        variants={imageVariants}
      />
      
      {/* Right Content */}
      <motion.div 
        className='flex flex-col gap-6 lg:max-w-lg mb-8 lg:mb-0'
        variants={containerVariants}
      >

        <motion.h1 
          className='text-3xl md:text-4xl lg:text-4xl font-semibold leading-tight text-slate-900'
          variants={itemVariants}
        >
         KDP Publications, where your story comes to life.
        </motion.h1>

        <motion.p 
          className='text-slate-700 leading-relaxed'
          variants={itemVariants}
        >
          As a premier book writing, marketing and a legacy books publisher company, we pride ourselves on our unmatched proficiency in turning your manuscript into a bestseller. 
        </motion.p>

        <motion.p 
          className='text-slate-700 leading-relaxed'
          variants={itemVariants}
        >
          Find book publisher in the USA that is affordable and provides top-rated quality work without any compromise and delays in submissions.
        </motion.p>

        <motion.ul 
          className='list-disc flex flex-col gap-2 text-amber-500 font-medium pl-5'
          variants={containerVariants}
        >
            <motion.li variants={listItemVariants}>Ghostwriting</motion.li>
            <motion.li variants={listItemVariants}>Professional editing and proofreading</motion.li>
            <motion.li variants={listItemVariants}>Cover designing and Illustrations</motion.li>
            <motion.li variants={listItemVariants}>Book Promotions and Marketing</motion.li>
            <motion.li variants={listItemVariants}>Amazon Publishing and Printing</motion.li>
            <motion.li variants={listItemVariants}>Chidren Book illustration and publishing</motion.li>
        </motion.ul>

        <motion.div 
          className='flex flex-col sm:flex-row gap-4 justify-start'
          variants={itemVariants}
        >
          <motion.button 
             onClick={() => {
    if (window.LiveChatWidget?.call) {
      window.LiveChatWidget.call("maximize");
    }
  }}
            className='cursor-pointer bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-lg'
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Chat With Us
          </motion.button>
      
          <Link to="/contact-us">
            <motion.button 
              className='w-full cursor-pointer bg-amber-500 border-2 border-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-transparent hover:border-amber-500 hover:text-amber-500 transition duration-300'
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Contact With Us
            </motion.button>
          </Link>

        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About