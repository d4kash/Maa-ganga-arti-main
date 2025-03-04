// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700&display=swap"
        />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How can I book Ganga Aarti?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can book Ganga Aarti by entering your pincode in our search field."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What events can Ganga Aarti be booked for?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ganga Aarti can be booked for weddings, pujas, anniversaries, and spiritual ceremonies."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is online booking available for Ganga Aarti?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can book Ganga Aarti online through our website by selecting your preferred date and location."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I choose a specific time for the Ganga Aarti?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, during the booking process, you can select your preferred time slot for the Ganga Aarti."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are there any cancellation policies for Ganga Aarti bookings?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, cancellations are allowed up to 24 hours before the scheduled time. Please refer to our cancellation policy for details."
                  }
                }
              ]
            })
          }}
        />
 <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Ganga Aarti Theme Booking at Your Weddings",
              "url": "https://bookgangaarti.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://bookgangaarti.com/search?pincode={search_term}",
                "query-input": "required name=search_term"
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
