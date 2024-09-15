"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { styled, keyframes, ThemeProvider, createTheme } from "@mui/system";

// Define the custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#D20707", // Custom primary color
    },
    background: {
      default: "#f0f0f0", // Custom background color
    },
  },
  typography: {
    h4: {
      fontSize: "2rem",
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: "1.2rem", // Adjust font size for smaller screens
      },
    },
  },
});

// Keyframes for the scrolling animation
const scrollLeftToRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Styled component for scrolling text
const ScrollingText = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap",
  overflow: "hidden",
  position: "relative",
  animation: `${scrollLeftToRight} 20s linear infinite`, // Adjusted duration for smoother scrolling
  "&:hover": {
    animationPlayState: "paused", // Pause animation on hover
  },
  width: "200vw", // Ensure width is enough to fit both text copies with extra space
}));

const ScrollPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.palette.background.default,
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
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  color: theme.palette.primary.main,
                  paddingRight: "50px", // Spacing between text elements
                }}
              >
                Helpline no : 7079362685 | For booking query call : 7870406788,
                8340116521 (08:00 AM to 10:00 PM) | WhatsApp number : 7870406788
                |
              </Typography>
              {/* Duplicate the content for seamless scrolling */}
              <Typography
                variant="h4"
                component="div"
                sx={{
                  color: theme.palette.primary.main,
                  paddingRight: "50px", // Spacing between text elements
                }}
              >
                For booking query call: 7870406788, 8340116521 | WhatsApp number
                : 7870406788 |
              </Typography>
            </Box>
          </ScrollingText>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ScrollPage;
