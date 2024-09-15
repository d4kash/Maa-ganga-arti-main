"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { testimonials, faqs } from "../../../utils/constants";

const transitionVariant = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.5 },
};

const Service = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [faqIndex, setFaqIndex] = useState(0);
  const [isFaqHovered, setIsFaqHovered] = useState(false);

  // Flatten the testimonials data to display 2 at a time across events
  const flattenedTestimonials = testimonials.flatMap((event) =>
    event.feedback.map((feedback) => ({
      ...feedback,
      event: event.event,
    }))
  );

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setTestimonialIndex(
          (prevIndex) => (prevIndex + 2) % flattenedTestimonials.length
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, flattenedTestimonials.length]);

  // Auto-scroll logic for FAQs
  useEffect(() => {
    if (!isFaqHovered) {
      const interval = setInterval(() => {
        setFaqIndex((prevIndex) => (prevIndex + 2) % faqs.length);
      }, 7000); // Change FAQ every 7 seconds
      return () => clearInterval(interval);
    }
  }, [isFaqHovered]);

  const handleNextTestimonial = () => {
    setTestimonialIndex(
      (prevIndex) => (prevIndex + 2) % flattenedTestimonials.length
    );
  };

  const handlePrevTestimonial = () => {
    setTestimonialIndex(
      (prevIndex) =>
        (prevIndex - 2 + flattenedTestimonials.length) %
        flattenedTestimonials.length
    );
  };

  const handleNextFaq = () => {
    setFaqIndex((prevIndex) => (prevIndex + 2) % faqs.length);
  };

  const handlePrevFaq = () => {
    setFaqIndex((prevIndex) => (prevIndex - 2 + faqs.length) % faqs.length);
  };

  return (
    <div>
      {/* Testimonials Section */}
      <section
        className="testimonials-section py-16 bg-gray-100 text-center relative px-4 md:px-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2 className="text-3xl font-bold mb-12">What Our Devotees Say</h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={testimonialIndex}
            className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={transitionVariant}
          >
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                className="testimonial bg-white p-6 rounded-lg shadow-md mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold mb-4">
                  {
                    flattenedTestimonials[
                      (testimonialIndex + i) % flattenedTestimonials.length
                    ].event
                  }
                </h3>
                <p>
                  {
                    flattenedTestimonials[
                      (testimonialIndex + i) % flattenedTestimonials.length
                    ].comment
                  }
                </p>
                <span className="text-gray-600 mt-4 block">
                  -{" "}
                  {
                    flattenedTestimonials[
                      (testimonialIndex + i) % flattenedTestimonials.length
                    ].user
                  }
                  , Rating:{" "}
                  {
                    flattenedTestimonials[
                      (testimonialIndex + i) % flattenedTestimonials.length
                    ].rating
                  }
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Left and Right Custom Buttons for Testimonials */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <button
            onClick={handlePrevTestimonial}
            className="bg-indigo-500 text-white p-2 rounded-full shadow-lg"
          >
            &lt;
          </button>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <button
            onClick={handleNextTestimonial}
            className="bg-indigo-500 text-white p-2 rounded-full shadow-lg"
          >
            &gt;
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="faq-section py-16 bg-gray-50 text-center relative px-4 md:px-12"
        onMouseEnter={() => setIsFaqHovered(true)}
        onMouseLeave={() => setIsFaqHovered(false)}
      >
        <h2 className="text-3xl font-bold mb-12">
          Got Questions? We’ve Got Answers!
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={faqIndex}
            className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                className="faq-item bg-white p-6 rounded-lg shadow-md"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={transitionVariant}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-4">
                  {faqs[(faqIndex + i) % faqs.length].question}
                </h3>
                <p>{faqs[(faqIndex + i) % faqs.length].answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Left and Right Custom Buttons for FAQs */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <button
            onClick={handlePrevFaq}
            className="bg-indigo-500 text-white p-2 rounded-full shadow-lg"
          >
            &lt;
          </button>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <button
            onClick={handleNextFaq}
            className="bg-indigo-500 text-white p-2 rounded-full shadow-lg"
          >
            &gt;
          </button>
        </div>
      </section>
    </div>
  );
};

export default Service;
