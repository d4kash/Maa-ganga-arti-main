"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const transitionVariant = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.5 },
};

const FaqPage = () => {
   return (
      <div>
        {/* FAQs Section */}
        <section className="faqs-section py-16 bg-gray-50 text-center relative px-4 md:px-12">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
    
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* FAQ Items */}
            
            {/* FAQ 1 */}
            <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold mb-4">What is Ganga Aarti, and why is it significant?</h3>
              <p>Ganga Aarti is a sacred Hindu ritual that takes place on the banks of the Ganges River. It involves the offering of light and prayers to the holy river, symbolizing the purification of one&apos;s mind and soul.</p>
              <span className="text-gray-600 mt-4 block">Keywords: Ganga Aarti significance, holy river ritual, spiritual ceremony, Hindu rituals</span>
            </div>
    
            {/* FAQ 2 */}
            <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold mb-4">How can I book a Ganga Aarti theme with Shree Narayan Ganga Aarti?</h3>
              <p>To book a Ganga Aarti theme, visit our booking page, select your preferred event type and date, fill in the required details, and complete the online payment through our secure gateway.</p>
              <span className="text-gray-600 mt-4 block">Keywords: Ganga Aarti booking, book Ganga Aarti, Ganga Aarti theme reservation</span>
            </div>
    
            {/* FAQ 3 */}
            <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold mb-4">What types of events can be organized during Ganga Aarti?</h3>
              <p>Events like Namkaran, Engagement, Wedding, Durga Puja, and other personal or religious ceremonies can be organized during Ganga Aarti by Shree Narayan Ganga Aarti.</p>
              <span className="text-gray-600 mt-4 block">Keywords: Ganga Aarti theme types, Namkaran Ganga Aarti, wedding Ganga Aarti, Durga Puja Ganga Aarti</span>
            </div>
    
            {/* FAQ 4 */}
            <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold mb-4">How early should I book my event with Shree Narayan Ganga Aarti?</h3>
              <p>We recommend booking your event at least 2-3 weeks in advance, especially during peak festival seasons or major holidays to ensure availability.</p>
              <span className="text-gray-600 mt-4 block">Keywords: advance booking Ganga Aarti, early booking Ganga Aarti, Ganga Aarti peak season booking</span>
            </div>
    
            {/* FAQ 5 */}
            <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold mb-4">Is there a limit to the number of guests I can invite?</h3>
              <p>The number of guests depends on the event type and location. Most ceremonies can accommodate a flexible number of guests, and guest details can be specified during the booking process.</p>
              <span className="text-gray-600 mt-4 block">Keywords: Ganga Aarti guest limit, event guest number, Ganga Aarti ceremony guest count</span>
            </div>
    
            {/* FAQ 6 */}
            <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold mb-4">What is the cancellation policy for an event booking?</h3>
              <p>Cancellations made 7 days in advance receive a full refund. Cancellations within 7 days will get a 50% refund, and no refunds are provided for cancellations made within 24 hours of the event.</p>
              <span className="text-gray-600 mt-4 block">Keywords: Ganga Aarti cancellation policy, event cancellation Ganga Aarti, refund policy Ganga Aarti</span>
            </div>
    
            {/* FAQ 7 */}
            <div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold mb-4">Are customized rituals or special requests available?</h3>
              <p>Yes, Shree Narayan Ganga Aarti can tailor rituals based on your religious or cultural needs. Please mention any specific requests during the booking process to ensure arrangements are made.</p>
              <span className="text-gray-600 mt-4 block">Keywords: customized Ganga Aarti rituals, special requests for Ganga Aarti, personalized Ganga Aarti ceremony</span>
            </div>
    
            {/* FAQ 8 */}
<div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
  <h3 className="text-xl font-bold mb-4">Do you provide any live streaming options for the events?</h3>
  <p>Yes, live streaming services are available for those unable to attend in person. This can be included as an add-on during your booking.</p>
  <span className="text-gray-600 mt-4 block">Keywords: Ganga Aarti live stream, virtual Ganga Aarti, Ganga Aarti online service</span>
</div>

{/* FAQ 9 */}
<div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
  <h3 className="text-xl font-bold mb-4">Can I reschedule my event after booking?</h3>
  <p>Yes, events can be rescheduled up to 3 days before the event date, depending on availability. Additional charges may apply based on the changes.</p>
  <span className="text-gray-600 mt-4 block">Keywords: reschedule Ganga Aarti, change booking Ganga Aarti, modify Ganga Aarti theme</span>
</div>

{/* FAQ 10 */}
<div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
  <h3 className="text-xl font-bold mb-4">Are photography and videography services available?</h3>
  <p>Yes, Shree Narayan Ganga Aarti offers professional photography and videography services to capture your special moments during the Ganga Aarti ceremony.</p>
  <span className="text-gray-600 mt-4 block">Keywords: Ganga Aarti photography, event videography Ganga Aarti, ceremony photography services</span>
</div>

{/* FAQ 11 */}
<div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
  <h3 className="text-xl font-bold mb-4">What should I wear to the Ganga Aarti ceremony?</h3>
  <p>We recommend traditional Indian attire for religious events. Please avoid footwear near the Ganges River as it is considered sacred.</p>
  <span className="text-gray-600 mt-4 block">Keywords: dress code Ganga Aarti, what to wear Ganga Aarti, traditional attire for Ganga Aarti</span>
</div>

{/* FAQ 12 */}
<div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
  <h3 className="text-xl font-bold mb-4">Can non-Hindus participate in the Ganga Aarti ceremony?</h3>
  <p>Yes, Ganga Aarti is open to people of all backgrounds. Anyone can participate and enjoy the spiritual atmosphere.</p>
  <span className="text-gray-600 mt-4 block">Keywords: non-Hindus Ganga Aarti, participation in Ganga Aarti, inclusive Ganga Aarti ceremony</span>
</div>

{/* FAQ 13 */}
<div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
  <h3 className="text-xl font-bold mb-4">Is there parking available at the Ganga Aarti venue?</h3>
  <p>Parking is available at most of our Ganga Aarti venues. However, availability may vary depending on the location and time of the event.</p>
  <span className="text-gray-600 mt-4 block">Keywords: Ganga Aarti parking, venue parking Ganga Aarti, event parking availability</span>
</div>

{/* FAQ 14 */}
<div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
  <h3 className="text-xl font-bold mb-4">Do you offer special packages for multiple events or large gatherings?</h3>
  <p>Yes, Shree Narayan Ganga Aarti offers tailored packages for multiple events, large groups, or multi-day ceremonies. Please contact our team for more details and pricing.</p>
  <span className="text-gray-600 mt-4 block">Keywords: Ganga Aarti theme packages, large group Ganga Aarti, multi-day event booking Ganga Aarti</span>
</div>

{/* FAQ 15 */}
<div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
  <h3 className="text-xl font-bold mb-4">Can we combine Ganga Aarti with other religious rituals?</h3>
  <p>Yes, you can combine Ganga Aarti with other religious ceremonies such as havans, pujas, and satsangs. Let us know your requirements during the booking process.</p>
  <span className="text-gray-600 mt-4 block">Keywords: combined rituals Ganga Aarti, havans and Ganga Aarti, religious ceremonies Ganga Aarti</span>
</div>

{/* FAQ 16 */}
<div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
  <h3 className="text-xl font-bold mb-4">What is the best time to attend Ganga Aarti?</h3>
  <p>The best time to attend Ganga Aarti is usually during the evening, just after sunset. However, timing can vary based on specific events and locations.</p>
  <span className="text-gray-600 mt-4 block">Keywords: best time for Ganga Aarti, evening Ganga Aarti, sunset Ganga Aarti</span>
</div>

{/* FAQ 17 */}
<div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
  <h3 className="text-xl font-bold mb-4">How many pandits can be booked for my event?</h3>
  <p>You can book between 1 to 5 pandits for your event, depending on the size and type of ceremony. This can be customized during the booking process to meet your specific needs.</p>
  <span className="text-gray-600 mt-4 block">Keywords: book pandits Ganga Aarti, pandits for Ganga Aarti theme, customized pandit booking</span>
</div>

{/* FAQ 18 */}
<div className="faq-item bg-white p-6 rounded-lg shadow-md mb-4">
  <h3 className="text-xl font-bold mb-4">How many slots are available for Ganga Aarti ceremonies each day?</h3>
  <p>Shree Narayan Ganga Aarti offers 3 time slots per day: morning, afternoon, and evening. You can choose your preferred slot based on availability during the booking process.</p>
  <span className="text-gray-600 mt-4 block">Keywords: Ganga Aarti time slots, daily Ganga Aarti schedule, morning evening Ganga Aarti</span>
</div>

    
          </div>
        </section>
      </div>
    );
    
};

export default FaqPage;