"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "/assets/jayamala_with_aarti.webp",
    alt: "Engagement shreenarayan ganga aarti",
  },
  {
    src: "/assets/durga_puja.webp",
    alt: "durga puja shree narayan ganga aarti",
  },
  {
    src: "/assets/wedding_ai2.webp",
    alt: "wedding shreenarayan ganga aarti",
  },
  // Add more images as needed
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // Controls the direction of the slide

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // Slide to the next image (right to left)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentIndex];

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1); // Determine direction based on user input
    setCurrentIndex(index);
  };

  return (
    <div className="lg:w-1/2 w-full mt-8 lg:mt-0 lg:ml-8 relative">
      <div className="relative overflow-hidden h-[250px] sm:h-[400px]">
        {" "}
        {/* Responsive height */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentImage.src} // Unique key to trigger the animations
            src={currentImage.src}
            alt={currentImage.alt || "Default Image"}
            className="w-full h-full object-cover rounded-lg shadow-lg absolute" // Ensure image covers the container
            initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>

      {/* Dots for indicating image length */}
      <div className="mt-4 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
