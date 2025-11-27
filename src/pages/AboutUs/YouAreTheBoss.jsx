import React from "react";
import { motion } from "framer-motion";
import { Crown, PenTool, CheckCircle, Star, Phone } from "lucide-react";
import { Link } from "react-router-dom";

function YouAreTheBoss() {
  const genres = [
    "General Fiction", "Jururious Reunition", "Biography",
    "Autobiography", "Evans", "Spanish",
    "Drama", "Poetry", "Children's Story",
    "Short Story", "Fantasy", "Humour",
    "Fable", "Fairy Tale", "Tad Tale",
    "Science Fiction", "Realistic Fiction", "Folklore",
    "Historical Fiction", "Homer", "Legend",
    "Mystery", "Mythology"
  ];

  return (
    <div className="min-h-screen bg-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Crown className="w-8 h-8 text-amber-500" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              You are the <span className="text-amber-500">Boss!</span>
            </h1>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            At our book services, you have complete control over your writing journey. You'll have the final say on everything from edits to pricing.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Writers Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
              <div className="flex items-center gap-3 mb-6">
                <PenTool className="w-8 h-8 text-amber-500" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Our Skilled Writers
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our skilled writers are passionate and capable of producing exceptional literary works across various niches, genres, and industries.
              </p>
              
              <div className="mt-6 space-y-3">
                {[
                  "Passionate about storytelling",
                  "Experienced across multiple genres",
                  "Dedicated to quality writing",
                  "Adaptable to your vision"
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Adaptability Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-amber-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-8 h-8 text-amber-500" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Our Adaptability
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We take pride in our adaptability and cater to a range of genres, niches, and industries, including:
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Genres Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-amber-100"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {genres.map((genre, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: "#f0f9ff" }}
                  className={`p-4 rounded-xl border border-amber-400 text-center bg-amber-500 `}
                >
                  {genre && (
                    <span className="text-white font-medium text-sm sm:text-base">
                      {genre}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 bg-amber-500 rounded-2xl shadow-2xl p-8 sm:p-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Do you want to get Genre-specific Book Services?
          </h2>
          <p className="text-xl text-black mb-6">
            Get personalized book services tailored to your specific genre
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link 
            to="tel:+15714507817"

              className="cursor-pointer bg-white text-amber-500 px-8 py-4 rounded-xl font-bold text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center gap-2"
            >
               <Phone className="w-5 h-5 text-amber-500" strokeWidth={2.5} /><span>+1-571-450-7817 </span>
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            </Link>
          </motion.div>
          <p className="text-black mt-4 text-sm">24/7 • Customer Support Available</p>
        </motion.div>
      </div>
    </div>
  );
}

export default YouAreTheBoss;