 "use client";
import { Fade } from "react-awesome-reveal";
import { Box, TextField, Button, Typography, Grid, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactForm = () => {
    return (
        <Fade>
            <Box sx={{ position: 'relative' }} id="contact-section">
                <Box sx={{ mx: 'auto', maxWidth: '90rem', pb: { sm: 24 }, px: 6 }}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} lg={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Fade direction={'up'} delay={400} cascade damping={0.1} triggerOnce={true}>
                                <Typography variant="h6" sx={{ color: 'pink', fontWeight: 'normal', mb: 3, textTransform: 'uppercase', textAlign: 'start' }}>
                                    Contact Us 
                                </Typography>
                            </Fade>
                            <Fade direction={'up'} delay={800} cascade damping={0.1} triggerOnce={true}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'black', textAlign: 'start' }}>
                                    For any inquiries, please contact us.
                                </Typography>
                            </Fade>
                            <Fade direction={'up'} delay={1000} cascade damping={0.1} triggerOnce={true}>
                                <Box component="form" sx={{ mt: 4 }} noValidate>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Name"
                                                name="name"
                                                variant="outlined"
                                                required
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: 'grey',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'blue',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'green',
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
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: 'grey',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'blue',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'green',
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
                                                inputProps={{
                                                    pattern: "[6-9]{1}[0-9]{9}",
                                                    title: "Phone number should start with 6, 7, 8, or 9 and be exactly 10 digits long"
                                                }}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: 'grey',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'blue',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'green',
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
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: 'grey',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'blue',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'green',
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
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: 'grey',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'blue',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'green',
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
                                                    backgroundColor: 'green !important',
                                                    '&:hover': {
                                                        backgroundColor: 'darkgreen !important'
                                                    }
                                                }}
                                            >
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Fade>
                        </Grid>

                        <Grid item xs={12} lg={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', pl: 6 }}>
                            <Fade direction={'up'} delay={1200} cascade damping={0.1} triggerOnce={true}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'black', textAlign: 'start' }}>
                                    Get Here
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                    <IconButton aria-label="location" color="primary">
                                        <LocationOnIcon />
                                    </IconButton>
                                    <Typography variant="body1" sx={{ ml: 1 }}>
                                        Sangam, B1/148, C-1-R, Assi, Varanasi, Uttar Pradesh - 221005
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                    <IconButton aria-label="phone" color="primary">
                                        <PhoneIcon />
                                    </IconButton>
                                    <Typography variant="body1" sx={{ ml: 1 }}>
                                        +91 7999629086
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                    <IconButton aria-label="email" color="primary">
                                        <EmailIcon />
                                    </IconButton>
                                    <Typography variant="body1" sx={{ ml: 1 }}>
                                        info@gangaaartievent.com
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" 
                                        width="100%" 
                                        height="200" 
                                        frameBorder="0" 
                                        style={{ border: 0 }} 
                                        
                                        aria-hidden="false" 
                                        
                                    ></iframe>
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
