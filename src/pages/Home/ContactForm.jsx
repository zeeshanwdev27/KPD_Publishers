import React from "react";
import { MessageSquare, Phone, Mail, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.98
  }
};

function ContactForm() {
  return (
    <motion.div 
      className="min-h-[50vh] bg-gray-50 flex flex-col justify-center items-center gap-5 py-10 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.div className="text-center" variants={itemVariants}>
        <h1 className="text-amber-500 text-4xl md:text-5xl font-bold mb-4">
          Do You Have Something To Say?
        </h1>
        <p className="text-gray-600 text-md lg:text-lg max-w-2xl">
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div 
        className="bg-white w-full max-w-4xl rounded-2xl p-8 shadow-xl border border-gray-100"
        variants={cardVariants}
        whileHover="hover"
      >
        <form
          className="flex flex-col gap-6"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);

            try {
              const response = await fetch(
                "https://kdppublications.com/sendmail.php",
                {
                  method: "POST",
                  body: formData,
                }
              );

              const result = await response.text();

              if (result.includes("success")) {
                Swal.fire({
                  icon: "success",
                  title: "Message Send!",
                  text: "🎉 Thank you! Message Send Successfully.",
                  confirmButtonColor: "#FBBF24",
                });
                e.target.reset();
              } else if (result.includes("invalid_email")) {
                Swal.fire({
                  icon: "warning",
                  title: "Invalid Email",
                  text: "⚠️ Please enter a valid email address.",
                  confirmButtonColor: "#FBBF24",
                });
                e.target.reset();
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "❌ Something went wrong. Please try again later.",
                  confirmButtonColor: "#FBBF24",
                });
                e.target.reset();
              }
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Network Error",
                text: "🚨 Please check your connection and try again.",
                confirmButtonColor: "#FBBF24",
              });
              console.error(error);
              e.target.reset();
            }
          }}
        >
          {/* Name & Phone */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={containerVariants}>
            <motion.div className="flex flex-col gap-2" variants={itemVariants}>
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="border border-amber-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                required
              />
            </motion.div>

            <motion.div className="flex flex-col gap-2" variants={itemVariants}>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="border border-amber-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
              />
            </motion.div>
          </motion.div>

          {/* Email & Service */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={containerVariants}>
            <motion.div className="flex flex-col gap-2" variants={itemVariants}>
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="border border-amber-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                required
              />
            </motion.div>

            <motion.div className="flex flex-col gap-2" variants={itemVariants}>
              <label htmlFor="service">Select Service</label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  className="w-full border border-amber-500 p-3 rounded-lg focus:outline-none 
          focus:ring-2 focus:ring-amber-500 focus:border-transparent 
          transition-all duration-200 bg-white appearance-none cursor-pointer pr-10"
                >
                  <option value="" disabled selected defaultValue="" className="option-hover-amber">
                    Choose a service...
                  </option>
                  <option value="book-writing">Book Writing</option>
                  <option value="book-marketing">Book Marketing</option>
                  <option value="book-cover-design">Book Cover Design</option>
                  <option value="proofreading-editing">
                    Book Proofreading & Editing
                  </option>
                  <option value="book-publishing">Book Publishing</option>
                  <option value="ebook-writing-publishing">
                    Ebook Writing & Publishing
                  </option>
                </select>

                <ChevronDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-500 pointer-events-none"
                  size={20}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div className="flex flex-col gap-2" variants={itemVariants}>
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your project or inquiry..."
              className="border border-amber-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-vertical"
              required
            />
          </motion.div>

          {/* Submit */}
          <motion.button
            type="submit"
            className="p-4 text-lg font-semibold rounded-lg bg-amber-500 text-white hover:bg-amber-500/90 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Contact Methods */}
      <motion.div 
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        variants={containerVariants}
      >
        <motion.div className="text-center group" variants={itemVariants}>
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl group-hover:border-amber-500/20 transition-all duration-300"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors duration-300">
              <span className="text-amber-500 text-lg font-bold">
                <MessageSquare />
              </span>
            </div>
            <p className="font-semibold text-gray-700 mb-3">
              Discuss Your Project
            </p>
            <motion.button 
                onClick={() => {
    if (window.LiveChatWidget?.call) {
      window.LiveChatWidget.call("maximize");
    }
  }}
              className="cursor-pointer w-full bg-transparent border border-amber-500 rounded-xl p-4 text-sm lg:text-lg font-medium text-amber-500 hover:bg-amber-500 hover:text-white transition-all duration-300 group-hover:shadow-md"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Live Chat
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div className="text-center group" variants={itemVariants}>
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl group-hover:border-amber-500/20 transition-all duration-300"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors duration-300">
              <span className="text-amber-500 text-lg font-bold">
                <Phone />
              </span>
            </div>
            <p className="font-semibold text-gray-700 mb-3">Make a Call</p>
            <Link to="tel:+15714507817">
              <motion.button 
                className="cursor-pointer w-full bg-transparent border border-amber-500 rounded-xl p-4 text-sm lg:text-lg font-medium text-amber-500 hover:bg-amber-500 hover:text-white transition-all duration-300 group-hover:shadow-md"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                +1-571-450-7817 
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div className="text-center group" variants={itemVariants}>
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl group-hover:border-amber-500/20 transition-all duration-300"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors duration-300">
              <span className="text-amber-500 text-lg font-bold">
                <Mail />
              </span>
            </div>
            <p className="font-medium text-gray-700 mb-3">Send us Email</p>
            <Link to="mailto:info@kdppublications.com">
              <motion.button 
                className="cursor-pointer w-full bg-transparent border border-amber-500 rounded-xl py-4 px-2  text-sm lg:text-lg font-medium text-amber-500 hover:bg-amber-500 hover:text-white transition-all duration-300 group-hover:shadow-md"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                info@kdppublications.com
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ContactForm;