"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { testimonials, faqs } from "../../../utils/constants";

const transitionVariant = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.5 },
};

const Service = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [faqIndex, setFaqIndex] = useState(0);
  const [isFaqHovered, setIsFaqHovered] = useState(false);

  // Flatten the testimonials data to display 2 at a time across events
  const flattenedTestimonials = testimonials.flatMap((event) =>
    event.feedback.map((feedback) => ({
      ...feedback,
      event: event.event,
    }))
  );

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setTestimonialIndex(
          (prevIndex) => (prevIndex + 2) % flattenedTestimonials.length
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, flattenedTestimonials.length]);

  // Auto-scroll logic for FAQs
  useEffect(() => {
    if (!isFaqHovered) {
      const interval = setInterval(() => {
        setFaqIndex((prevIndex) => (prevIndex + 2) % faqs.length);
      }, 7000); // Change FAQ every 7 seconds
      return () => clearInterval(interval);
    }
  }, [isFaqHovered]);

  const handleNextTestimonial = () => {
    setTestimonialIndex(
      (prevIndex) => (prevIndex + 2) % flattenedTestimonials.length
    );
  };

  const handlePrevTestimonial = () => {
    setTestimonialIndex(
      (prevIndex) =>
        (prevIndex - 2 + flattenedTestimonials.length) %
        flattenedTestimonials.length
    );
  };

  const handleNextFaq = () => {
    setFaqIndex((prevIndex) => (prevIndex + 2) % faqs.length);
  };

  const handlePrevFaq = () => {
    setFaqIndex((prevIndex) => (prevIndex - 2 + faqs.length) % faqs.length);
  };

  return (
    <div>
      {/* Testimonials Section */}
      <section className="testimonials-section py-16 bg-gray-100 text-center relative px-4 md:px-12">
        <h2 className="text-3xl font-bold mb-12">What Our Devotees Say</h2>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Namkaran Ganga Aarti Testimonials */}
          <div className="testimonial bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Namkaran Ganga Aarti</h3>
            <p>
              It was a very peaceful and divine experience for my child&apos;s
              naming ceremony in Hazaribagh.
            </p>
            <span className="text-gray-600 mt-4 block">
              - Devotee, Rating: 4.5
            </span>
          </div>
          <div className="testimonial bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Namkaran Ganga Aarti</h3>
            <p>
              Such a serene and spiritual event in Ranchi, it made our day
              unforgettable.
            </p>
            <span className="text-gray-600 mt-4 block">
              - Devotee, Rating: 5
            </span>
          </div>
          <div className="testimonial bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Namkaran Ganga Aarti</h3>
            <p>
              A beautiful ceremony by the Ganges in Dhanbad, filled with love
              and blessings.
            </p>
            <span className="text-gray-600 mt-4 block">
              - Devotee, Rating: 4.8
            </span>
          </div>
          <div className="testimonial bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Namkaran Ganga Aarti</h3>
            <p>
              The aarti was magical, and the ambiance in Chatra was just
              perfect.
            </p>
            <span className="text-gray-600 mt-4 block">
              - Devotee, Rating: 4.6
            </span>
          </div>
          <div className="testimonial bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Namkaran Ganga Aarti</h3>
            <p>
              Our family&apos;s joy was amplified during this divine event in
              Banaras!
            </p>
            <span className="text-gray-600 mt-4 block">
              - Devotee, Rating: 5
            </span>
          </div>

          {/* Engagement Ganga Aarti Testimonials */}
          <div className="testimonial bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Engagement Ganga Aarti</h3>
            <p>
              A wonderful way to start our journey together in Koderma, the
              aarti added a spiritual touch.
            </p>
            <span className="text-gray-600 mt-4 block">
              - Devotee, Rating: 4
            </span>
          </div>
          <div className="testimonial bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Engagement Ganga Aarti</h3>
            <p>
              We felt truly blessed in Banaras, and the ceremony was beautifully
              conducted.
            </p>
            <span className="text-gray-600 mt-4 block">
              - Devotee, Rating: 4.8
            </span>
          </div>
          <div className="testimonial bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Engagement Ganga Aarti</h3>
            <p>
              The atmosphere in Dhanbad during the aarti was truly enchanting.
            </p>
            <span className="text-gray-600 mt-4 block">
              - Devotee, Rating: 5
            </span>
          </div>
          <div className="testimonial bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Engagement Ganga Aarti</h3>
            <p>Our engagement was made extra special by the aarti in Ranchi.</p>
            <span className="text-gray-600 mt-4 block">
              - Devotee, Rating: 4.7
            </span>
          </div>
          <div className="testimonial bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Engagement Ganga Aarti</h3>
            <p>
              The experience in Hazaribagh was unforgettable, filled with warmth
              and blessings.
            </p>
            <span className="text-gray-600 mt-4 block">
              - Devotee, Rating: 4.9
            </span>
          </div>

          {/* Wedding Ganga Aarti Testimonials */}
          <div className="testimonial bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Wedding Ganga Aarti</h3>
            <p>
              A divine experience in Chatra, the perfect start to our married
              life.
            </p>
            <span className="text-gray-600 mt-4 block">
              - Devotee, Rating: 5
            </span>
          </div>
          <div className="testimonial bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Wedding Ganga Aarti</h3>
            <p>
              The spiritual aura in Dhanbad was overwhelming, an amazing memory
              for our wedding.
            </p>
            <span className="text-gray-600 mt-4 block">
              - Devotee, Rating: 4.7
            </span>
          </div>
          <div className="testimonial bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Wedding Ganga Aarti</h3>
            <p>
              Our wedding in Banaras was beautifully complemented by the Ganga
              aarti.
            </p>
            <span className="text-gray-600 mt-4 block">
              - Devotee, Rating: 5
            </span>
          </div>
          <div className="testimonial bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Wedding Ganga Aarti</h3>
            <p>
              It felt so special to have our wedding aarti in Hazaribagh,
              surrounded by loved ones.
            </p>
            <span className="text-gray-600 mt-4 block">
              - Devotee, Rating: 4.6
            </span>
          </div>
          <div className="testimonial bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Wedding Ganga Aarti</h3>
            <p>A magnificent start to our journey as a couple in Koderma.</p>
            <span className="text-gray-600 mt-4 block">
              - Devotee, Rating: 4.8
            </span>
          </div>

          {/* Durga Puja Ganga Aarti Testimonials */}
          <div className="testimonial bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Durga Puja Ganga Aarti</h3>
            <p>
              A mesmerizing experience during Durga Puja in Bihar, the aarti was
              full of energy and devotion.
            </p>
            <span className="text-gray-600 mt-4 block">
              - Devotee, Rating: 4.9
            </span>
          </div>
          <div className="testimonial bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Durga Puja Ganga Aarti</h3>
            <p>
              The spiritual vibes during the aarti in Ranchi were unmatched, a
              divine celebration of Durga Puja.
            </p>
            <span className="text-gray-600 mt-4 block">
              - Devotee, Rating: 5
            </span>
          </div>
          <div className="testimonial bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Durga Puja Ganga Aarti</h3>
            <p>
              Attending the Durga Puja aarti in Dhanbad was an unforgettable
              experience.
            </p>
            <span className="text-gray-600 mt-4 block">
              - Devotee, Rating: 4.8
            </span>
          </div>
          <div className="testimonial bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Durga Puja Ganga Aarti</h3>
            <p>
              The energy at the aarti in Hazaribagh was electric, truly a
              memorable occasion.
            </p>
            <span className="text-gray-600 mt-4 block">
              - Devotee, Rating: 4.9
            </span>
          </div>
          <div className="testimonial bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-4">Durga Puja Ganga Aarti</h3>
            <p>
              A sacred Durga Puja celebration in Banaras, filled with joy and
              devotion.
            </p>
            <span className="text-gray-600 mt-4 block">
              - Devotee, Rating: 5
            </span>
          </div>
        </div>
      </section>
      <div>
        {/* FAQs Section */}
        <section className="faqs-section py-16 bg-gray-50 text-center relative px-4 md:px-12">
          <h2 className="text-3xl font-bold mb-12">
            Frequently Asked Questions
          </h2>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FAQ Items */}

            {/* FAQ 1 */}
            <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold mb-4">
                What is Ganga Aarti, and why is it significant?
              </h3>
              <p>
                Ganga Aarti is a sacred Hindu ritual that takes place on the
                banks of the Ganges River. It involves the offering of light and
                prayers to the holy river, symbolizing the purification of
                one&apos;s mind and soul.
              </p>
              <span className="text-gray-600 mt-4 block">
                Keywords: Ganga Aarti significance, holy river ritual, spiritual
                ceremony, Hindu rituals
              </span>
            </div>

            {/* FAQ 2 */}
            <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold mb-4">
                How can I book a Ganga Aarti theme with Shree Narayan Ganga
                Aarti?
              </h3>
              <p>
                To book a Ganga Aarti theme, visit our booking page, select your
                preferred event type and date, fill in the required details, and
                complete the online payment through our secure gateway.
              </p>
              <span className="text-gray-600 mt-4 block">
                Keywords: Ganga Aarti booking, book Ganga Aarti, Ganga Aarti
                event reservation
              </span>
            </div>

            {/* FAQ 3 */}
            <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold mb-4">
                What types of events can be organized during Ganga Aarti?
              </h3>
              <p>
                Events like Namkaran, Engagement, Wedding, Durga Puja, and other
                personal or religious ceremonies can be organized during Ganga
                Aarti by Shree Narayan Ganga Aarti.
              </p>
              <span className="text-gray-600 mt-4 block">
                Keywords: Ganga Aarti theme types, Namkaran Ganga Aarti, wedding
                Ganga Aarti, Durga Puja Ganga Aarti
              </span>
            </div>

            {/* FAQ 4 */}
            <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold mb-4">
                How early should I book my event with Shree Narayan Ganga Aarti?
              </h3>
              <p>
                We recommend booking your event at least 2-3 weeks in advance,
                especially during peak festival seasons or major holidays to
                ensure availability.
              </p>
              <span className="text-gray-600 mt-4 block">
                Keywords: advance booking Ganga Aarti, early booking Ganga
                Aarti, Ganga Aarti peak season booking
              </span>
            </div>

            {/* FAQ 5 */}
            <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold mb-4">
                Is there a limit to the number of guests I can invite?
              </h3>
              <p>
                The number of guests depends on the event type and location.
                Most ceremonies can accommodate a flexible number of guests, and
                guest details can be specified during the booking process.
              </p>
              <span className="text-gray-600 mt-4 block">
                Keywords: Ganga Aarti guest limit, event guest number, Ganga
                Aarti ceremony guest count
              </span>
            </div>

            {/* FAQ 6 */}
            <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold mb-4">
                What is the cancellation policy for an event booking?
              </h3>
              <p>
                Cancellations made 7 days in advance receive a full refund.
                Cancellations within 7 days will get a 50% refund, and no
                refunds are provided for cancellations made within 24 hours of
                the event.
              </p>
              <span className="text-gray-600 mt-4 block">
                Keywords: Ganga Aarti cancellation policy, event cancellation
                Ganga Aarti, refund policy Ganga Aarti
              </span>
            </div>

            {/* FAQ 7 */}
            <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold mb-4">
                Are customized rituals or special requests available?
              </h3>
              <p>
                Yes, Shree Narayan Ganga Aarti can tailor rituals based on your
                religious or cultural needs. Please mention any specific
                requests during the booking process to ensure arrangements are
                made.
              </p>
              <span className="text-gray-600 mt-4 block">
                Keywords: customized Ganga Aarti rituals, special requests for
                Ganga Aarti, personalized Ganga Aarti ceremony
              </span>
            </div>

            {/* FAQ 8 */}
            <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold mb-4">
                Do you provide any live streaming options for the events?
              </h3>
              <p>
                Yes, live streaming services are available for those unable to
                attend in person. This can be included as an add-on during your
                booking.
              </p>
              <span className="text-gray-600 mt-4 block">
                Keywords: Ganga Aarti live stream, virtual Ganga Aarti, Ganga
                Aarti online service
              </span>
            </div>

            {/* FAQ 9 */}
            <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold mb-4">
                Can I reschedule my event after booking?
              </h3>
              <p>
                Yes, events can be rescheduled up to 3 days before the event
                date, depending on availability. Additional charges may apply
                based on the changes.
              </p>
              <span className="text-gray-600 mt-4 block">
                Keywords: reschedule Ganga Aarti, change booking Ganga Aarti,
                modify Ganga Aarti theme
              </span>
            </div>

            {/* FAQ 10 */}
            <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold mb-4">
                Are photography and videography services available?
              </h3>
              <p>
                Yes, Shree Narayan Ganga Aarti offers professional photography
                and videography services to capture your special moments during
                the Ganga Aarti ceremony.
              </p>
              <span className="text-gray-600 mt-4 block">
                Keywords: Ganga Aarti photography, event videography Ganga
                Aarti, ceremony photography services
              </span>
            </div>

            {/* FAQ 11 */}
            <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold mb-4">
                What should I wear to the Ganga Aarti ceremony?
              </h3>
              <p>
                We recommend traditional Indian attire for religious events.
                Please avoid footwear near the Ganges River as it is considered
                sacred.
              </p>
              <span className="text-gray-600 mt-4 block">
                Keywords: dress code Ganga Aarti, what to wear Ganga Aarti,
                traditional attire for Ganga Aarti
              </span>
            </div>

            {/* FAQ 12 */}
            <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold mb-4">
                Can non-Hindus participate in the Ganga Aarti ceremony?
              </h3>
              <p>
                Yes, Ganga Aarti is open to people of all backgrounds. Anyone
                can participate and enjoy the spiritual atmosphere.
              </p>
              <span className="text-gray-600 mt-4 block">
                Keywords: non-Hindus Ganga Aarti, participation in Ganga Aarti,
                inclusive Ganga Aarti ceremony
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  //with looping
  // return (
  //   <div>
  //     {/* Testimonials Section */}
  //     <section
  //       className="testimonials-section py-16 bg-gray-100 text-center relative px-4 md:px-12"
  //       onMouseEnter={() => setIsHovered(true)}
  //       onMouseLeave={() => setIsHovered(false)}
  //     >
  //       <h2 className="text-3xl font-bold mb-12">What Our Devotees Say</h2>

  //       <AnimatePresence mode="wait">
  //         <motion.div
  //           key={testimonialIndex}
  //           className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
  //           initial="initial"
  //           animate="animate"
  //           exit="exit"
  //           variants={transitionVariant}
  //         >
  //           {[0, 1].map((i) => (
  //             <motion.div
  //               key={i}
  //               className="testimonial bg-white p-6 rounded-lg shadow-md mb-4"
  //               whileHover={{ scale: 1.05 }}
  //             >
  //               <h3 className="text-xl font-bold mb-4">
  //                 {
  //                   flattenedTestimonials[
  //                     (testimonialIndex + i) % flattenedTestimonials.length
  //                   ].event
  //                 }
  //               </h3>
  //               <p>
  //                 {
  //                   flattenedTestimonials[
  //                     (testimonialIndex + i) % flattenedTestimonials.length
  //                   ].comment
  //                 }
  //               </p>
  //               <span className="text-gray-600 mt-4 block">
  //                 -{" "}
  //                 {
  //                   flattenedTestimonials[
  //                     (testimonialIndex + i) % flattenedTestimonials.length
  //                   ].user
  //                 }
  //                 , Rating:{" "}
  //                 {
  //                   flattenedTestimonials[
  //                     (testimonialIndex + i) % flattenedTestimonials.length
  //                   ].rating
  //                 }
  //               </span>
  //             </motion.div>
  //           ))}
  //         </motion.div>
  //       </AnimatePresence>

  //       {/* Left and Right Custom Buttons for Testimonials */}
  //       <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
  //         <button
  //           onClick={handlePrevTestimonial}
  //           className="bg-indigo-500 text-white p-2 rounded-full shadow-lg"
  //         >
  //           &lt;
  //         </button>
  //       </div>
  //       <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
  //         <button
  //           onClick={handleNextTestimonial}
  //           className="bg-indigo-500 text-white p-2 rounded-full shadow-lg"
  //         >
  //           &gt;
  //         </button>
  //       </div>
  //     </section>

  //     {/* FAQ Section */}
  //     <section
  //       className="faq-section py-16 bg-gray-50 text-center relative px-4 md:px-12"
  //       onMouseEnter={() => setIsFaqHovered(true)}
  //       onMouseLeave={() => setIsFaqHovered(false)}
  //     >
  //       <h2 className="text-3xl font-bold mb-12">
  //         Got Questions? We’ve Got Answers!
  //       </h2>

  //       <AnimatePresence mode="wait">
  //         <motion.div
  //           key={faqIndex}
  //           className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
  //           initial="hidden"
  //           animate="visible"
  //           variants={{
  //             hidden: { opacity: 0, y: 50 },
  //             visible: {
  //               opacity: 1,
  //               y: 0,
  //               transition: { staggerChildren: 0.3 },
  //             },
  //           }}
  //         >
  //           {[0, 1].map((i) => (
  //             <motion.div
  //               key={i}
  //               className="faq-item bg-white p-6 rounded-lg shadow-md"
  //               initial="initial"
  //               animate="animate"
  //               exit="exit"
  //               variants={transitionVariant}
  //               whileHover={{ scale: 1.02 }}
  //             >
  //               <h3 className="text-xl font-semibold mb-4">
  //                 {faqs[(faqIndex + i) % faqs.length].question}
  //               </h3>
  //               <p>{faqs[(faqIndex + i) % faqs.length].answer}</p>
  //             </motion.div>
  //           ))}
  //         </motion.div>
  //       </AnimatePresence>

  //       {/* Left and Right Custom Buttons for FAQs */}
  //       <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
  //         <button
  //           onClick={handlePrevFaq}
  //           className="bg-indigo-500 text-white p-2 rounded-full shadow-lg"
  //         >
  //           &lt;
  //         </button>
  //       </div>
  //       <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
  //         <button
  //           onClick={handleNextFaq}
  //           className="bg-indigo-500 text-white p-2 rounded-full shadow-lg"
  //         >
  //           &gt;
  //         </button>
  //       </div>
  //     </section>
  //   </div>
  // );
};

export default Service;
