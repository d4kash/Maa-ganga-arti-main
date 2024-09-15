"use client";

import React from "react";
import Slider from "react-slick";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const images = [
  {
    src: "/assets/jayamala_with_aarti.webp",
    alt: "Engagement shreenarayan ganga aarti",
  },
  {
    src: "/assets/durga_puja.webp",
    alt: "durga puja shree narayan ganga aarti",
  },
  {
    src: "/assets/wedding_ai2.webp",
    alt: "wedding shreenarayan ganga aarti",
  },
  // Add more images as needed
];

const AboutUs = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <Box sx={{ backgroundColor: "#f4f4f4", py: 4 }}>
      <Container>
        <div className="text-center">
          <h1 className="text-pink text-2xl md:text-4xl font-normal mb-3 tracking-widest uppercase">
            About shree narayan Ganga Arti
          </h1>
        </div>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <Card
                  key={index}
                  sx={{
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Card>
              ))}
            </Slider>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                padding: 3,
                backgroundColor: "white",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                borderRadius: "12px",
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Experience the Spiritual Essence of wedding Ganga Arti
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1.8, color: "#555" }}
                >
                  Experience the spiritual essence of shree narayan ganga aarti
                  for your sacred ceremonies. Book Ganga Aarti online for
                  weddings, anniversaries, and more, bringing the divine rituals
                  right to your doorstep. Perform traditional Ganga Aarti at
                  home to invoke prosperity and well-being. From Namkaran Ganga
                  Aarti for new beginnings to Engagement Ganga Aarti for
                  auspicious starts, and Anniversary Ganga Aarti for eternal
                  blessings, our services offer you the chance to participate in
                  these timeless traditions with ease. Ensure that your special
                  occasions are blessed with the purity and grace of Ganga
                  Pooja.
                  <br />
                  At shree narayan ganga arti Booking, we bring the spiritual
                  essence of this ancient ritual to your doorstep, offering a
                  unique opportunity to witness and participate in a cherished
                  tradition without traveling afar.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
