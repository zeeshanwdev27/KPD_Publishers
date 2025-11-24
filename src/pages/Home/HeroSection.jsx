import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HeroSection({title, description}) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const bookVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const floatAnimation = {
    y: [-10, 10, -10],
    transition: {
      y: {
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <div className="h-[80vh] pt-30 md:pt-40 lg:pt-25 gap-0 lg:gap-10 text-white w-full flex flex-col items-center bg-[url('/Home/HeroSection/herosectionbg.png')] bg-cover bg-no-repeat overflow-hidden">
        <motion.div 
          className='flex flex-col items-center text-center gap-5 mx-auto'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className='text-3xl md:text-5xl lg:text-7xl font-bold md:w-2/2 lg:w-2/3'
          >
            {title}
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className='text-md sm:text-md font-normal sm:font-medium w-5/6  lg:w-2/5'
          >
            {description}
          </motion.p>
          <motion.button 
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#f59e0b",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className='bg-amber-500 rounded-md p-3 w-60 cursor-pointer mt-5 lg:mt-0'
          >
            SHOP NOW
          </motion.button>
        </motion.div>

        <motion.div 
          className='flex gap-3 lg:gap-5'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img 
            src="/Home/HeroSection/book1.png" 
            alt="book1" 
            custom={0}
            variants={bookVariants}
            animate={floatAnimation}
            className='hidden md:block md:w-45 md:h-50 md:mt-50 lg:w-50 lg:h-70 lg:mt-25' 
          />
          <motion.img 
            src="/Home/HeroSection/book2.png" 
            alt="book2" 
            custom={1}
            variants={bookVariants}
            animate={floatAnimation}
            className='w-50 h-40 mt-35 md:w-45 md:h-50 md:mt-45 lg:w-50 lg:h-70 lg:mt-17'
          />
          <motion.img 
            src="/Home/HeroSection/book3.png" 
            alt="book3" 
            custom={2}
            variants={bookVariants}
            animate={floatAnimation}
            className='w-50 h-40 mt-24 md:w-45 md:h-50 md:mt-40 lg:w-50 lg:h-70 lg:mt-4'
          />
          <motion.img 
            src="/Home/HeroSection/book4.png" 
            alt="book4" 
            custom={3}
            variants={bookVariants}
            animate={floatAnimation}
            className='w-50 h-40 mt-35 md:w-45 md:h-50 md:mt-45 lg:w-50 lg:h-70 lg:mt-17'
          />
          <motion.img 
            src="/Home/HeroSection/book5.png" 
            alt="book5" 
            custom={4}
            variants={bookVariants}
            animate={floatAnimation}
            className='hidden md:block md:w-45 md:h-50 md:mt-50 lg:w-50 lg:h-70 lg:mt-25'
          />
        </motion.div>
      </div>
    </>
  )
}

export default HeroSection