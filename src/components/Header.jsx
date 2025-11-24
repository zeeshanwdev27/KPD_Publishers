import React from 'react'
import { motion } from "framer-motion";

function Header({title, description}) {
  return (
          <div className="bg-amber-500 text-white py-24 px-6 md:px-20 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-white/80 text-md md:text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
  )
}

export default Header