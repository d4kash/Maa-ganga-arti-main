"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { Fade } from "react-awesome-reveal";
import BannerImage from "../../Assets/Temple.jpeg";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";

// Styled component for responsive image container
const FixedImage = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 400, // Default height for larger screens
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 60,
  [theme.breakpoints.down("sm")]: {
    height: 300, // Height for smaller screens
  },
}));

const Banner = () => {
  const [isClient, setIsClient] = useState(false);
  const [routerReady, setRouterReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      setRouterReady(true);
    }
  }, [isClient]);

  const handleBookNowClick = () => {
    if (routerReady) {
      router.push("/booking");
    }
  };

  if (!isClient) {
    // Optionally return null or a loading spinner while determining if it's client-side
    return null;
  }

  return (
    <Box
      id="home-section"
      sx={{ backgroundColor: "lightblue", py: { xs: 8, sm: 12 } }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6} mt={10}>
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  color: "green",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                ॐ नमो गंगायै विश्वरुपिणी नारायणी नमो <br /> नम:।।
              </Typography>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "grey",
                  mb: 4,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                गांगं वारि मनोहारि मुरारिचरणच्युतम् । <br />
                त्रिपुरारिशिरश्चारि पापहारि पुनातु माम् ॥
              </Typography>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                {/* <Button
                  variant="contained"
                  color="primary" // Ensures proper text display
                  sx={{
                    py: 2,
                    px: 4,
                    fontWeight: "medium",
                    borderRadius: "20px",
                    backgroundColor: "green", // Keeps the original button color
                    color: "primary.contrastText", // Ensures text visibility
                    boxShadow: 3,
                    "&:hover": {
                      backgroundColor: "secondary.dark", // Keeps the same color on hover
                      boxShadow: 6, // Enhances shadow on hover
                    },
                    transition: "all 0.3s ease",
                  }}
                  onClick={handleBookNowClick}
                >
                  Book now
                </Button> */}

                {/* <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    py: 2,
                    px: 4,
                    fontWeight: "medium",
                    borderRadius: "20px", // Adjust this value as needed for desired roundness
                    // backgroundColor: "secondary.dark", // Ensure the button color matches your theme
                    backgroundColor: "primary.main", // Matches the primary color
                    color: "primary.contrastText",
                    boxShadow: 3, // Add shadow for a lifted effect
                    "&:hover": {
                      backgroundColor: "secondary.dark", // Darker shade on hover
                      boxShadow: 6, // Enhance shadow on hover
                    },
                    transition: "all 0.3s ease", // Smooth transition for hover effects
                  }}
                  onClick={handleBookNowClick}
                >
                  Book now
                </Button> */}
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: { xs: 4, md: 0 } }}>
            <FixedImage>
              <Image
                src={BannerImage}
                alt="Banner Image"
                layout="fill" // Use layout fill for responsive images
                objectFit="cover" // Ensure the image covers the container
              />
            </FixedImage>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
