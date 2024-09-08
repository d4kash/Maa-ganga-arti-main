"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Collapse,
  MenuItem,
  Select,
  FormControl,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

// Styled component for the CardMedia to handle the image zoom effect
const ZoomCardMedia = styled(CardMedia)(({ theme }) => ({
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

// Sample translation keys in the localization files
const services = [
  {
    id: 0,
    image: "assets/jhar_arti.png",
    title: "services.marriageGangaAarti.title",
    description: "services.marriageGangaAarti.description",
  },
  {
    id: 1,
    image: "assets/jhar_arti.png",
    title: "services.engagementGangaAarti.title",
    description: "services.engagementGangaAarti.description",
  },
  {
    id: 2,
    image: "assets/naag_arti.png",
    title: "services.anniversaryGangaAarti.title",
    description: "services.anniversaryGangaAarti.description",
  },
  {
    id: 3,
    image: "assets/jhar_arti.png",
    title: "services.spiritualCeremonyGangaAarti.title",
    description: "services.spiritualCeremonyGangaAarti.description",
  },
  {
    id: 4,
    image: "assets/naag_arti.png",
    title: "services.namkaranGangaAarti.title",
    description: "services.namkaranGangaAarti.description",
  },
];

const ServiceCard = ({ service }) => {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleBookNow = (service) => {
    // router.push("/details");
    router.push(`/details?id=${service.id}`);
    // router.push(
    //   {
    //     pathname: "/details", // target page
    //     // query: { id: productData.id }, // Optionally pass query params
    //   },
    //   undefined,
    //   { state: { service } }
    // ); // Passing the entire product data in state
    // router.push("/booking");
  };

  return (
    <Card
      sx={{
        boxShadow: 3,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
      }}
    >
      <ZoomCardMedia
        component="img"
        image={service.image}
        alt={t(service.title)}
        sx={{ height: 200 }}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {t(service.title)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {expanded
            ? t(service.description)
            : `${t(service.description).substring(0, 200)}...`}
          {!expanded && (
            <Button
              onClick={handleExpandClick}
              endIcon={<ExpandMoreIcon />}
              sx={{ textTransform: "none", mt: 1 }}
            >
              {t("readMore")}
            </Button>
          )}
        </Typography>
        <Collapse in={expanded}>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              {t(service.description).substring(200)}
            </Typography>
            <Button
              onClick={handleExpandClick}
              sx={{ textTransform: "none", mt: 1 }}
            >
              {t("showLess")}
            </Button>
          </Box>
        </Collapse>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            variant="contained"
            onClick={() => handleBookNow(service)}
            sx={{
              backgroundColor: "green !important",
              "&:hover": {
                backgroundColor: "darkgreen !important",
              },
            }}
          >
            {t("bookNow")}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const ServiceCards = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleChangeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
  };

  return (
    <Box
      sx={{ backgroundColor: "#f4f4f4", mx: "auto", maxWidth: "1200px", p: 3 }}
      id="services-section"
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <Box sx={{ textAlign: "center", flex: 1 }}>
          <Typography
            gutterBottom
            sx={{ color: "black", fontSize: "24px", mt: 10 }}
          >
            <b>{t("services")}</b>
          </Typography>
          <Typography variant="h6" component="p" color={"green"}>
            {t("exploreOurServices")}
          </Typography>
        </Box>
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            value={language}
            onChange={handleChangeLanguage}
            displayEmpty
            inputProps={{ "aria-label": "Select language" }}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="hi">हिन्दी</MenuItem>
            <MenuItem value="bn">Bengali</MenuItem>
            <MenuItem value="ta">Tamil</MenuItem>
            <MenuItem value="te">Telugu</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceCards;
