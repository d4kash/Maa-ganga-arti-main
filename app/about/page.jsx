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
                src="https://media.istockphoto.com/id/1241318411/photo/divine-ganga-aarti-yagna-at-rishikesh.jpg?s=612x612&w=0&k=20&c=6kyI1QsjTSVMlcv7jews6kKzPndDet7ItLs6G-gUkaA="
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
                  Ganga Arti is a centuries-old Hindu ritual dedicated to
                  Goddess Ganga, the deity symbolizing the river Ganges. Each
                  evening, as dusk descends, priests clad in traditional attire
                  gather on the riverbanks. With oil lamps, flowers, incense,
                  and sacred chants, they perform a mesmerizing ceremony that
                  invokes blessings, purifies the atmosphere, and pays homage to
                  the river that sustains millions of lives.
                  <br />
                  <br />
                  Immerse yourself in the divine ambiance of Ganga Arti, right
                  in your own locality. At Ganga Arti Booking, we bring the
                  spiritual essence of this ancient ritual to your doorstep,
                  offering a unique opportunity to witness and participate in a
                  cherished tradition without traveling afar.
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
