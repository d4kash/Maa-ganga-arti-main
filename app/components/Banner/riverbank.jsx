import { motion } from "framer-motion";
import "./RiverAnimation.css"; // Import the CSS file for wave animation

const RiverWithBankAndRocks = () => (
  <div className="relative w-full h-1/3 overflow-hidden">
    {/* Flowing River Layer 1 */}
    <motion.div
      className="absolute bottom-0 left-0 w-full h-full"
      initial={{ backgroundPositionX: "0%" }}
      animate={{ backgroundPositionX: "100%" }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundImage: "linear-gradient(120deg, #3b82f6 0%, #0ea5e9 100%)",
        backgroundSize: "200% 100%",
        opacity: 0.8,
      }}
    ></motion.div>

    {/* Flowing River Layer 2 */}
    <motion.div
      className="absolute bottom-0 left-0 w-full h-full"
      initial={{ backgroundPositionX: "100%" }}
      animate={{ backgroundPositionX: "0%" }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(59, 130, 246, 0.5) 0%, rgba(14, 165, 233, 0.5) 100%)",
        backgroundSize: "300% 100%",
        opacity: 0.6,
      }}
    ></motion.div>

    {/* Flowing River Layer 3 */}
    <motion.div
      className="absolute bottom-0 left-0 w-full h-full"
      initial={{ backgroundPositionX: "50%" }}
      animate={{ backgroundPositionX: "-50%" }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(59, 130, 246, 0.3) 0%, rgba(14, 165, 233, 0.3) 100%)",
        backgroundSize: "400% 100%",
        opacity: 0.4,
      }}
    ></motion.div>

    {/* Riverbank Left */}
    <div
      className="absolute bottom-0 left-0 w-1/12 h-full bg-green-800"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)" }}
    ></div>

    {/* Riverbank Right */}
    <div
      className="absolute bottom-0 right-0 w-1/12 h-full bg-green-800"
      style={{ clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 100%)" }}
    ></div>

    {/* River Rocks */}
    <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
      {/* Rock 1 */}
      <img
        src="./rock.svg" // Replace with your rock image or SVG path
        alt="Rock 1"
        className="absolute"
        style={{
          left: "20%",
          bottom: "10%",
          width: "10%",
          opacity: 0.8,
        }}
      />
      {/* Rock 2 */}
      <img
        src="./rock.svg" // Replace with your rock image or SVG path
        alt="Rock 2"
        className="absolute"
        style={{
          left: "50%",
          bottom: "5%",
          width: "15%",
          opacity: 0.6,
        }}
      />
      {/* Rock 3 */}
      <img
        src="./rock.svg" // Replace with your rock image or SVG path
        alt="Rock 3"
        className="absolute"
        style={{
          right: "10%",
          bottom: "20%",
          width: "12%",
          opacity: 0.7,
        }}
      />
      {/* Add more rocks as needed */}
    </div>

    {/* Wave Animation */}
    <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden">
      <div className="wave-container">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
      </div>
    </div>
  </div>
);

export default RiverWithBankAndRocks;
