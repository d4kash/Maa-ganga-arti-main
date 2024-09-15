"use clients";

import { Tab, Tabs } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const StyledTabs = ({ value, handleChange }) => {
  const tabLabels = [
    "All",
    "Ganga Aarti Event",
    "Ganga Aarti Event Wedding",
    "Ganga Aarti Video",
    "All Other Events",
  ];

  return (
    <Tabs
      value={value} // Using the index of the selected tab
      onChange={handleChange} // Handles tab change on click
      centered
      variant="scrollable" // Makes tabs scrollable on smaller screens
      scrollButtons="auto" // Shows scroll buttons automatically if needed
      allowScrollButtonsMobile
      sx={{
        mt: 4, // Margin at the top
        mb: 4, // Margin at the bottom
        "& .MuiTab-root": {
          padding: {
            xs: "8px 12px", // Smaller padding on small screens
            sm: "12px 20px", // Larger padding on medium+ screens
          },
          fontWeight: "bold", // Bold text for better readability
          textTransform: "none", // Keep the label as typed
          transition: "all 0.3s ease", // Smooth transition for hover effect
          borderRadius: "12px", // Rounded corners
          minWidth: {
            xs: "100px", // Minimum width for tabs on smaller screens
            sm: "150px", // Larger width on bigger screens
          },
          fontSize: {
            xs: "0.8rem", // Smaller font on smaller screens
            sm: "1rem", // Regular font size on larger screens
          },
          "&:hover": {
            backgroundColor: "#f5f5f5", // Light hover background
            color: "#3f51b5", // Text color change on hover
          },
          "&.Mui-selected": {
            backgroundColor: "#3f51b5", // Background color when selected
            color: "#ffffff", // White text when selected
            fontWeight: "bold",
          },
        },
        "& .MuiTabs-indicator": {
          display: "none", // Hide default indicator
        },
      }}
    >
      {tabLabels.map((label, index) => (
        <motion.div
          key={label}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Tab label={label} value={index} />
        </motion.div>
      ))}
    </Tabs>
  );
};

export default StyledTabs;
