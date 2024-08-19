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

  return (
    <div>
      {videoUrl.includes("youtu.be" || "youtube") ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${extractYouTubeID(videoUrl)}`}
            width="100%"
            height="100%"
            frameBorder="0"
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
          style={{ height: "100%", width: "100%", position: "relative" }}
        >
          <video
            src={videoUrl}
            width="100%"
            height="100%"
            controls
            style={{ objectFit: "contain" }}
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
      )}
    </div>
  );
};

export default GangaAartiVideos;
