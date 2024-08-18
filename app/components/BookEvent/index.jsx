"use client";

import React, { useState } from "react";
import Image from "next/image";

import Arti from "../../Assets/Arti deepak.jpg";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import axios from "axios";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    email: "",
    address: "",
    description: "",
    price: "",
    event_date: "",
    members: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://i55cjn4v9d.execute-api.ap-south-1.amazonaws.com/gangaArti/Booking",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error making the booking:", error);
    }
  };

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 2, textAlign: "center", color: "black" }}
      >
        Book Your Event
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", mb: 3, color: "green", fontSize: "18px" }}
      >
        Experience the divine Ganga Arti with our exclusive booking. Enjoy a
        serene and spiritual evening by the Ganges with your loved ones.
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ p: 3 }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src={Arti}
              alt="Banner Image"
              style={{
                width: "60%",
                height: "600px",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, p: 3 }}>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone_number"
                      type="number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </Grid>
                  {/* <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Price"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      required
                    />
                  </Grid> */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Event Date"
                      name="event_date"
                      type="date"
                      value={formData.event_date}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth required>
                      <InputLabel id="members-label">Members</InputLabel>
                      <Select
                        labelId="members-label"
                        name="members"
                        value={formData.members}
                        onChange={handleChange}
                      >
                        {Array.from({ length: 15 }, (_, i) => (i + 1) * 2).map(
                          (num) => (
                            <MenuItem key={num} value={num}>
                              {num}
                            </MenuItem>
                          )
                        )}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: "green !important",
                        "&:hover": {
                          backgroundColor: "darkgreen !important",
                        },
                      }}
                    >
                      Book Now
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookingForm;
