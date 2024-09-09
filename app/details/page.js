"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// import { useRouter } from 'next/router';
import { useTranslation } from "react-i18next";
import StepCard from './stepCard';
import PincodeSearch from '../components/pincodesearch/pincodesearch';
import {services, ceremonySteps} from '../../utils/constants';

const tabs = [
  { id: "booking", label: "Check For Avability" },
  { id: "description", label: "Description" },
  { id: "steps", label: "Steps Performed" },
  { id: "our_requirements", label: "Event Day Requirements" },
  { id: "bookingtc", label: "Booking Terms" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};



const ProductPage = () => {
  // const router = useRouter();
  const [productId, setProductId] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const { t } = useTranslation();
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const productParams = queryParams.get("id");

    if (productParams) {
     
        setProductId(productParams);
        
      }
      else{
        // console.log('invalid product id');
      }
  }, []);

   // Function to handle search button click
   const handleSearchAvailability = () => {
    setActiveTab("booking"); // Automatically set the tab to 'booking'
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "booking":
        return (
          <PincodeSearch serviceIdProp={productId}/>
        );
      case "description":
        return (
          <p className="text-gray-600">
            {t(services[productId].description)}
          </p>
        );
      case "steps":
        return (
          <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Ceremony Steps</h1>
          <h1 className="text-3xl md:text-2xl font-bold text-center text-indigo-800 mb-8">These are the steps which were performed during the ceremony by our team</h1>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {ceremonySteps.map((step) => (
              <StepCard
                key={step.number}
                stepNumber={step.number}
                title={step.title}
                description={step.description}
                purpose={step.purpose}
              />
            ))}
          </motion.div>
        </div>
        );
        case "our_requirements":
          return (
            <div className="container mx-auto px-4 py-8">
  <p className="text-gray-700 mb-4">
    To ensure a smooth and successful Ganga Aarti ceremony, please make the following arrangements:
  </p>

  <section className="mb-6">
    <h2 className="text-xl font-semibold mb-2">Setup and Space</h2>
    <p className="text-gray-700 mb-4">
      Ensure that adequate space is provided for the Aarti setup, including space for Pandits, ritual items, and any necessary equipment. The setup should be completed at least 30 minutes before the start of the ceremony.
    </p>

    <ul className="list-disc pl-6 space-y-4 text-gray-700">
      <li>
        <strong>Room Requirements:</strong> Provide a room for a minimum of 24 hours where our team can rest upon arrival and prepare for the ceremony. This room should be equipped with basic amenities and be available for us to dress and set up prior to the event.
      </li>
      <li>
        <strong>Flower Arrangements:</strong> Provide 5-8 kg of mixed flowers, including marigolds (genda) and rose petals (pankhudi), for use during the Aarti.
      </li>
      <li>
        <strong>Food for Pandits:</strong> Arrange meals for the Pandits at least twice during the event day, including breakfast and lunch/dinner based on the schedule.
      </li>
      <li>
        <strong>Transport Services:</strong> Arrange for pick-up and drop-off facilities for our team from the nearest station and bus stop to ensure timely arrival and departure.
      </li>
      <li>
        <strong>Equipment Provision:</strong> Provide necessary equipment for the ceremony, including:
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Sound System:</strong> A setup with 4-5 microphones and speakers to ensure clear audio for the Aarti and any accompanying music.
          </li>
          <li>
            <strong>Table for Ritual Items:</strong> A table to place the ritual items required for the Aarti, including lamps, incense, flowers, and other ceremonial items.
          </li>
        </ul>
      </li>
    </ul>
  </section>
</div>

        );
        case "bookingtc":
          return (
            <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Booking Terms and Conditions</h1>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Advance Payment</h2>
              <p className="mb-2">
                <strong>Payment Terms:</strong> To secure your booking, a 40% advance payment is required based on the total price of the services. This ensures your preferred date and time for the Ganga Aarti ceremony are reserved.
              </p>
              <p>
                <strong>Payment Methods:</strong> We accept payments via bank transfer, credit/debit cards, or other methods specified during the booking process.
              </p>
            </section>
      
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Booking Timeline</h2>
              <p className="mb-2">
                <strong>Advance Booking:</strong> To ensure availability and sufficient preparation time, we recommend booking our services 15 to 30 days prior to your event. This allows us to tailor the ceremony to meet your preferences.
              </p>
              <p>
                <strong>Booking Confirmation:</strong> Your booking will be confirmed upon receipt of the advance payment. Once confirmed, a detailed schedule and plan for the Ganga Aarti ceremony will be provided.
              </p>
            </section>
      
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Cancellation Policy</h2>
              <p className="mb-2">
                <strong>Cancellation Terms:</strong> Cancellations are accepted if made at least 7 days prior to your event. Unfortunately, cancellations within 7 days of the event will not be eligible for a refund.
              </p>
              <p>
                <strong>Refund Policy:</strong> If you cancel before the 7-day deadline, 25% of the advance payment will be refunded. The remaining amount is non-refundable due to preparation and scheduling commitments.
              </p>
            </section>
      
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Changes and Modifications</h2>
              <p className="mb-2">
                <strong>Modifications:</strong> Any changes to the booking, including the date, time, or rituals, must be communicated at least 7 days before the event. Requests made after this period may incur additional charges or may not be accommodated.
              </p>
              <p>
                <strong>Additional Charges:</strong> Modifications to your original booking may result in extra charges, depending on the nature of the changes and any additional costs involved.
              </p>
            </section>
          </div>
          );
        default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Product Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0"
      >
        {/* Product Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="w-full md:w-1/2"
        >
          <img
  src={services[productId].image}
  alt="wedding ganga aarti"
  className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[400px] rounded-lg shadow-md"
/>
        </motion.div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-indigo-800">
          {t(services[productId].title)}
          </h1>
          <p className="text-gray-600">
          {`${t(services[productId].description).substring(0, 200)}...`}
          </p>
          <div className="text-2xl font-bold text-gray-900">Time duration: 30-35 mins</div>
          <br/>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
  <p className="text-center sm:text-left text-gray-700">
    You can also check your availability
  </p>
  <button
    className="bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300"
    onClick={handleSearchAvailability}
  >
    Search Availability
  </button>
</div>

        </div>
      </motion.div>

      {/* Tabs Section */}
      <div className="mt-10">
        {/* Tab Headers */}
        <div className="border-b border-gray-300 mb-4">
          <ul className="flex space-x-4 overflow-x-auto">
            {tabs.map((tab) => (
              <li key={tab.id} className="flex-shrink-0">
                <button
                  className={`py-2 px-4 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm sm:text-base lg:text-lg"
        >
          {renderTabContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage;
