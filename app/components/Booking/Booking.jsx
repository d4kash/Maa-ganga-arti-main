"use client";

import React, { useState, useEffect } from "react";
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
import axios from "axios";

// Styled component for the CardMedia to handle the image zoom effect
const ZoomCardMedia = styled(CardMedia)(({ theme }) => ({
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

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
        image={service.photo} // Updated to use photo from API response
        alt={service.service_name}
        sx={{ height: 200 }} // Increased image height
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {service.service_name}{" "}
          {/* Updated to use service_name from API response */}
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
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "https://mmngrm2h3i.execute-api.ap-south-1.amazonaws.com/gangaArti/get_service"
        );
        setServices(response.data["body-json"]["body"]["Items"]);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <Box sx={{ mx: "auto", maxWidth: "1200px", p: 3 }} id="services-section">
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography gutterBottom sx={{ color: "black", fontSize: "24px" }}>
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
