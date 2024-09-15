"use client";

import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const WhyChooseUs = () => {
  return (
    <motion.section
      className="bg-indigo-900 text-white py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl font-extrabold text-white sm:text-4xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us
        </motion.h2>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3"
          variants={containerVariants}
        >
          {/* Audiences */}
          <motion.div
            className="bg-indigo-800 rounded-lg shadow-lg p-6"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/groups.png"
                alt="Audiences Icon"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-bold">150+ Audiences</h3>
            <p className="mt-2 text-sm text-indigo-200">
              Engaging with a large and diverse audience.
            </p>
          </motion.div>

          {/* Rating */}
          <motion.div
            className="bg-indigo-800 rounded-lg shadow-lg p-6"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/star.png"
                alt="Rating Icon"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-bold">4.5 High Rating</h3>
            <p className="mt-2 text-sm text-indigo-200">
              Rated highly by our valued clients.
            </p>
          </motion.div>

          {/* Locations */}
          <motion.div
            className="bg-indigo-800 rounded-lg shadow-lg p-6"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/worldwide-location.png"
                alt="Locations Icon"
                className="w-12 h-12"
              />
            </div>
            <h3 className="text-xl font-bold">2000+ Locations</h3>
            <p className="mt-2 text-sm text-indigo-200">
              Covering over 2000 locations India.
            </p>
          </motion.div>
        </motion.div>

        {/* Footer Description */}
        <motion.p
          className="mt-8 text-sm text-indigo-200 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Choose Shree Narayan Ganga Aarti for your ultimate spiritual travel
          experience, as we offer a seamless blend of curated itineraries and
          personalized services tailored to your specific preferences. Whether
          you&apos;re planning a wedding Ganga Aarti, namkaran Ganga Aarti, or
          seeking engagement event management, our expert team&apos;s in-depth
          local knowledge ensures you uncover hidden gems and enjoy an authentic
          cultural immersion. With us, you can seamlessly integrate the sacred
          Ganga Aarti ceremony into your events while experiencing the rich
          traditions and spirituality of India.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
