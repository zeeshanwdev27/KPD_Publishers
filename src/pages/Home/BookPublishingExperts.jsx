import React from "react";
import { Edit3 , Megaphone  , Layers, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

function BookPublishingExperts() {
    
  const cardsData = [
    {
      icon: <Layers  className="w-8 h-8" />,
      title: "Book Writing",
      description:
        "Our team of experienced writers will help you craft a compelling and engaging story that resonates with your readers. We'll work with you to create characters that your readers will fall in love with and a story that they won't be able to put down.",
      color: "from-amber-500 to-amber-500",
    },
    {
      icon: <Edit3   className="w-8 h-8" />,
      title: "Book Editing",
      description:
        "Our professional editors will polish your manuscript to perfection, ensuring it's free of errors and reads smoothly. We'll also review your story to provide you with feedback and suggestions, helping you take it to the next level.",
      color: "from-amber-500 to-amber-500",
    },
    {
      icon: <BookOpen  className="w-8 h-8" />,
      title: "Book Publishing",
      description:
        "Our self publishers take care of all aspects of book publishing, from designing a beautiful cover to formatting your manuscript for print and digital formats. With our global distribution network, your book will be available to readers worldwide.",
      color: "from-amber-500 to-amber-500",
    },
    {
      icon: <Megaphone  className="w-8 h-8" />,
      title: "Book Marketing",
      description:
        "Our Publishers and marketing team will help you promote your book to the right audience using a combination of traditional and digital marketing strategies. From social media to book tours, we'll help you build your brand and create a loyal following of readers.",
      color: "from-amber-500 to-amber-500",
    },

  ];

  return (
    <div className="flex flex-col items-center w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gray-50 text-white">
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-5xl mx-auto">


        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-slate-900 mb-5 leading-15">
         Book Publishing Experts – {" "}
          <span className="bg-amber-500 bg-clip-text text-transparent">
            Harness Your Book's Potential
          </span>
        </h1>

        <p className="text-sm md:text-md lg:text-lg text-slate-900 max-w-5xl mx-auto">
         Your First Step Toward Becoming a Bestseller Begins here, at our agency
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 w-full max-w-7xl">
        {cardsData.map((data, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.2 },
            }}
            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 p-6 sm:p-8 flex flex-col gap-6 transition-all duration-300"
          >
            {/* Background Gradient Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}
            />

            {/* Icon */}
            <div
              className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${data.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 w-fit`}
            >
              {data.icon}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                {data.title}
              </h3>

              <p className="text-gray-600 leading-relaxed flex-1">
                {data.description}
              </p>
            </div>

            {/* Hover Border Effect */}
            <div
              className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${data.color} bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
            >
              <div className="rounded-3xl bg-white w-full h-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default BookPublishingExperts;