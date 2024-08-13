"use client";

import React from "react";
import Slider from "react-slick";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled component for the Avatar to center it inside the card
const CenteredAvatar = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  margin: "0 auto",
}));

const clients = [
  {
    name: "John Doe",
    profession: "Software Engineer",
    message:
      "This service exceeded my expectations. The attention to detail and professionalism were remarkable.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Jane Smith",
    profession: "Graphic Designer",
    message:
      "A fantastic experience from start to finish. Highly recommend to anyone looking for top-notch service.",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Alice Johnson",
    profession: "Marketing Specialist",
    message:
      "Professional and reliable. The service delivered exactly what was promised and more.",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Bob Brown",
    profession: "Project Manager",
    message:
      "An exceptional team with great communication. They made the whole process seamless and enjoyable.",
    image: "https://i.pravatar.cc/150?img=4",
  },
  // Add more clients as needed
];

const ClientCard = ({ client }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: 3,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
        textAlign: "center",
      }}
    >
      <CardContent>
        <CenteredAvatar src={client.image} alt={client.name} />
        <Typography variant="h6" component="div" sx={{ mt: 2 }}>
          {client.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {client.profession}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          {client.message}
        </Typography>
      </CardContent>
    </Card>
  );
};

const OurClients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ mx: "auto", maxWidth: "1200px", p: 3 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Clients
        </Typography>
        <Typography variant="h6" component="p" color={"green"}>
          Hear what our clients have to say
        </Typography>
      </Box>
      <Slider {...settings}>
        {clients.map((client, index) => (
          <Box key={index} px={2}>
            <ClientCard client={client} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default OurClients;
