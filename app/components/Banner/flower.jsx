import React from "react";
import { motion } from "framer-motion";

const Flower = ({ image, delay }) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 400, opacity: [1, 1, 0] }}
      transition={{
        duration: 3,
        ease: "easeIn",
        delay,
        repeat: Infinity,
        repeatType: "loop",
      }}
      style={{
        width: "50px",
        height: "50px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        position: "absolute",
        left: `${Math.random() * 100}vw`,
      }}
    />
  );
};

export default Flower;
