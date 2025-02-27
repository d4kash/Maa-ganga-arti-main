"use client";

import React, { useState } from "react";
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
  Divider,
  Paper,
} from "@mui/material";
import axios from "axios";
import Image from "next/image";
// import qrcode from "/assets/qrcode.png";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    email: "",
    address: "",
    village: "",
    district: "",
    state: "",
    pincode: "",
    description: "",
    price: "",
    event_date: "",
    members: "",
    transaction_no: "",
    ref_no: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.transaction_no || !formData.ref_no) {
      alert("Please enter the Transaction Number and Reference Number.");
      return;
    }

    try {
      const response = await axios.post(
        "https://i55cjn4v9d.execute-api.ap-south-1.amazonaws.com/gangaArti/Booking",
        formData
      );
      // console.log(response.data);
    } catch (error) {
      console.error("Error making the booking:", error);
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: "1200px", margin: "0 auto" }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "#1a237e",
          mb: 4,
          mt: 10,
        }}
      >
        Book Your Event
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          color: "#2e7d32",
          mb: 6,
        }}
      >
        Experience the divine Ganga Arti event with our exclusive booking. A
        serene and spiritual evening awaits you.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Card sx={{ boxShadow: 5 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Event Details
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
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
                  <Grid item xs={12} md={6}>
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
                  <Grid item xs={12} md={6}>
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
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Village"
                      name="village"
                      value={formData.village}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="District"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="State"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Pincode"
                      name="pincode"
                      type="number"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Description"
                      name="description"
                      multiline
                      rows={3}
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
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
                  <Grid item xs={12} md={6}>
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
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Transaction Number"
                      name="transaction_no"
                      value={formData.transaction_no}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Reference Number"
                      name="ref_no"
                      value={formData.ref_no}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption" color="error">
                      * 20% payment is necessary for booking confirmation.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: "#2e7d32 !important",
                        "&:hover": {
                          backgroundColor: "#1b5e20 !important",
                        },
                        py: 1.5,
                        fontSize: "18px",
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

        <Grid item xs={12} md={5}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" gutterBottom>
              Billing Information
            </Typography>
            <Typography variant="body1" align="left" sx={{ mb: 2 }}>
              <strong>Account Details</strong>
            </Typography>
            <Typography variant="body2" align="left">
              <strong>Bank Name:</strong> Indian Bank
            </Typography>
            <Typography variant="body2" align="left">
              <strong>Branch:</strong> GODDA
            </Typography>
            <Typography variant="body2" align="left">
              <strong>IFS Code:</strong> IDIB000G576
            </Typography>
            <Typography variant="body2" align="left">
              <strong>Account Name:</strong> JSNGEF GODDA
            </Typography>
            <Typography variant="body2" align="left">
              <strong>Account No:</strong> 7516125458
            </Typography>
            <Divider sx={{ my: 3, width: "100%" }} />
            <Typography variant="body1" align="left" sx={{ mb: 2 }}>
              <strong>Scan to Pay</strong>
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "150px",
                // backgroundColor: "#e0e0e0",
                borderRadius: "8px",
                mb: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Replace with actual QR code */}
              {/* <Typography>QR Code Placeholder</Typography> */}
              <Image
                src="/assets/qrcode.png"
                width={80}
                height={100}
                alt="Banner Image"
              />
            </Box>
            <Typography variant="caption" color="error" align="center">
              * Note: Please complete the payment and provide the Transaction
              Number and Reference Number for booking confirmation.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookingForm;
