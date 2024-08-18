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

const extractYouTubeID = (url) => {
  const urlObj = new URL(url);
  const videoId =
    urlObj.searchParams.get("v") || urlObj.pathname.split("/").pop();
  return videoId;
};

const galleryData = {
  All: [
    {
      src: "https://eastindiantraveller.com/wp-content/uploads/2020/10/fb_img_1602601852796-1.jpg", // Local image path
      category: "Ganga Aarti Event",
    },
    {
      src: "https://media.istockphoto.com/id/1241318411/photo/divine-ganga-aarti-yagna-at-rishikesh.jpg?s=612x612&w=0&k=20&c=6kyI1QsjTSVMlcv7jews6kKzPndDet7ItLs6G-gUkaA=", // Local image path
      category: "Ganga Aarti Event Wedding",
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=5X_cMif5qPM",
      category: "Ganga Aarti Video",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGvR5z8MCRoTYCsK58B-IAq9PlKtTj-fnTGw&s", // Local image path
      category: "All Other Events",
    },
  ],
  "Ganga Aarti Event": [
    {
      src: "https://eastindiantraveller.com/wp-content/uploads/2020/10/fb_img_1602601852796-1.jpg", // Local image path
      category: "Ganga Aarti Event",
    },
  ],
  "Ganga Aarti Event Wedding": [
    {
      src: "https://media.istockphoto.com/id/1241318411/photo/divine-ganga-aarti-yagna-at-rishikesh.jpg?s=612x612&w=0&k=20&c=6kyI1QsjTSVMlcv7jews6kKzPndDet7ItLs6G-gUkaA=", // Local image path
      category: "Ganga Aarti Event Wedding",
    },
  ],
  "Ganga Aarti Video": [
    {
      videoUrl: "https://youtu.be/5X_cMif5qPM?si=d3fEfL7_8X3ahk2H",
      category: "Ganga Aarti Video",
    },
  ],
  "All Other Events": [
    {
      src: "https://www.tripsavvy.com/thmb/LHJXVkYNzRdpcyn4QryPjnsQxoM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-134642772-591a84865f9b58f4c03a7f2e.jpg", // Local image path
      category: "All Other Events",
    },
  ],
};

const Gallery = () => {
  const [value, setValue] = useState("All");
  const [open, setOpen] = useState(false);
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

  const handleTabNavigation = (direction) => {
    if (direction === "left") {
      setTabIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (direction === "right") {
      setTabIndex((prevIndex) => Math.min(prevIndex + 1, 2)); // Adjust according to the number of tabs
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
        <Typography variant="h4" sx={{ mb: 2, textAlign: "center", mt: 10 }}>
          Ganga Aarti Event Photo Gallery
        </Typography>

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
              <Card
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "250px",
                }}
                onClick={() =>
                  handleOpen({
                    src: item.src,
                    type: item.videoUrl ? "video" : "image",
                    videoUrl: item.videoUrl,
                  })
                }
              >
                {item.videoUrl ? (
                  <CardMedia
                    component="img"
                    height="200"
                    image={`https://img.youtube.com/vi/${extractYouTubeID(
                      item.videoUrl
                    )}/hqdefault.jpg`}
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
            </Grid>
          ))}
        </Grid>

        <Modal
          open={open}
          onClose={handleClose}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "90%",
              maxWidth: "900px",
              height: "90%",
              overflow: "hidden",
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                color: "white",
              }}
            >
              <CloseIcon />
            </IconButton>

            {selectedMedia.type === "video" ? (
              <iframe
                src={`https://www.youtube.com/embed/${extractYouTubeID(
                  selectedMedia.videoUrl
                )}`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Selected Video"
              />
            ) : (
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={selectedMedia.src}
                  alt="Selected"
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            )}
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default Gallery;
