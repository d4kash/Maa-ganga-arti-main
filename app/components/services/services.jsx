"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Service = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <motion.section
        className="hero-section bg-cover bg-center text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ backgroundImage: "url('/images/ganga-aarti.jpg')" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Experience the Divine Blessings with Shree Narayan Ganga Aarti
        </h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-8 px-6 py-3 bg-yellow-600 rounded-lg shadow-lg text-lg"
        >
          Book Ganga Aarti Now
        </motion.button>
      </motion.section>

      {/* Service Section */}
      {/* <motion.section
        className="services-section py-16"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Ganga Aarti Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Wedding Ganga Aarti",
                image: "/images/wedding.jpg",
                description:
                  "Celebrate your sacred union with a traditional Wedding Ganga Aarti.",
              },
              {
                title: "Namkaran Ganga Aarti",
                image: "/images/namkaran.jpg",
                description:
                  "Invoke divine blessings for your newborn with a Namkaran Ganga Aarti.",
              },
              {
                title: "Engagement Ganga Aarti",
                image: "/images/engagement.jpg",
                description:
                  "Begin your journey together with an auspicious Engagement Ganga Aarti.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="service-card bg-white rounded-lg shadow-lg p-6 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p>{service.description}</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

      {/* Testimonials Section */}
      <section className="testimonials-section py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Devotees Say</h2>
        <motion.div
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
          }}
        >
          <motion.div
            className="testimonial bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <p>
              "The Wedding Ganga Aarti was a surreal experience. We felt the
              divine blessings throughout the ceremony."
            </p>
            <span className="text-gray-600 mt-4 block">- Devotee Name</span>
          </motion.div>
          <motion.div
            className="testimonial bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <p>
              "Booking the Namkaran Ganga Aarti was the best decision for our
              newborn. The spiritual atmosphere was truly enchanting."
            </p>
            <span className="text-gray-600 mt-4 block">- Devotee Name</span>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="faq-item bg-gray-100 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-4">
                How do I book a Ganga Aarti for my wedding?
              </h3>
              <p>
                To book a Ganga Aarti for your wedding, simply click on the
                'Book Ganga Aarti Now' button and fill out the necessary
                details.
              </p>
            </motion.div>
            <motion.div
              className="faq-item bg-gray-100 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-4">
                What is included in the Ganga Pooja for Prosperity?
              </h3>
              <p>
                Our Ganga Pooja for Prosperity includes a complete spiritual
                ceremony conducted by experienced priests, along with all
                necessary rituals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
