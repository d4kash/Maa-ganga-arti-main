"use client";
import React, { useState } from "react";
import { Box, Grid, Modal, Typography } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "मंगल मंत्र वाचन",
    description: "सकारात्मक ऊर्जा के लिए",
    image: "assets/arti_image.jpg",
    detailedDescription: `
      1(|).मंगल मंत्र वाचन का उद्देश्य: इसका मुख्य उद्देश्य नवविवाहित जोड़े के जीवन में सुख, शांति, और समृद्धि की स्थापना करना है। इन मंत्रों के द्वारा देवताओं से प्रार्थना की जाती है कि वे दांपत्य जीवन को सफल और आनंदमय बनाएं।
      \n1(||).विवाह की पवित्रता: मंगल मंत्र वाचन विवाह की पवित्रता को बनाए रखने और दांपत्य जीवन में आने वाली बाधाओं को दूर करने के लिए किया जाता है। यह जोड़े के बीच प्रेम और समझ बढ़ाने में भी सहायक होता है।
    `,
  },
  {
    id: 2,
    title: "शंख नाद",
    description: "शुद्धिकरण के लिए",
    image: "assets/sankh_arti.png",
    detailedDescription: `
      शंख नाद एक धार्मिक अनुष्ठान है जिसमें शंख की ध्वनि से वातावरण को शुद्ध किया जाता है, यह पवित्रता और ऊर्जा का संचार करता है और पूजा के समय देवताओं की उपस्थिति का आह्वान करता है।
    `,
  },
  {
    id: 3,
    title: "अगरबत्ती आरती",
    description: "आराधना की शुरुआत",
    image: "assets/agarbati_arti.png",
    detailedDescription: `
      3(|)अगरबत्ती अगरबत्ती की सुगंध से वातावरण पवित्र और सकारात्मक हो जाता है, जिससे पूजा का माहौल बेहतर होता है।
      \n3(||).अगरबत्ती इसकी सुगंध से वातावरण पवित्र होता है और धुएं से मन को शांति वा ध्यान केंद्रित करने में मदद मिलती है।  इससे नकारात्मक ऊर्जा और अशुद्धियाँ भी दूर होती हैं।
    `,
  },
  {
    id: 4,
    title: "धूपम आरती",
    description: "धूप से आरती",
    image: "assets/arti_step2.jpg",
    detailedDescription: `
      4(|)धूपम आरती धूपम का प्रतीकात्मक महत्व: धूपम का धुआँ भक्तों की प्रार्थनाओं को भगवान तक पहुँचाने का प्रतीक माना जाता है। यह भक्ति और समर्पण की भावना को प्रकट करता है। साथ ही उस स्थान मै सकारात्मक वातावरण भी बनाता है।
    `,
  },
  {
    id: 5,
    title: "नाग आरती",
    description: "विशेष पूजा",
    image: "assets/naag_arti.png",
    detailedDescription: `
      5(|)नाग आरती धार्मिक आस्था: नाग आरती एक धार्मिक अनुष्ठान है, जो भक्तों की आस्था और समर्पण को व्यक्त करता है। यह पूजा देवता के प्रति श्रद्धा और भक्ति को प्रकट करने का तरीका है।
      \n(||)आध्यात्मिक लाभ: नाग आरती के माध्यम से भक्तों को मानसिक शांति, आध्यात्मिक उन्नति, और सकारात्मकता की प्राप्ति होती है।
    `,
  },
  {
    id: 6,
    title: "झार आरती",
    description: "परंपरागत आरती",
    image: "assets/jhar_arti.png",
    detailedDescription: `
      6.(|)झार आरती झार आरती में अनेक दीपों को जलाकर, देवताओं से नवविवाहित दांपत्य जीवन की सुख-समृद्धि और खुशहाली के लिए प्रार्थना की जाती है। यह एक धार्मिक और आध्यात्मिक क्रिया है, जो दांपत्य जीवन में सुख और समृद्धि की कामना करती है।
      \n6.(||)झार आरती इस विधि के माध्यम से नवविवाहित जोड़े भगवान से अपने जीवन में प्रेम, समझदारी और सामंजस्य की कामना करते हैं। यह पूजा न केवल दांपत्य जीवन को आशीर्वादित करती है, बल्कि एक सकारात्मक और खुशहाल भविष्य की भी कामना करती है। दीपों की चमक और उनकी रौशनी नवविवाहितों के जीवन में स्नेह और समृद्धि की आशा को दर्शाती है, और इस प्रकार यह अनुष्ठान धार्मिक आस्था और प्रेम का एक सुंदर प्रतीक बन जाता है।
    `,
  },
  {
    id: 7,
    title: "मंगल आर्शीवाद मंत्र",
    description: "आर्शीवाद प्राप्ति",
    image: "assets/arti_image.jpg",
    detailedDescription: `
      7.मंगल आर्शीवाद मंत्र: इस मंत्र का उच्चारण विशेष रूप से विवाह समारोह में किया जाता है ताकि नवविवाहित जोड़े को स्नेह, समृद्धि, और शांति का आशीर्वाद प्राप्त हो। मंत्र के दौरान,  पंडित इस विशेष प्रार्थना के माध्यम से देवताओं से निवेदन करते हैं कि वे दांपत्य जीवन में सुख-शांति और सामंजस्य बनाए रखें। मंत्र का उद्देश्य नए जीवन की शुरुआत को सकारात्मक ऊर्जा से भरपूर करना और जोड़े को जीवन के सभी पहलुओं में सफलता और समृद्धि की कामना करना होता है। इसके उच्चारण से वातावरण में एक दिव्य ऊर्जा का संचार होता है, जो दांपत्य जीवन को खुशहाल और स्थिर बनाता है।
    `,
  },
];

const AartiSteps = () => {
  const [open, setOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);

  const handleOpen = (step) => {
    setSelectedStep(step);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedStep(null);
  };

  return (
    <Box sx={{ backgroundColor: "#f4f4f4", py: 2 }}>
      <div className="py-12 px-4 sm:px-8 lg:px-16">
        <h1 className="text-5xl text-center font-bold mb-12 text-yellow-700 font-hindi">
          गंगा आरती के चरण
        </h1>

        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={4} key={step.id}>
              <motion.div
                className="text-center p-6 bg-white rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.8 }}
                onClick={() => handleOpen(step)}
              >
                <motion.img
                  src={step.image}
                  alt={step.title}
                  className="mx-auto mb-4 w-32 h-32 sm:w-40 sm:h-40 object-contain rounded-lg"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                  }}
                />
                <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-500 font-hindi mb-2">
                  {step.title}
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 font-hindi">
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <motion.div
                  className="mt-8 mx-auto w-8 h-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-gray-800"
                    animate={{ x: [0, 10, 0] }}
                    transition={{
                      duration: 0.7,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </motion.svg>
                </motion.div>
              )}
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Modal for detailed description */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "90%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            maxHeight: "90vh",
            overflowY: "auto",
            "@media (min-width:600px)": {
              maxWidth: "600px",
              width: "80%",
            },
            "@media (min-width:900px)": {
              maxWidth: "700px",
            },
          }}
        >
          {selectedStep && (
            <>
              <Typography
                variant="h4"
                component="h2"
                sx={{ mb: 2, color: "#1976d2" }}
                className="font-hindi"
              >
                {selectedStep.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 2, whiteSpace: "pre-line" }}
                className="font-hindi text-gray-700"
              >
                {selectedStep.detailedDescription}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default AartiSteps;
