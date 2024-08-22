"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { styled, keyframes } from "@mui/system";

// Keyframes for the scrolling animation
const scrollLeftToRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Styled component for scrolling text
const ScrollingText = styled(Box)(({ theme }) => ({
  whiteSpace: "nowrap",
  overflow: "hidden",
  position: "relative",
  animation: `${scrollLeftToRight} 50s linear infinite`,
  width: "400%", // Make the width twice the container width
  display: "flex",
  alignItems: "center",
  // padding: "10px 0",
}));

const ScrollPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "10%",
          maxWidth: "1200px",
          position: "relative",
          overflow: "hidden", // Ensure that the overflow is hidden on the container
        }}
      >
        <ScrollingText>
          <Typography variant="h4" component="div" sx={{ color: "#D20707" }}>
            Helpline no : 7079362685| For booking query call : 7870406788,
            8340116521 (08:00 Am to 10:00 PM) Whats app number : 7870406788|
          </Typography>
        </ScrollingText>
      </Box>
    </Box>
  );
};

export default ScrollPage;
