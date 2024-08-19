"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Collapse,
} from "@mui/material";
import { styled } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/navigation";

// Styled component for the CardMedia to handle the image zoom effect
const ZoomCardMedia = styled(CardMedia)(({ theme }) => ({
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const services = [
  {
    image:
      "https://media.istockphoto.com/id/1044399860/photo/ganga-arthi-in-the-holy-city-of-rishikesh-in-uttarakhand-india-to-worship-river-ganga-ganges.jpg?s=612x612&w=0&k=20&c=699WoUWUOKCVzRWOG1mT1dMD7kqQWsQ76-37a_ws5BA=",
    title: "Ganga Aarti Event Planning",
    description:
      "Make your Ganga Aarti event unforgettable with our expert planning service. At Ganga Aarti Event, we specialize in creating meaningful experiences along the sacred Ganges River. Whether it's a wedding, a corporate event, birthday party or a private gathering, our dedicated team is here to bring your vision to life. We pay attention to every detail, ensuring that your event is exceptional and filled with cultural and spiritual significance. With a deep understanding of the cultural and spiritual importance of the Ganga Aarti, we craft events that resonate with profound meaning and reverence. Let us guide you in creating a truly transformative and memorable Ganga Aarti event that reflects the essence of this timeless tradition.",
  },
  {
    image:
      "https://media.istockphoto.com/id/1044399860/photo/ganga-arthi-in-the-holy-city-of-rishikesh-in-uttarakhand-india-to-worship-river-ganga-ganges.jpg?s=612x612&w=0&k=20&c=699WoUWUOKCVzRWOG1mT1dMD7kqQWsQ76-37a_ws5BA=",
    title: "Ganga Aarti Event Planning",
    description:
      "Make your Ganga Aarti event unforgettable with our expert planning service. At Ganga Aarti Event, we specialize in creating meaningful experiences along the sacred Ganges River. Whether it's a wedding, a corporate event, birthday party or a private gathering, our dedicated team is here to bring your vision to life. We pay attention to every detail, ensuring that your event is exceptional and filled with cultural and spiritual significance. With a deep understanding of the cultural and spiritual importance of the Ganga Aarti, we craft events that resonate with profound meaning and reverence. Let us guide you in creating a truly transformative and memorable Ganga Aarti event that reflects the essence of this timeless tradition.",
  },
  {
    image:
      "https://media.istockphoto.com/id/1044399860/photo/ganga-arthi-in-the-holy-city-of-rishikesh-in-uttarakhand-india-to-worship-river-ganga-ganges.jpg?s=612x612&w=0&k=20&c=699WoUWUOKCVzRWOG1mT1dMD7kqQWsQ76-37a_ws5BA=",
    title: "Ganga Aarti Event Planning",
    description:
      "Make your Ganga Aarti event unforgettable with our expert planning service. At Ganga Aarti Event, we specialize in creating meaningful experiences along the sacred Ganges River. Whether it's a wedding, a corporate event, birthday party or a private gathering, our dedicated team is here to bring your vision to life. We pay attention to every detail, ensuring that your event is exceptional and filled with cultural and spiritual significance. With a deep understanding of the cultural and spiritual importance of the Ganga Aarti, we craft events that resonate with profound meaning and reverence. Let us guide you in creating a truly transformative and memorable Ganga Aarti event that reflects the essence of this timeless tradition.",
  },

  // Add more services as needed
];

const ServiceCard = ({ service }) => {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleBookNow = () => {
    router.push("/booking"); // Navigate to the booking page
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: 3,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
      }}
    >
      <ZoomCardMedia
        component="img"
        image={service.image}
        alt={service.title}
        sx={{ height: 200 }} // Increased image height
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {service.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {expanded
            ? service.description
            : `${service.description.substring(0, 200)}...`}
          {!expanded && (
            <Button
              onClick={handleExpandClick}
              endIcon={<ExpandMoreIcon />}
              sx={{ textTransform: "none", mt: 1 }}
            >
              Read More
            </Button>
          )}
        </Typography>
        <Collapse in={expanded}>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              {service.description.substring(200)}
            </Typography>
            <Button
              onClick={handleExpandClick}
              sx={{ textTransform: "none", mt: 1 }}
            >
              Show Less
            </Button>
          </Box>
        </Collapse>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            variant="contained"
            onClick={handleBookNow}
            sx={{
              backgroundColor: "green !important",
              "&:hover": {
                backgroundColor: "darkgreen !important",
              },
            }}
          >
            Book Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const ServiceCards = () => {
  return (
    <Box
      sx={{ backgroundColor: "#f4f4f4", mx: "auto", maxWidth: "1200px", p: 3 }}
      id="services-section"
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          gutterBottom
          sx={{ color: "black", fontSize: "24px", mt: 10 }}
        >
          <b>SERVICES</b>
        </Typography>
        <Typography variant="h6" component="p" color={"green"}>
          Explore Our Services
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{ flex: "1 1 calc(33.333% - 1rem)", boxSizing: "border-box" }}
          >
            <ServiceCard service={service} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ServiceCards;
