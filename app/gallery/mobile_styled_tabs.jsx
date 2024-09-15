"use client";

import React, { useState } from "react";
import { Box, IconButton, Tab, Tabs } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MobileTabs = ({ tabLabels, value, handleTabChange }) => {
  const [tabIndex, setTabIndex] = useState(0); // Track the visible tabs' start index

  const handleTabNavigation = (direction) => {
    if (direction === "left" && tabIndex > 0) {
      setTabIndex(tabIndex - 1);
    } else if (direction === "right" && tabIndex < tabLabels.length - 1) {
      setTabIndex(tabIndex + 1);
    }
  };

  // Determine the tabs to display based on tabIndex
  const displayedTabs = tabLabels.slice(tabIndex, tabIndex + 3); // Show 3 tabs at a time

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflowX: "auto", // Enable horizontal scrolling if necessary
        width: "100%",
      }}
    >
      <IconButton
        onClick={() => handleTabNavigation("left")}
        disabled={tabIndex === 0}
        sx={{ visibility: tabIndex === 0 ? "hidden" : "visible" }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <Box sx={{ flexGrow: 1, overflowX: "auto" }}>
        <Tabs
          value={value}
          onChange={handleTabChange}
          centered
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& .MuiTab-root": {
              minWidth: 100, // Minimum width for each tab
              fontSize: "0.8rem", // Smaller font size for mobile
              padding: "8px 12px", // Padding adjustments
            },
            "& .MuiTabs-indicator": {
              display: "none", // Hide default indicator
            },
          }}
        >
          {displayedTabs.map((tab, index) => (
            <Tab key={tab} label={tab} value={tab} />
          ))}
        </Tabs>
      </Box>
      <IconButton
        onClick={() => handleTabNavigation("right")}
        disabled={tabIndex >= tabLabels.length - 3}
        sx={{
          visibility: tabIndex >= tabLabels.length - 3 ? "hidden" : "visible",
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default MobileTabs;
