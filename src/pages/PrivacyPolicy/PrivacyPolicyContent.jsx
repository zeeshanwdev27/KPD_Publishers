import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  User, 
  Cookie, 
  Link, 
  Mail, 
  MapPin,
  CheckCircle,
  Lock
} from 'lucide-react';

function PrivacyPolicyContent() {
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
        duration: 0.5
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >


      <motion.div
        className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8"
        variants={itemVariants}
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.p 
          className="text-gray-700 leading-relaxed text-base sm:text-lg"
          variants={itemVariants}
        >
          KPD-Publications is committed to protecting user information and ensuring responsible data handling. 
          This policy outlines how information is collected, used, and safeguarded when visitors browse 
          the website, submit inquiries, or request services.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
      >
        {/* Information Collected */}
        <motion.section
          className="bg-white rounded-xl shadow-md p-6"
          variants={sectionVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center mb-4">
            <FileText className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">Information Collected</h2>
          </div>
          <p className="text-gray-600 mb-4 text-sm">KPD-Publications may collect:</p>
          <ul className="space-y-2">
            {['Name, email, phone number', 'Project details and submitted materials', 'Browser, device, and analytical data'].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-center text-gray-700"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Use of Information */}
        <motion.section
          className="bg-white rounded-xl shadow-md p-6"
          variants={sectionVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center mb-4">
            <User className="h-6 w-6 text-green-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">Use of Information</h2>
          </div>
          <p className="text-gray-600 mb-4 text-sm">Information may be used to:</p>
          <ul className="space-y-2">
            {['Respond to inquiries', 'Provide requested services', 'Improve site performance', 'Maintain security and compliance'].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-center text-gray-700"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Data Protection */}
        <motion.section
          className="bg-white rounded-xl shadow-md p-6"
          variants={sectionVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center mb-4">
            <Lock className="h-6 w-6 text-purple-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">Data Protection</h2>
          </div>
          <motion.p 
            className="text-gray-700 text-sm leading-relaxed"
            variants={itemVariants}
          >
            Reasonable administrative and technical safeguards are applied to protect stored information. 
            Data is retained only as long as necessary for operational and legal purposes.
          </motion.p>
        </motion.section>

        {/* Cookies & Tracking */}
        <motion.section
          className="bg-white rounded-xl shadow-md p-6"
          variants={sectionVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center mb-4">
            <Cookie className="h-6 w-6 text-orange-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">Cookies & Tracking</h2>
          </div>
          <motion.p 
            className="text-gray-700 text-sm leading-relaxed"
            variants={itemVariants}
          >
            The website may use cookies and analytics. Users may disable cookies through browser settings.
          </motion.p>
        </motion.section>

        {/* Third-Party Links */}
        <motion.section
          className="bg-white rounded-xl shadow-md p-6"
          variants={sectionVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center mb-4">
            <Link className="h-6 w-6 text-red-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">Third-Party Links</h2>
          </div>
          <motion.p 
            className="text-gray-700 text-sm leading-relaxed"
            variants={itemVariants}
          >
            KPD-Publications is not responsible for external website policies or content.
          </motion.p>
        </motion.section>

        {/* User Rights */}
        <motion.section
          className="bg-white rounded-xl shadow-md p-6"
          variants={sectionVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center mb-4">
            <User className="h-6 w-6 text-indigo-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-900">User Rights</h2>
          </div>
          <p className="text-gray-600 mb-4 text-sm">Users may request:</p>
          <ul className="space-y-2">
            {['Data access', 'Data correction', 'Data removal'].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-center text-gray-700"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      </motion.div>

      {/* Contact Information */}
      <motion.section
        className="bg-amber-500  rounded-2xl shadow-lg p-6 sm:p-8 mt-8"
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Contact for Privacy Matters
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <motion.div 
            className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Mail className="h-8 w-8 text-amber-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
            <a href="mailto:info@kdppublications.com" className="text-amber-600 underline text-sm">info@kdppublications.com</a>
          </motion.div>


          <motion.div 
            className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm sm:col-span-2 lg:col-span-1"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <MapPin className="h-8 w-8 text-amber-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
            <p className="text-gray-600 text-sm">1800 S Bell St, Arlington, VA 22202</p>
          </motion.div>
        </div>
      </motion.section>

    </motion.div>
  );
}

export default PrivacyPolicyContent;