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
    // router.push("/booking"); // Navigate to the booking page
    router.push("/details"); // Navigate to the service detail page
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
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
          {/* <img
            className="w-full h-48 object-cover object-center"
            src={service.photo}
            alt={service.service_name}
          /> */}
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {service.service_name}{" "}
            </h2>
            <p className="mt-2 text-gray-600">
              {service.description}
              {"..."}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold text-green-500"></span>
              <button
                onClick={handleBookNow}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        {/* <Typography variant="h6" component="div" gutterBottom>
          {service.service_name}{" "}
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
          </Button> */}
        {/* </Box> */}
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
      {/* <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}> */}
      <div className="h-min flex items-center justify-center p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>

      {/* </Box> */}
    </Box>
  );
};

export default ServiceCards;
