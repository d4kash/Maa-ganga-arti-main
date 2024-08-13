"use client";

import React from "react";
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

// Demo data
const members = [
  {
    member: "2",
    price: "10000",
    location: "Varanasi, Uttar Pradesh - 221005",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    member: "4",
    price: "15000",
    location: "Varanasi, Uttar Pradesh - 221005",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    member: "6",
    price: "25000",
    location: "Varanasi, Uttar Pradesh - 221005",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    member: "8",
    price: "35000",
    location: "Varanasi, Uttar Pradesh - 221005",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    member: "10",
    price: "45000",
    location: "Varanasi, Uttar Pradesh - 221005",
    image: "https://i.pravatar.cc/150?img=5",
  },
  // Add more members as needed
];

// Component to display each member card
const MemberCard = ({ member }) => {
  return (
    <StyledCard>
      <CardContent>
        <CenteredAvatar src={member.image} alt={member.name} />
        <Typography variant="h6" component="div" sx={{ mt: 2 }}>
          Members :{member.member}
        </Typography>
        <Typography variant="h5" color="primary" sx={{ mt: 1 }}>
          Price:{member.price}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
          Location:{member.location}
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
        >
          Book Now
        </Button>
      </CardContent>
    </StyledCard>
  );
};

// Main component to display the grid of member cards
const BookNowPage = () => {
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
            <MemberCard member={member} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BookNowPage;
