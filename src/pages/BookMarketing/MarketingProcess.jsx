import React from "react";
import { motion } from "framer-motion";

function MarketingProcess() {

  const cardsData = [
    {
      icon: "Step 01",
      title: "Discovery & Strategy Session",
      description:
        "Our process begins with a detailed discussion where we learn about your goals, marketing expectations, previous promotional attempts, and your intended readership. This level of attention is what low-cost service providers fail to deliver.",
      color: "from-amber-500 to-amber-500",
    },
    {
      icon: "Step 02",
      title: "Customized Marketing Blueprint",
      description:
        "Following the consultation, we craft a personalized marketing outline built around both digital and traditional promotional methods. Each plan is tailored to highlight your book’s strengths and positioning in the marketplace. ",
      color: "from-amber-500 to-amber-500",
    },
    {
      icon: "Step 03",
      title: "Execution & Campaign Launch ",
      description:
        "Once approved, our experienced marketing team begins rolling out the campaign. Every stage is managed with precision, and you’re kept informed as your promotional strategy is put into action. ",
      color: "from-amber-500 to-amber-500",
    },
    {
      icon: "Step 04",
      title: "Performance Tracking & Optimization",
      description:
        "We consistently monitor campaign performance, reader engagement, and promotional results. Adjustments are made where necessary to ensure maximum traction and visibility. Detailed progress updates keep you fully aware of campaign success and growth metrics. ",
      color: "from-amber-500 to-amber-500",
    },
  ];


  return (
    <div className="flex flex-col items-center w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gray-100">

      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto">


        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          Our 4-Step{" "}
          <span className="bg-amber-500 bg-clip-text text-transparent">
            Book Marketing Services Framework
          </span>{' '}
        </h1>
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

export default MarketingProcess;