"use client";
import { Fade } from "react-awesome-reveal";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactForm = () => {
  return (
    <Fade>
      <Box>
        <Box sx={{ mx: "auto", maxWidth: "90rem", px: 6 }}>
          <Grid container spacing={5}>
            <Grid
              item
              xs={12}
              lg={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                mt: 10,
              }}
            >
              <Fade
                direction={"up"}
                delay={400}
                cascade
                damping={0.1}
                triggerOnce={true}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "pink",
                    fontWeight: "normal",
                    mb: 3,
                    textTransform: "uppercase",
                    textAlign: "start",
                  }}
                >
                  Contact Us
                </Typography>
              </Fade>
              <Fade
                direction={"up"}
                delay={800}
                cascade
                damping={0.1}
                triggerOnce={true}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "black",
                    textAlign: "start",
                  }}
                >
                  For any inquiries, please contact us.
                </Typography>
              </Fade>
              <Fade
                direction={"up"}
                delay={1000}
                cascade
                damping={0.1}
                triggerOnce={true}
              >
                <Box component="form" sx={{ mt: 4 }} noValidate>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        variant="outlined"
                        required
                        autoComplete="name"
                        helperText="Please enter your full name"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "grey",
                            },
                            "&:hover fieldset": {
                              borderColor: "blue",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "green",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        required
                        autoComplete="email"
                        helperText="Enter a valid email address"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "grey",
                            },
                            "&:hover fieldset": {
                              borderColor: "blue",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "green",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        variant="outlined"
                        required
                        autoComplete="tel"
                        helperText="Start with 6, 7, 8, or 9. Must be 10 digits."
                        inputProps={{
                          pattern: "[6-9]{1}[0-9]{9}",
                          title:
                            "Phone number should start with 6, 7, 8, or 9 and be exactly 10 digits long",
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "grey",
                            },
                            "&:hover fieldset": {
                              borderColor: "blue",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "green",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Address"
                        name="address"
                        variant="outlined"
                        required
                        autoComplete="street-address"
                        helperText="Enter your current address"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "grey",
                            },
                            "&:hover fieldset": {
                              borderColor: "blue",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "green",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        variant="outlined"
                        required
                        autoComplete="off"
                        helperText="Provide details of your inquiry"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "grey",
                            },
                            "&:hover fieldset": {
                              borderColor: "blue",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "green",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          backgroundColor: "green !important",
                          "&:hover": {
                            backgroundColor: "darkgreen !important",
                          },
                        }}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            </Grid>

            <Grid
              item
              xs={12}
              lg={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                pl: 6,
              }}
            >
              <Fade
                direction={"up"}
                delay={1200}
                cascade
                damping={0.1}
                triggerOnce={true}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "black",
                    textAlign: "start",
                  }}
                >
                  Get Here
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <IconButton aria-label="location" color="primary">
                    <LocationOnIcon />
                  </IconButton>
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    केदारेश्वर मंदिर, केदारघाट, सोनारपुर (वाराणसी),
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <IconButton aria-label="phone" color="primary">
                    <PhoneIcon />
                  </IconButton>
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    +91 7079362685
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <IconButton aria-label="email" color="primary">
                    <EmailIcon />
                  </IconButton>
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    thegangaarti05@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.9161254791434!2d83.00571348198405!3d25.307021919987836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31e1e80eccd5%3A0xcfb1b4de69b2bf24!2sDashashwamegh%20ghat%2C%20Uttar%20Pradesh%20221001!5e0!3m2!1sen!2sin!4v1724067440898!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    frameBorder="0"
                    style={{ border: 0 }}
                    aria-hidden="false"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  {/* <iframe
                    src="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.9161254791434!2d83.00571348198405!3d25.307021919987836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31e1e80eccd5%3A0xcfb1b4de69b2bf24!2sDashashwamegh%20ghat%2C%20Uttar%20Pradesh%20221001!5e0!3m2!1sen!2sin!4v1724067440898!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    frameBorder="0"
                    style={{ border: 0 }}
                    aria-hidden="false"
                  ></iframe> */}
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Fade>
  );
};

export default ContactForm;
