"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { Fade } from "react-awesome-reveal";
// import BannerImage from "/assets/temple.jpeg";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import RiverWithBankAndRocks from "./riverbank";
// import FlowerShower from "./flowerShower";

import "../../globals.css";

// Styled component for responsive image container
const FixedImage = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 400, // Default height for larger screens
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 60,
  [theme.breakpoints.down("sm")]: {
    height: 300, // Height for smaller screens
  },
}));

const flowerImages = [
  "/flowers/flower1.png",
  "/flowers/flower2.png",
  "/flowers/flower3.png",
  "/flowers/flower4.png",
  "/flowers/flower5.png",
  "/flowers/flower6.png",
];

const Banner = () => {
  const [isClient, setIsClient] = useState(false);
  const [routerReady, setRouterReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      setRouterReady(true);
    }
  }, [isClient]);

  const handleBookNowClick = () => {
    if (routerReady) {
      router.push("/booking");
    }
  };

  if (!isClient) {
    // Optionally return null or a loading spinner while determining if it's client-side
    return null;
  }

  return (
    <div className="relative h-screen flex items-center justify-center p-8 overflow-hidden bg-gradient-to-r from-green-300 via-blue-300 to-indigo-300 z-10">
      {/* <RiverWithBankAndRocks /> */}

      {/* Floating Leaf */}
      <motion.img
        src="/assets/banana.png" // Replace with the path to your generated leaf image
        alt="Floating Leaf"
        className="absolute top-1/3 left-0 w-20 h-20 object-contain"
        initial={{ x: -100, y: 0, rotate: -20 }}
        animate={{
          x: ["-10%", "110%", "-10%"],
          y: ["0%", "20%", "0%"],
          rotate: [-20, 20, -20],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      {/* Second Leaf */}
      <motion.img
        src="/assets/flower1.png" // Replace with the path to your generated leaf image
        alt="Floating Leaf"
        className="absolute top-1/4 right-0 w-24 h-24 object-contain"
        initial={{ x: 100, y: -50, rotate: 10 }}
        animate={{
          x: ["110%", "-10%", "110%"],
          y: ["-10%", "10%", "-10%"],
          rotate: [10, -10, 10],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Third Leaf */}
      <motion.img
        src="/assets/flower2.png" // Replace with the path to your generated leaf image
        alt="Floating Leaf"
        className="absolute top-2/3 left-1/4 w-16 h-16 object-contain"
        initial={{ x: -250, y: -50, rotate: -15 }}
        animate={{
          x: ["-20%", "120%", "-20%"],
          y: ["10%", "-10%", "10%"],
          rotate: [-15, 15, -15],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      {/* Third Leaf */}
      <motion.img
        src="/assets/flower3.png" // Replace with the path to your generated leaf image
        alt="Floating Leaf"
        className="absolute top-2/3 left-1/4 w-16 h-16 object-contain"
        initial={{ x: 50, y: -50, rotate: -15 }}
        animate={{
          x: ["-20%", "120%", "-20%"],
          y: ["10%", "-10%", "10%"],
          rotate: [-15, 15, -15],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 bg-white rounded-lg shadow-xl p-6 w-full max-w-5xl flex flex-col lg:flex-row items-center">
        {/* Left Side Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <motion.h1
            className="text-6xl font-bold text-indigo-800 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ॐ नमः शिवाय
          </motion.h1>
          <motion.p
            className="text-small text-gray-400 mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            गांगे वारि मनोहारि मुरारि चरणच्युतम्।
            <br />
            त्रिपुरारिशिरश्चारि पापहारि पुनातु माम्।
          </motion.p>
          {/* <FlowerShower flowerImages={flowerImages} /> */}
          {/* Third Leaf */}
          <motion.img
            src="/assets/flower2.png" // Replace with the path to your generated leaf image
            alt="Floating Leaf"
            className="absolute top-2/3 left-1/4 w-16 h-16 object-contain"
            initial={{ x: -250, y: -50, rotate: -15 }}
            animate={{
              x: ["-20%", "120%", "-20%"],
              y: ["10%", "-10%", "10%"],
              rotate: [-15, 15, -15],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Right Side Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
          <motion.img
            src="/assets/banaras_bank.png"
            alt="Temple"
            className="w-full rounded-lg shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </div>
    // <div className="relative bg-gradient-to-r from-green-300 via-blue-300 to-indigo-300 h-screen flex items-center justify-center p-8">
    //   <div className="relative bg-white rounded-lg shadow-xl p-6 w-full max-w-5xl flex flex-col lg:flex-row items-center">
    //     {/* Left Side Content */}
    //     <div className="text-center lg:text-left lg:w-1/2">
    //       <motion.h1
    //         className="text-6xl font-bold text-indigo-800 mb-4"
    //         initial={{ opacity: 0, y: -50 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //       >
    //         मां नो ठ
    //       </motion.h1>
    //       <motion.p
    //         className="text-lg text-gray-700 mb-6"
    //         initial={{ opacity: 0, x: -50 }}
    //         animate={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 0.8, delay: 0.2 }}
    //       >
    //         बेले बेले मेटने द्रों में दे मोल मेटने मले
    //       </motion.p>
    //       <motion.button
    //         className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
    //         whileHover={{ scale: 1.1 }}
    //         whileTap={{ scale: 0.9 }}
    //       >
    //         SORVEM HER!
    //       </motion.button>
    //     </div>

    //     {/* Right Side Image */}
    //     <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
    //       <motion.img
    //         src="/assets/temple_background.png"
    //         alt="Temple"
    //         className="w-full rounded-lg shadow-lg"
    //         initial={{ scale: 0.8, opacity: 0 }}
    //         animate={{ scale: 1, opacity: 1 }}
    //         transition={{ duration: 0.8 }}
    //       />
    //     </div>
    //   </div>
    // </div>
    // <div className="relative max-w-7xl mx-auto">
    //   {/* Background Image */}
    //   <img
    //     src="/assets/temple_background.png"
    //     alt="Temple"
    //     className="w-full h-auto"
    //   />

    //   <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
    //     {/* Main Heading */}
    //     <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-4">
    //       ॐ नमो गंगे विश्वरूपिणी नारायणी नमो नमः।
    //     </h1>
    //     {/* Subheading */}
    //     <p className="text-lg md:text-2xl text-teal-300">
    //       गांगे वारि मनोहारि मुरारि चरणच्युतम्।
    //       <br />
    //       त्रिपुरारिशिरश्चारि पापहारि पुनातु माम्।
    //     </p>
    //   </div>
    // </div>
    // <Box
    //   id="home-section"
    //   sx={{ backgroundColor: "lightblue", py: { xs: 8, sm: 12 } }}
    // >
    //   <Container maxWidth="lg">
    //     <Grid container spacing={2} alignItems="center">
    //       <Grid item xs={12} md={6} mt={10}>
    //         <Fade
    //           direction={"up"}
    //           delay={400}
    //           cascade
    //           damping={1e-1}
    //           triggerOnce={true}
    //         >
    //           <Typography
    //             variant="h5"
    //             sx={{
    //               fontWeight: "bold",
    //               mb: 3,
    //               color: "green",
    //               textAlign: { xs: "center", md: "left" },
    //             }}
    //           >
    //             ॐ नमो गंगायै विश्वरुपिणी नारायणी नमो <br /> नम:।।
    //           </Typography>
    //         </Fade>
    //         <Fade
    //           direction={"up"}
    //           delay={800}
    //           cascade
    //           damping={1e-1}
    //           triggerOnce={true}
    //         >
    //           <Typography
    //             variant="body1"
    //             sx={{
    //               color: "grey",
    //               mb: 4,
    //               textAlign: { xs: "center", md: "left" },
    //             }}
    //           >
    //             गांगं वारि मनोहारि मुरारिचरणच्युतम् । <br />
    //             त्रिपुरारिशिरश्चारि पापहारि पुनातु माम् ॥
    //           </Typography>
    //         </Fade>
    //         <Fade
    //           direction={"up"}
    //           delay={1000}
    //           cascade
    //           damping={1e-1}
    //           triggerOnce={true}
    //         >
    //           <Box
    //             sx={{
    //               display: "flex",
    //               justifyContent: { xs: "center", md: "flex-start" },
    //             }}
    //           >
    //             {/* <Button
    //               variant="contained"
    //               color="primary" // Ensures proper text display
    //               sx={{
    //                 py: 2,
    //                 px: 4,
    //                 fontWeight: "medium",
    //                 borderRadius: "20px",
    //                 backgroundColor: "green", // Keeps the original button color
    //                 color: "primary.contrastText", // Ensures text visibility
    //                 boxShadow: 3,
    //                 "&:hover": {
    //                   backgroundColor: "secondary.dark", // Keeps the same color on hover
    //                   boxShadow: 6, // Enhances shadow on hover
    //                 },
    //                 transition: "all 0.3s ease",
    //               }}
    //               onClick={handleBookNowClick}
    //             >
    //               Book now
    //             </Button> */}

    //             {/* <Button
    //               variant="contained"
    //               color="primary"
    //               sx={{
    //                 py: 2,
    //                 px: 4,
    //                 fontWeight: "medium",
    //                 borderRadius: "20px", // Adjust this value as needed for desired roundness
    //                 // backgroundColor: "secondary.dark", // Ensure the button color matches your theme
    //                 backgroundColor: "primary.main", // Matches the primary color
    //                 color: "primary.contrastText",
    //                 boxShadow: 3, // Add shadow for a lifted effect
    //                 "&:hover": {
    //                   backgroundColor: "secondary.dark", // Darker shade on hover
    //                   boxShadow: 6, // Enhance shadow on hover
    //                 },
    //                 transition: "all 0.3s ease", // Smooth transition for hover effects
    //               }}
    //               onClick={handleBookNowClick}
    //             >
    //               Book now
    //             </Button> */}
    //           </Box>
    //         </Fade>
    //       </Grid>
    //       <Grid item xs={12} md={6} sx={{ mt: { xs: 4, md: 0 } }}>
    //         <FixedImage>
    //           <Image
    //             src="/assets/temple.jpeg"
    //             alt="Banner Image"
    //             layout="fill" // Use layout fill for responsive images
    //             objectFit="cover" // Ensure the image covers the container
    //           />
    //         </FixedImage>
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </Box>
  );
};

export default Banner;
