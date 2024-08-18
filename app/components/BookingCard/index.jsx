"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/navigation";
import axios from "axios";

// Styled component for the Avatar to center it inside the card
const CenteredAvatar = styled(Avatar)({
  width: 80,
  height: 80,
  margin: "0 auto",
});

// Styled component for the card with hover effect
const StyledCard = styled(Card)({
  maxWidth: 345,
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
  },
  textAlign: "center",
});

const BookNowPage = () => {
  const [members, setMembers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mmngrm2h3i.execute-api.ap-south-1.amazonaws.com/gangaArti/get_bookingCard"
        );
        setMembers(response.data["body-json"]["body"]["Items"]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleBook = () => {
    router.push("/bookingpage"); // Navigate to the booking page
  };

  return (
    <Box sx={{ mx: "auto", maxWidth: "1200px", p: 3 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Book Now
        </Typography>
        <Typography variant="h6" component="p" color={"green"}>
          Select a member to book an appointment
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {members.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <CardContent>
                <CenteredAvatar src={member.photo} alt={member.name} />
                <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                  Members: {member.member}
                </Typography>
                <Typography variant="h5" color="primary" sx={{ mt: 1 }}>
                  Price: {member.price}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Location: {member.location}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Pincode: {member.pincode}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: 2,
                    borderRadius: 20,
                    backgroundColor: "green !important",
                    "&:hover": {
                      backgroundColor: "darkgreen !important",
                    },
                  }}
                  onClick={handleBook}
                >
                  Book Now
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BookNowPage;
