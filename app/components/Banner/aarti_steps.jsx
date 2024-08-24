"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "मंगल मंत्र वाचन",
    description: "सकारात्मक ऊर्जा के लिए",
    image: "assets/arti_image.jpg",
  },
  {
    id: 2,
    title: "शंख नाद",
    description: "शुद्धिकरण के लिए",
    image: "assets/sankh_arti.png",
  },
  {
    id: 3,
    title: "अगरबत्ती आरती",
    description: "आराधना की शुरुआत",
    image: "assets/agarbati_arti.png",
  },
  {
    id: 4,
    title: "धूपम आरती",
    description: "धूप से आरती",
    image: "assets/arti_step2.jpg",
  },
  {
    id: 5,
    title: "नाग आरती",
    description: "विशेष पूजा",
    image: "assets/naag_arti.png",
  },
  {
    id: 6,
    title: "झार आरती",
    description: "परंपरागत आरती",
    image: "assets/jhar_arti.png",
  },
  {
    id: 7,
    title: "मंगल आर्शीवाद मंत्र",
    description: "आर्शीवाद प्राप्ति",
    image: "assets/arti_image.jpg",
  },
];

const AartiSteps = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f4", py: 2 }}>
      <div className="py-12 px-4 sm:px-8 lg:px-16">
        <h1 className="text-5xl text-center font-bold mb-12 text-yellow-700 font-hindi">
          गंगा आरती के चरण
        </h1>

        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={4} key={step.id}>
              <motion.div
                className="text-center p-6 bg-white rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.img
                  src={step.image}
                  alt={step.title}
                  className="mx-auto mb-4 w-32 h-32 sm:w-40 sm:h-40 object-contain rounded-lg"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                  }}
                />
                <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-500 font-hindi mb-2">
                  {step.title}
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 font-hindi">
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <motion.div
                  className="mt-8 mx-auto w-8 h-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-gray-800"
                    animate={{ x: [0, 10, 0] }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </motion.svg>
                </motion.div>
              )}
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
};

export default AartiSteps;
