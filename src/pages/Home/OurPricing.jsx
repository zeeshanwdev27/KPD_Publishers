import React from 'react'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

function OurPlans() {

    const cards = [
        {
            basic: {
                title: 'Basic Package',
                tags: ['Social Media Promotion for three months', 'Amazon Optimization for three months', 'Video Reviews – 1x', 'Author\'s Spotlight - 1x', 'Blog and Articles – 5x (Posted on DA 10+ websites)', 'Detailed Targeting', 'Geo Specific Targeting'],
                price: '$1,500',
                discountedPrice: '$950'
            },
            advance: {
                title: 'Advanced Package',
                tags: ['Social Media Promotion for three months', 'Amazon Optimization for three months', 'Video Reviews – 3x', 'Author\'s Spotlight - 2x', 'Blog and Articles – 10x (Posted on DA 20+ websites)', 'Press Release – 2x (200+ media outlets)', 'Detailed Targeting', 'Geo Specific Targeting'],
                price: '$2,200',
                discountedPrice: '$1,600'
            },
            expert: {
                title: 'Expert Package',
                tags: ['Social Media Promotion for six months', 'Amazon Optimization for six months', 'Video Reviews – 5x', 'Author\'s Spotlight - 3x', 'Blog and Articles – 10x (Posted on DA 30+ websites)', 'Press Release – 4x (200+ media outlets)', 'Detailed Targeting', 'Geo Specific Targeting'],
                price: '$3,500',
                discountedPrice: '$2,900'
            },
            ghostwriting: {
                title: 'GHOSTWRITING Package',
                tags: ['The chief ghostwriter will be an Extensively Published Author (15 Years experience)', 'Procedure includes a detailed strategy-building and implementing session to create an outline for your book', 'Ghostwriting original content based on interviews or research.', 'Developmental Editing (Also called: conceptual editing or manuscript appraisal.)', 'Evaluation Editing (Also called: manuscript critique or structural editing.)', 'Content Editing (Also called: substantive editing or full editing.)', 'Line Editing (Also called: stylistic editing or comprehensive editing.)', 'Proofreading', 'Pagination', 'Formatting and typesetting.', 'Access to an online portal', 'Unlimited Revisions', 'Premium Support'],
                price: '$1699',
                
            },
            standard: {
                title: 'Standard Publishing Package',
                tags: ['Publishing on Amazon/Kindle', 'Formatting and Typesetting/layout adjustments', 'Amazon Print on Demand Included ', ' Amazon Account Creation', '100% Ownership Rights', 'Downloadable E-Book (So the Book will be converted to an eBook as well)', 'Paper Back (Printable)', 'Hard cover', 'Dedicated Account Manager', '100% Satisfaction Guarantee', '100% Compliance & Support Guarantee'],
                price: '$650',
            },
            extensive: {
                title: 'Extensive Publishing Package',
                tags: ['Publishing on Amazon/Kindle, Barnes & Noble, iBook, Google Books, Goodreads, Booktopia, Bokus, Walmart and Target', 'Formatting and Typesetting/layout adjustments', 'Amazon Print on Demand Included', 'Authors Copy Enabled right at the Print Cost', 'Amazon Account Creation', 'Author\'s Profile creation on famous Platforms & Forums: -Good Reads, -Library Thing, -Litsy', '100% Ownership Rights', 'Downloadable E-Book', 'Paper Back', 'Hard cover', 'Dedicated Account Manager', '100% Satisfaction Guarantee', '100% Compliance & Support Guarantee'],
                price: '$1700',
            }
        }
    ]

    const cardData = Object.values(cards[0]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50 
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        },
        hover: {
            y: -10,
            scale: 1.02,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25
            }
        }
    }

    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                delay: 0.2
            }
        }
    }

    const tagVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.05,
                type: "spring",
                stiffness: 100
            }
        })
    }

    const buttonVariants = {
        initial: { scale: 1 },
        hover: { 
            scale: 1.05,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        },
        tap: { scale: 0.95 }
    }

    return (
        <div className='w-full min-h-screen flex items-center justify-center py-8 px-4'>
            <motion.div 
                className='max-w-7xl mx-auto text-center w-full'
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >

                {/* Header */}
                <motion.div 
                    className='mb-12'
                    variants={headerVariants}
                >
                    <motion.h1 
                        className='text-4xl md:text-5xl font-bold  mb-4 text-amber-500'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Affordable Packages
                    </motion.h1>
                    <motion.p 
                        className='text-md md:text-lg text-gray-600 max-w-2xl mx-auto'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Unlock a World of Affordable Packages Carefully Designed to Maximize Your Value, Save Money, and Enhance Your Experience
                    </motion.p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div 
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'
                    variants={containerVariants}
                >
                    {cardData.map((card, index) => (
                        <motion.div
                            key={index}
                            className='bg-white rounded-lg shadow-lg border border-gray-200 p-6 w-full max-w-sm flex flex-col cursor-pointer'
                            variants={cardVariants}
                            whileHover="hover"
                            initial="hidden"
                            animate="visible"
                        >
                            {/* Card Header */}
                            <div className='mb-6'>
                                <motion.h3 
                                    className='text-xl font-bold text-gray-900 mb-3'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1 + 0.5 }}
                                >
                                    {card.title}
                                </motion.h3>
                                
                                {/* Pricing */}
                                <motion.div 
                                    className='flex items-baseline justify-center gap-2 mb-4'
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 + 0.6 }}
                                >
                                    {card.discountedPrice ? (
                                        <>
                                            <span className='text-2xl font-bold text-amber-500'>{card.discountedPrice}</span>
                                            <span className='text-lg text-amber-500 line-through'>{card.price}</span>
                                        </>
                                    ) : (
                                        <span className='text-2xl font-bold text-amber-500'>{card.price}</span>
                                    )}
                                </motion.div>
                            </div>

                            {/* All Tags with Scroll */}
                            <div className='flex-grow mb-4'>
                                <div className='max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
                                    <div className='space-y-2 pr-2'>
                                        {card.tags.map((tag, tagIndex) => (
                                            <motion.div
                                                key={tagIndex}
                                                className='bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 text-left wrap-break-word hover:bg-gray-100 transition-colors duration-200'
                                                custom={tagIndex}
                                                variants={tagVariants}
                                                initial="hidden"
                                                animate="visible"
                                                whileHover={{ 
                                                    scale: 1.02,
                                                    backgroundColor: "rgba(59, 130, 246, 0.1)"
                                                }}
                                            >
                                                {tag}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className='flex gap-2'>
                            <Link to="tel:+15512884168">
                            <motion.button 
                                className='md:text-xs text-base lg:text-base cursor-pointer w-full bg-amber-500 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200'
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                +1-551-288-4168
                            </motion.button>
                            </Link>
                           <Link to="/contact-us">
                            <motion.button 
                                className='md:text-xs text-base  lg:text-base cursor-pointer w-full bg-transparent border text-amber-500 border-amber-500 font-medium py-3 px-10 rounded-lg transition-colors duration-200'
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                Message Us
                            </motion.button>
                            </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>


                {/* CTA */}
              {/* <motion.div 
                    className='mt-12 mb-12 flex flex-col md:flex-row justify-center gap-3'
                    variants={headerVariants}
                >
                    <motion.button
                        className='py-4 px-12 font-bold text-white bg-amber-500 rounded-xl shadow-xl cursor-pointer'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        View All
                    </motion.button>

                   <motion.button
                        className='py-4 px-8 font-bold text-white bg-amber-500 rounded-xl shadow-xl cursor-pointer'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Talk To An Expert
                    </motion.button>

                </motion.div> */}


            </motion.div>
        </div>
    )
}

export default OurPlans