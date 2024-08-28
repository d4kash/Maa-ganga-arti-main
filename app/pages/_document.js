// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700&display=swap"
        />
          <meta name="description" content="Book Ganga Aarti for weddings, naamkaran, saagai, anniversaries, and other auspicious occasions. Experience sacred rituals at home with our personalized event management services."/>
          <meta name="keywords" content="Ganga Aarti booking, Wedding Ganga Aarti, Naamkaran Ganga Aarti, Auspicious Ganga Aarti, Saagai Ganga Aarti, Anniversary Ganga Aarti, Home Ganga Aarti services, Event management Ganga Aarti, Hindu rituals, Traditional ceremonies"/>
          <meta name="author" content="Shree narayan ganga aarti"/>
          <meta property="og:title" content="Book Sacred Ganga Aarti for Weddings & Auspicious Occasions"/>
          <meta property="og:description" content="Offering personalized Ganga Aarti services for weddings, naamkaran, saagai, anniversaries, and more. Make your ceremonies truly special with our event management expertise."/>
          <meta property="og:image" content="/public/assets/jayamala_with_aarti.webp"/>
          <meta property="og:image" content="/public/assets/arti7.png"></meta>
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="630"/>
          <meta property="og:url" content="https://bookgangaarti.com/"/>
          <meta property="og:type" content="website"/>
          <meta property="og:site_name" content="Shree narayan ganga aarti"/>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
