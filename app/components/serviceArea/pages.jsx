"use client";
import React from "react";
import { motion } from "framer-motion";

const ServiceAreas = () => {
  const areas = ["Jharkhand", "West Bengal", "Uttar Pradesh", "Bihar"];

  // Points for the snake-like curved dotted line
  const points = [
    { x: 15, y: 40, label: "Jharkhand" },
    { x: 35, y: 20, label: "West Bengal" },
    { x: 55, y: 40, label: "Uttar Pradesh" },
    { x: 75, y: 20, label: "Bihar" },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 bg-gradient-to-r from-indigo-200 to-indigo-400">
      {/* Left side: Service Areas */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-xl font-semibold text-gray-800 text-center md:text-left mb-3">
          Our Service Areas
        </h2>
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-3"
        >
          {areas.map((area, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-base font-medium text-gray-700 bg-blue-100 py-2 px-4 rounded-lg"
            >
              {area}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Center: Snake-like Curved Dotted Line */}
      <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 80"
          className="w-full max-w-lg"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Snake-like Curved Dotted Line */}
          <motion.path
            d="M14 45 C 25 6, 50 4, 50 40 S 90 60, 80 30"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ strokeDashoffset: 150 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2 }}
          />

          {/* Pointers */}
          {points.map((point, index) => (
            <motion.circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="2"
              fill="blue"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.5, duration: 0.5 }}
            />
          ))}

          {/* Labels */}
          {points.map((point, index) => (
            <text
              key={index}
              x={point.x}
              y={point.y + 5}
              textAnchor="middle"
              fill="black"
              fontSize="4"
              dy="1em"
            >
              {point.label}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default ServiceAreas;
