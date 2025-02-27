"use client";
import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";
import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import NotFoundErrorBoundary from "./components/NotFoundErrorBoundary";
// import { appWithTranslation } from "next-i18next";
import "./i18n";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// export const metadata = {
//   title: "Shree narayan Ganga Arti event",
//   description: "please join us for puja",
// };

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700&display=swap"
        />
        <link rel="icon" type="image/png" href="/assets/favicon.png"></link>
        <title>Shree narayan ganga aarti</title>
        <meta
          name="description"
          content="Book Ganga Aarti for weddings, naamkaran, saagai, anniversaries, and other auspicious occasions. Experience sacred rituals at home with our personalized event management services."
        />
        <meta
          name="keywords"
          content="Ganga Aarti booking, Wedding Ganga Aarti, Naamkaran Ganga Aarti, Auspicious Ganga Aarti, Saagai Ganga Aarti, Anniversary Ganga Aarti, Home Ganga Aarti services, Event management Ganga Aarti, Hindu rituals, Traditional ceremonies"
        />
        <meta name="author" content="Shree narayan ganga aarti" />
        <meta
          property="og:title"
          content="Book Sacred Ganga Aarti for Weddings & Auspicious Occasions"
        />
        <meta
          property="og:description"
          content="Offering personalized Ganga Aarti services for weddings, naamkaran, saagai, anniversaries, and more. Make your ceremonies truly special with our event management expertise."
        />
        <meta
          property="og:image"
          content="https://ganga-arti.s3.ap-south-1.amazonaws.com/wedding/sankh_arti.png"
        />
        <meta
          property="og:image"
          content="https://ganga-arti.s3.ap-south-1.amazonaws.com/wedding/arti7.png"
        ></meta>
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://bookgangaarti.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Shree narayan ganga aarti" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Book Sacred Ganga Aarti for Weddings & Auspicious Occasions"
        />
        <meta
          name="twitter:description"
          content={"Book Sacred Ganga Aarti for Weddings" + "...Read more"}
        />
        <meta
          name="twitter:image"
          content="https://ganga-arti.s3.ap-south-1.amazonaws.com/wedding/arti7.png"
        />
      </head>
      <body>
        <NotFoundErrorBoundary>
          <AnimatePresence>
            <Navbar />
            {children}
            <Footer />
          </AnimatePresence>
        </NotFoundErrorBoundary>
      </body>
    </html>
  );
}
