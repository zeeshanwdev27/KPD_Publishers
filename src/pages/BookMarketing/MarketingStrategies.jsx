import React from "react";
import { HandHeart , MessageCircle , Users  } from "lucide-react";
import { motion } from "framer-motion";

function MarketingStrategies() {
  const cardsData = [
    {
      icon: <Users  className="w-8 h-8" />,
      title: "Standing Beside You All the Way",
      description:
        "With extensive experience in the publishing and promotional world, KDP Publishers has the expertise to guide authors through the fast-changing landscape of online and offline book marketing. Our team remains aligned with emerging tools, platforms, and industry practices so your book gets the attention and momentum it deserves.",
      color: "from-amber-500 to-amber-500",
    },
    {
      icon: <HandHeart  className="w-8 h-8" />,
      title: "Focused on Your Goals",
      description:
        "Our marketing professionals take the time to understand your vision, expectations, and promotional preferences. We collaborate with you to build a customized strategy tailored to your book’s genre, tone, and audience reach. Seasonal bundles, flexible packages, and affordable add-ons are available—stay connected to explore offers. ",
      color: "from-amber-500 to-amber-500",
    },
    {
      icon: <MessageCircle  className="w-8 h-8" />,
      title: "Transparent Communication & Collaborative Planning ",
      description:
        "We believe successful campaigns are built on trust, consistent updates, and shared decision-making. Unlike many other book marketing providers, we maintain open communication throughout your campaign—sharing progress reports, performance insights, and refinement options. You’re always in the loop and always able to request changes. ",
      color: "from-amber-500 to-amber-500",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gray-50 text-white">
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-5 leading-tight">
          A Book Marketing Approach –{" "}
          <span className="bg-amber-500 bg-clip-text text-transparent">
            Impossible to Ignore
          </span>
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl">
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

export default MarketingStrategies;