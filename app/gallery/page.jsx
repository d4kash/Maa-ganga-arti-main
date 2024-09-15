"use client";

import React, { useState } from "react";
import {
  Box,
  Grid,
  Tabs,
  Tab,
  Typography,
  Modal,
  IconButton,
  Card,
  CardMedia,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import GangaAartiVideos from "./video";
import { motion } from "framer-motion";

const extractYouTubeID = (url) => {
  const urlObj = new URL(url);
  const videoId =
    urlObj.searchParams.get("v") || urlObj.pathname.split("/").pop();
  return videoId;
};

const galleryData = {
  All: [
    {
      src: "https://eastindiantraveller.com/wp-content/uploads/2020/10/fb_img_1602601852796-1.jpg",
      category: "Ganga Aarti Event",
    },
    {
      src: "https://media.istockphoto.com/id/1241318411/photo/divine-ganga-aarti-yagna-at-rishikesh.jpg?s=612x612&w=0&k=20&c=6kyI1QsjTSVMlcv7jews6kKzPndDet7ItLs6G-gUkaA=",
      category: "Ganga Aarti Event Wedding",
    },
    {
      videoUrl: "https://youtu.be/5X_cMif5qPM?si=d3fEfL7_8X3ahk2H",
      category: "Ganga Aarti Video",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGvR5z8MCRoTYCsK58B-IAq9PlKtTj-fnTGw&s",
      category: "All Other Events",
    },
    {
      src: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/WhatsApp+Image+2024-08-18+at+11.04.51+PM+(1).jpeg",
      category: "Ganga Aarti Event",
    },
    {
      src: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/WhatsApp+Image+2024-08-18+at+11.04.50+PM.jpeg",
      category: "Ganga Aarti Event",
    },
    {
      src: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/WhatsApp+Image+2024-08-18+at+10.26.08+PM.jpeg",
      category: "Ganga Aarti Event",
    },
    {
      src: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/WhatsApp+Image+2024-08-18+at+11.04.50+PM+(1).jpeg",
      category: "Ganga Aarti Event",
    },
    {
      src: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/WhatsApp+Image+2024-08-18+at+10.26.07+PM.jpeg",
      category: "Ganga Aarti Event",
    },
  ],
  "Ganga Aarti Event": [
    {
      src: "https://eastindiantraveller.com/wp-content/uploads/2020/10/fb_img_1602601852796-1.jpg",
      category: "Ganga Aarti Event",
    },

    {
      src: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/WhatsApp+Image+2024-08-18+at+11.04.51+PM+(1).jpeg",
      category: "Ganga Aarti Event",
    },
    {
      src: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/WhatsApp+Image+2024-08-18+at+11.04.50+PM.jpeg",
      category: "Ganga Aarti Event",
    },
    {
      src: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/WhatsApp+Image+2024-08-18+at+10.26.08+PM.jpeg",
      category: "Ganga Aarti Event",
    },
    {
      src: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/WhatsApp+Image+2024-08-18+at+11.04.50+PM+(1).jpeg",
      category: "Ganga Aarti Event",
    },
    {
      src: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/WhatsApp+Image+2024-08-18+at+10.26.07+PM.jpeg",
      category: "Ganga Aarti Event",
    },
    {
      src: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/SGCAM_20231121_1304204020.PORTRAIT.jpg",
      category: "Ganga Aarti Event",
    },
    {
      src: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/1722426285538.jpg",
      category: "Ganga Aarti Event",
    },
    {
      src: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/IMG_20240209_214936.jpg",
      category: "Ganga Aarti Event",
    },
    {
      src: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/1722426077921.jpg",
      category: "Ganga Aarti Event",
    },
  ],
  "Ganga Aarti Event Wedding": [
    {
      src: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/wedding_1.jpeg",
      category: "Ganga Aarti Event Wedding",
    },
    {
      src: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/wedding_2.jpeg",
      category: "Ganga Aarti Event Wedding",
    },
    {
      src: "https://media.istockphoto.com/id/1241318411/photo/divine-ganga-aarti-yagna-at-rishikesh.jpg?s=612x612&w=0&k=20&c=6kyI1QsjTSVMlcv7jews6kKzPndDet7ItLs6G-gUkaA=",
      category: "Ganga Aarti Event Wedding",
    },
    {
      src: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/wedding-service.png",
      category: "Ganga Aarti Event Wedding",
    },
    {
      src: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/wedding_service2.png",
      category: "Ganga Aarti Event Wedding",
    },
  ],
  "Ganga Aarti Video": [
    {
      videoUrl: "https://youtu.be/5X_cMif5qPM?si=d3fEfL7_8X3ahk2H",
      category: "Ganga Aarti Video",
    },
    {
      videoUrl:
        "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/WhatsApp+Video+2024-08-18+at+10.25.07+PM.mp4",
      category: "Ganga Aarti Video",
    },
  ],
  "All Other Events": [
    {
      src: "https://www.tripsavvy.com/thmb/LHJXVkYNzRdpcyn4QryPjnsQxoM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-134642772-591a84865f9b58f4c03a7f2e.jpg",
      category: "All Other Events",
    },
  ],
};

const Gallery = () => {
  const [value, setValue] = useState("All");
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMedia, setSelectedMedia] = useState({
    src: "",
    type: "",
    videoUrl: "",
  });
  const [tabIndex, setTabIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpen = (media) => {
    setSelectedMedia(media);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMedia({ src: "", type: "", videoUrl: "" });
  };

  // Function to handle "Next" image
  const handleNext = () => {
    const newIndex = (currentIndex + 1) % galleryData[value].length; // Loop to the first image
    const nextMedia = galleryData[value][newIndex];
    setSelectedMedia({
      ...nextMedia,
      type: nextMedia.videoUrl ? "video" : "image",
    });
    setCurrentIndex(newIndex);
  };

  // Function to handle "Previous" image
  const handlePrev = () => {
    const newIndex =
      (currentIndex - 1 + galleryData[value].length) %
      galleryData[value].length; // Loop to the last image
    const prevMedia = galleryData[value][newIndex];
    setSelectedMedia({
      ...prevMedia,
      type: prevMedia.videoUrl ? "video" : "image",
    });
    setCurrentIndex(newIndex);
  };

  const handleTabNavigation = (direction) => {
    if (direction === "left") {
      setTabIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (direction === "right") {
      setTabIndex((prevIndex) => Math.min(prevIndex + 1, 2));
    }
  };

  const visibleTabs = [
    "All",
    "Ganga Aarti Event",
    "Ganga Aarti Event Wedding",
    "Ganga Aarti Video",
    "All Other Events",
  ];
  const displayedTabs = isMobile
    ? visibleTabs.slice(tabIndex * 2, tabIndex * 2 + 2)
    : visibleTabs;

  return (
    <>
      <Box sx={{ p: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              textAlign: "center",
              mt: 10,
              color: "#3f51b5", // Add a nice color
              fontWeight: "bold", // Make the text bold
              letterSpacing: "0.05em", // Add a bit of letter spacing for a polished look
            }}
          >
            Shree Narayan Ganga Aarti Event Photo Gallery
          </Typography>
        </motion.div>

        {isMobile && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              onClick={() => handleTabNavigation("left")}
              disabled={tabIndex === 0}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }}>
              <Tabs value={value} onChange={handleTabChange} centered>
                {displayedTabs.map((tab) => (
                  <Tab key={tab} label={tab} value={tab} />
                ))}
              </Tabs>
            </Box>
            <IconButton
              onClick={() => handleTabNavigation("right")}
              disabled={tabIndex >= 2}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        )}

        {!isMobile && (
          <Tabs
            value={value}
            onChange={handleTabChange}
            centered
            sx={{ mb: 2 }}
          >
            <Tab label="All" value="All" />
            <Tab label="Ganga Aarti Event" value="Ganga Aarti Event" />
            <Tab
              label="Ganga Aarti Event Wedding"
              value="Ganga Aarti Event Wedding"
            />
            <Tab label="Ganga Aarti Video" value="Ganga Aarti Video" />
            <Tab label="All Other Events" value="All Other Events" />
          </Tabs>
        )}

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {galleryData[value].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  handleOpen({
                    src: item.src,
                    type: item.videoUrl ? "video" : "image",
                    videoUrl: item.videoUrl,
                    index: index, // Add the index for navigation
                  });
                }}
              >
                <Card
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "250px",
                  }}
                >
                  {item.videoUrl ? (
                    <CardMedia
                      component="img"
                      height="200"
                      image={
                        item.videoUrl.includes("youtu.be" || "youtube")
                          ? `https://img.youtube.com/vi/${extractYouTubeID(
                              item.videoUrl
                            )}/hqdefault.jpg`
                          : "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/wedding_service2.png"
                      }
                      alt="Gallery Video Thumbnail"
                    />
                  ) : (
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.src}
                      alt="Gallery Image"
                    />
                  )}
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropProps={{
            timeout: 500,
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "900px",
              height: "90%",
              backgroundColor: "white",
              boxShadow: 24,
              overflow: "hidden",
              borderRadius: "8px",
              padding: "16px",
              zIndex: 10,
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                color: "black",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.1)", // Subtle hover effect
                },
                zIndex: 10,
              }}
            >
              <CloseIcon />
            </IconButton>

            {selectedMedia.type === "video" ? (
              <GangaAartiVideos
                videoUrl={selectedMedia.videoUrl}
                type="video"
              />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ height: "100%", width: "100%", position: "relative" }}
              >
                <Image
                  src={selectedMedia.src}
                  alt="Selected"
                  layout="fill"
                  objectFit="contain"
                />

                {/* Next/Previous Navigation Buttons */}
                <IconButton
                  onClick={handlePrev}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: 10,
                    transform: "translateY(-50%)",
                    color: "white",
                    backgroundColor: "rgba(0,0,0,0.3)", // Always visible with low opacity
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.7)", // Prominent hover effect
                    },
                  }}
                >
                  <ArrowBackIosIcon />
                </IconButton>

                <IconButton
                  onClick={handleNext}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: 10,
                    transform: "translateY(-50%)",
                    color: "white",
                    backgroundColor: "rgba(0,0,0,0.3)", // Always visible with low opacity
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.7)", // Prominent hover effect
                    },
                  }}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </motion.div>
            )}
          </motion.div>
        </Modal>
      </Box>
    </>
  );
};

export default Gallery;
