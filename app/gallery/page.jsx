"use client";

import React, { useEffect, useState } from "react";
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
import axios from "axios";

const extractYouTubeID = (url) => {
  const urlObj = new URL(url);
  const videoId =
    urlObj.searchParams.get("v") || urlObj.pathname.split("/").pop();
  return videoId;
};

const Gallery = () => {
  const [value, setValue] = useState("all");
  const [galleryData, setGalleryData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    setIsLoading(true);
    // console.log("galleryData loading state", isLoading);
    fetchImageData();
    // console.log("galleryData", galleryData);
  }, [value]);

  const fetchImageData = async (append = false) => {
    // console.log("value.toLowerCase(),", value.toLowerCase());
    setIsLoading(true); // Show loading state while fetching data
    try {
      const response = await axios.post(
        "https://4qd3pylxd4.execute-api.ap-south-1.amazonaws.com/gallery/getImage",
        {
          type: value.toLowerCase(),
        }
      );
      const data = response.data["body-json"]["body"];
      // console.log("gallery data:", data);
      // Determine the key to update based on 'value'
      const keyToUpdate = value.toLowerCase();

      // Reset the data for the selected tab (no appending)
      if (data.length === 0) {
        // console.log("No data available for this tab");
      }

      // Update the gallery data for the current tab, whether empty or not
      setGalleryData((prevData) => ({
        ...prevData,
        [value.toLowerCase()]: data,
      }));
      setIsLoading(false);
      // setIsDataLoading(false);
    } catch (error) {
      // console.log("Error fetching project list:", error);
      setIsLoading(false);
      // setIsDataLoading(false);
    }
  };

  // utils/getThumbnailUrl.js
  const getThumbnailUrl = (videoUrl) => {
    // Check if the input is a valid URL
    if (typeof videoUrl !== "string") {
      return "Invalid URL";
    }

    // Split the video URL to get the base name and extension
    const baseName = videoUrl.split(".");
    if (baseName.length < 2) {
      return "Invalid URL format";
    }
    const fileName = baseName.slice(0, -1).join(".").replace(/ /g, "+"); // Replace spaces with '+'

    // Create the thumbnail URL
    const thumbnailUrl = `${fileName}_thumbnail.png`;
    console.log("thumbnail url: ", thumbnailUrl);

    // const thumbnailUrl = `${baseName.slice(0, -1).join('.')}_thumbnail.${baseName[baseName.length - 1]}`;

    // Return the modified thumbnail URL
    return thumbnailUrl;
  };

  const handleThumbnailError = (event) => {
    // Set a fallback image URL
    event.target.src =
      "https://ganga-arti.s3.ap-south-1.amazonaws.com/Video/wedding_service2.png";
  };

  const handleTabChange = (event, newValue) => {
    setIsLoading(true);
    // Update the selected tab
    setValue(newValue);

    // Call API immediately after changing the tab
    fetchImageData(newValue);
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

  return isLoading ? (
    <div className="flex justify-center items-center h-screen">
      <svg
        className="animate-spin  h-10 w-10"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
    </div>
  ) : (
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
            <Tab label="All" value="all" />
            <Tab label="Ganga Aarti Event" value="ganga_aarti_event" />
            <Tab
              label="Ganga Aarti Event Wedding"
              value="ganga_aarti_wedding"
            />
            <Tab label="Ganga Aarti Video" value="ganga_aarti_video" />
            <Tab label="All Other Events" value="other" />
          </Tabs>
        )}

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {galleryData[value] && galleryData[value].length > 0 ? (
            galleryData[value].map((item, index) => (
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
                  style={{ position: "relative", overflow: "hidden" }} // Position relative for overlay
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
                            : getThumbnailUrl(item.videoUrl)
                          // : "https://ganga-arti.s3.ap-south-1.amazonaws.com/Video/wedding_service2.png"
                        }
                        // onError={handleThumbnailError}
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

                  {/* Overlay for media type */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.5)", // Black transparent overlay
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      "&:hover": {
                        opacity: 1, // Make it visible on hover
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ color: "white", textAlign: "center" }}
                    >
                      {item.videoUrl ? "Video" : "Image"}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))
          ) : (
            <div>No data for {value} tab</div>
          )}
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
