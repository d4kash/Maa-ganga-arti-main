"use client";
import React from "react";
import { motion } from "framer-motion";

const GangaAartiVideos = ({ videoUrl }) => {
  // Function to extract YouTube video ID from URL
  const extractYouTubeID = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoWrapperStyle = {
    position: "relative",
    paddingTop: "40px", // Added padding for the top for close button
    width: "100%",
    maxWidth: "100%",
  };

  const videoContainerStyle = {
    position: "relative",
    paddingBottom: "56.25%", // 16:9 aspect ratio
    height: 0,
    overflow: "hidden",
    width: "100%",
  };

  const iframeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
  };

  return (
    <div style={videoWrapperStyle}>
      {videoUrl.includes("youtu.be" || "youtube") ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={videoContainerStyle}
        >
          <iframe
            src={`https://www.youtube.com/embed/${extractYouTubeID(videoUrl)}`}
            style={iframeStyle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Selected Video"
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={videoContainerStyle}
        >
          <video src={videoUrl} style={iframeStyle} controls>
            Your browser does not support the video tag.
          </video>
        </motion.div>
      )}
    </div>
  );
};

export default GangaAartiVideos;
