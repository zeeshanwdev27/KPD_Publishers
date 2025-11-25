import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Shield, Cookie, Link as LinkIcon, Mail, Phone, MapPin } from 'lucide-react';

const TermsAndConditionsContent = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: 'information-collected',
      title: 'Information Collected',
      icon: <Shield className="w-5 h-5" />,
      content: 'KPD-Publishing may collect:',
      items: [
        'Name, email, phone number',
        'Project details and submitted materials',
        'Browser, device, and analytical data'
      ]
    },
    {
      id: 'use-of-information',
      title: 'Use of Information',
      icon: <Shield className="w-5 h-5" />,
      content: 'Information may be used to:',
      items: [
        'Respond to inquiries',
        'Provide requested services',
        'Improve site performance',
        'Maintain security and compliance'
      ]
    },
    {
      id: 'data-protection',
      title: 'Data Protection',
      icon: <Shield className="w-5 h-5" />,
      content: 'Reasonable administrative and technical safeguards are applied to protect stored information. Data is retained only as long as necessary for operational and legal purposes.'
    },
    {
      id: 'cookies-tracking',
      title: 'Cookies & Tracking',
      icon: <Cookie className="w-5 h-5" />,
      content: 'The website may use cookies and analytics. Users may disable cookies through browser settings.'
    },
    {
      id: 'third-party-links',
      title: 'Third-Party Links',
      icon: <LinkIcon className="w-5 h-5" />,
      content: 'KPD-Publishing is not responsible for external website policies or content.'
    },
    {
      id: 'user-rights',
      title: 'User Rights',
      icon: <Shield className="w-5 h-5" />,
      content: 'Users may request:',
      items: [
        'Data access',
        'Data correction',
        'Data removal'
      ]
    }
  ];

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, text: 'Email: info@kdppublications.com' },
    { icon: <MapPin className="w-5 h-5" />, text: 'Address: 1800 S Bell St, Arlington, VA 22202' }
  ];

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >

          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            KPD-Publishing is committed to protecting user information and ensuring responsible data handling. 
            This policy outlines how information is collected, used, and safeguarded when visitors browse the website, 
            submit inquiries, or request services.
          </p>
        </motion.div>

        {/* Accordion Sections */}
        <div className="space-y-4 mb-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.4 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3 text-amber-500">
                  {section.icon}
                  <span className="text-lg font-semibold text-gray-900">
                    {section.title}
                  </span>
                </div>
                {openSections[section.id] ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <AnimatePresence>
                {openSections[section.id] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 mb-3">{section.content}</p>
                      {section.items && (
                        <ul className="space-y-2 ml-4">
                          {section.items.map((item, itemIndex) => (
                            <motion.li
                              key={itemIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: itemIndex * 0.1 }}
                              className="flex items-start"
                            >
                              <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-gray-600">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-amber-500 rounded-xl shadow-lg p-6 sm:p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Contact for Privacy Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-white transition-colors duration-200"
              >
                <div className="text-amber-500 mb-2">
                  {contact.icon}
                </div>
                <p className="text-gray-700 font-medium">
                  {contact.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default TermsAndConditionsContent;