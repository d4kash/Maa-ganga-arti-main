// components/StepCard.jsx
import { motion } from "framer-motion";
// import { FaConchShell, FaFeather, FaIncense, FaFlower } from "react-icons/fa"; // Example icons

// Define a mapping for icons based on step title or type
// const iconMapping = {
//   "Groom’s Entry with Shankhwadan": <FaConchShell size={24} />,
//   "Morpankh Aarti": <FaFeather size={24} />,
//   "Agarbatti Aarti": <FaIncense size={24} />,
//   "Pushpam Aarti": <FaFlower size={24} />,
//   // Add more mappings as needed
// };

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const slideVariants = {
  hidden: { width: "0%" },
  visible: { width: "100%" },
};

const StepCard = ({ stepNumber, title, description, purpose }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-4 md:p-6 mb-4 md:mb-6 hover:shadow-2xl transition-shadow duration-300"
      variants={stepVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center mb-4">
        {/* <div className="flex-shrink-0 text-blue-500 mr-4"> */}
        {/* {iconMapping[title] || <FaConchShell size={24} />}{" "} */}
        {/* Default icon */}
        {/* </div> */}
        <h2 className="text-xl md:text-2xl font-semibold text-indigo-800">
          {title}
        </h2>
        {/* Slide bar below the title */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-blue-500"
          variants={slideVariants}
          initial="hidden"
          whileHover="visible"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          whileTap={{ width: "100%" }} // Ensures it slides in on tap for mobile
        />
      </div>
      <p className="text-gray-600 text-sm md:text-base">{description}</p>
      <p className="text-gray-500 italic text-xs md:text-sm mt-2">
        Purpose: {purpose}
      </p>
    </motion.div>
  );
};

export default StepCard;
