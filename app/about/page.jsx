import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import AartiSteps from "../components/Banner/aarti_steps";

const AboutUs = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f4", py: 8 }}>
      <Container>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 4, mt: 10 }}
        >
          About Ganga Arti
        </Typography>

        <Grid container spacing={4} alignItems="stretch">
          {/* Image Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                overflow: "hidden",
                height: "100%", // Ensures the card takes up the full height of its container
              }}
            >
              <img
                src="/assets/jayamala_with_aarti.webp"
                alt="Ganga Arti"
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </Card>
          </Grid>

          {/* Text Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: 3,
                backgroundColor: "white",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                height: "100%", // Ensures the card takes up the full height of its container
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Experience the Spiritual Essence of Ganga Arti
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 1.8, color: "#555" }}
                >
                  Embrace the sanctity of Shree Narayan Ganga Aarti during your
                  spiritual ceremonies. Whether you’re seeking to book Ganga
                  Aarti online for weddings, anniversaries, or any other
                  significant occasion, we bring the revered traditions to your
                  home. Experience the profound connection to the divine as you
                  perform traditional Ganga Aarti, invoking blessings for
                  prosperity and well-being. From the sacred Namkaran Ganga
                  Aarti, symbolizing new beginnings, to the Engagement Ganga
                  Aarti for auspicious starts, and the Anniversary Ganga Aarti
                  that bestows eternal blessings, each ritual is a step closer
                  to spiritual fulfillment. Let Ganga Pooja enrich your sacred
                  occasions with the timeless purity of the holy river.
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
      <AartiSteps />
    </Box>
  );
};

export default AboutUs;
