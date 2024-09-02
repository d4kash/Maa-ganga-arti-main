import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const AboutUs = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f4", py: 8 }}>
      <Container>
        <div className="text-center">
          <h1 className="text-pink text-2xl md:text-4xl font-normal mb-3 tracking-widest uppercase">
            About Wedding Ganga Arti
          </h1>
        </div>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <img
                src="assets/ceremony2.webp"
                alt="Ganga Arti"
                style={{ width: "100%", height: "auto" }}
              />
            </Card>
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
                  Experience the spiritual essence of Shree Narayan Ganga Aarti
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
                  At Ganga Arti Booking, we bring the spiritual essence of this
                  ancient ritual to your doorstep, offering a unique opportunity
                  to witness and participate in a cherished tradition without
                  traveling afar.
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
