"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import AartiSteps from "../components/Banner/aarti_steps";

const AboutUs = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f4", py: { xs: 6, md: 8 } }}>
      <Container>
        {/* Page Title */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: { xs: 3, md: 4 },
            mt: { xs: 6, md: 10 },
          }}
        >
          About Shree Narayan Ganga Arti
        </Typography>

        <Grid container spacing={4} alignItems="stretch">
          {/* Images for Desktop (Column) / Mobile (Single) */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                overflow: "hidden",
                height: "100%",
              }}
            >
              {/* Framer Motion for Image Animations */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Show images in a column on desktop and one image on mobile */}
                <Grid
                  container
                  direction={{ xs: "row", md: "column" }}
                  spacing={2}
                >
                  {/* First Image */}
                  <Grid item xs={12} md={12}>
                    <img
                      src="/assets/durga_puja.webp"
                      alt="Shree narayan ganga arti"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </Grid>

                  {/* Second Image, hidden on mobile */}
                  <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{ display: { xs: "none", md: "block" } }}
                  >
                    <img
                      src="/assets/jayamala_with_aarti.webp"
                      alt="engagement shree narayan Ganga Arti"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </Grid>

                  {/* Text Content, hidden on mobile */}
                  <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{ display: { xs: "none", md: "block" } }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        mb: 2,
                        textAlign: { xs: "center", md: "left" },
                        fontSize: { xs: "1.25rem", md: "1.5rem" }, // Font size responsive
                        lineHeight: { xs: 1.4, md: 1.6 }, // Adjust line height for better readability
                        padding: { xs: "16px", md: "24px" }, // Padding for spacing around text
                      }}
                    >
                      World Famous Shree Narayan Ganga Aarti Event Now At Your
                      Doorstep
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        textAlign: "justify", // Justified text for a more professional look
                        color: "#555",
                        fontSize: { xs: "1rem", md: "1.125rem" }, // Font size adjusted for different screen sizes
                        lineHeight: { xs: 1.6, md: 1.8 }, // Line height for better readability
                        padding: { xs: "16px", md: "24px" }, // Padding to make the content breathable
                        marginBottom: { xs: "16px", md: "24px" }, // Ensure there is enough space between sections
                      }}
                    >
                      At Shree Narayan Ganga Aarti, we are dedicated to
                      delivering the divine experience of the Ganga Aarti to
                      your special events. Our event management services include
                      a range of tailored offerings designed to bring spiritual
                      grace to your celebrations. Whether you&apos;re planning a
                      wedding, an engagement, or a namkaran ceremony, we ensure
                      that each event is handled with utmost care and reverence.
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Card>
          </Grid>

          {/* Text Content Card */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: { xs: 2, md: 3 },
                  backgroundColor: "white",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  borderRadius: "12px",
                  height: "100%",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    World Famous Ganga Aarti Event Now At Your Doorstep
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    **Welcome to Shree Narayan Ganga Aarti**
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      color: "#555",
                      textAlign: "justify",
                    }}
                  >
                    At Shree Narayan Ganga Aarti, we are deeply passionate about
                    bringing the divine experience of the Ganga Aarti to your
                    special events, whether it&apos;s a wedding, a puja, or any
                    other significant occasion. Our goal is to provide a
                    seamless and spiritually enriching experience, allowing you
                    to witness one of India’s most revered rituals in the
                    comfort of your own location. We specialize in integrating
                    the mesmerizing world-famous Ganga Aarti into your event,
                    ensuring that you and your guests can enjoy this sacred
                    ceremony without the need to travel.
                    <br />
                    <br />
                    Ganga Arti is a centuries-old Hindu ritual dedicated to
                    Goddess Ganga, the deity symbolizing the river Ganges. Each
                    evening, as dusk descends, priests clad in traditional
                    attire gather on the riverbanks. With oil lamps, flowers,
                    incense, and sacred chants, they perform a mesmerizing
                    ceremony that invokes blessings, purifies the atmosphere,
                    and pays homage to the river that sustains millions of
                    lives.
                    <br />
                    <br />
                    Immerse yourself in the divine ambiance of Ganga Aarti,
                    right in your own locality. Our booking platform allows you
                    to bring the spiritual essence of this ancient ritual to
                    your doorstep, offering a unique opportunity to participate
                    in a cherished tradition without the need for extensive
                    travel. Whether you&apos;re hosting a wedding Ganga Aarti,
                    an engagement event, or a namkaran ceremony, we provide a
                    service that is both accessible and profoundly enriching.
                  </Typography>

                  {/* Our Mission Section */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      mt: { xs: 3, md: 4 },
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      color: "#555",
                      textAlign: "justify",
                      mt: 2,
                    }}
                  >
                    At Shree Narayan Ganga Aarti, our mission is to bring the
                    divine Ganga Aarti ritual to people worldwide, making it
                    possible for you to participate in this centuries-old
                    tradition without leaving your home. Whether it’s a wedding
                    Ganga Aarti, namkaran Ganga Aarti, or any other significant
                    ceremony, we strive to integrate this sacred ritual into
                    your special moments. We combine traditional Ganga Aarti
                    practices with modern convenience to create unforgettable
                    spiritual experiences. By offering seamless access to the
                    revered Ganga Aarti ceremony, we ensure that every event is
                    enriched with divine grace and cultural significance, right
                    at your doorstep.
                  </Typography>

                  {/* Our Experience Section */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      mt: { xs: 3, md: 4 },
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    Our Experience
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      color: "#555",
                      textAlign: "justify",
                      mt: 2,
                    }}
                  >
                    With years of experience in organizing and hosting spiritual
                    events, we bring professionalism, authenticity, and devotion
                    to every Ganga Aarti ceremony we organize. Our team ensures
                    that each event is conducted with utmost respect and
                    reverence for the tradition, providing a seamless and
                    spiritually fulfilling experience for all attendees.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <AartiSteps />
    </Box>
  );
};

export default AboutUs;
