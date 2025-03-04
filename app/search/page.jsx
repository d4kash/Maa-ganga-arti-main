"use client"; // Ensures this component runs only on the client-side

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { formatAmount, formatDiscountPercent } from "../../utils/constants";

export default function SearchPage() {
  const [pincode, setPincode] = useState("");
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [service, setService] = useState("wedding");
  const [showTable, setShowTable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [panditData, setPanditData] = useState([]);
  const [error, setError] = useState(null);
  // const [serviceId, setServiceId] = useState(serviceIdProp || "");
  // console.log("serviceIdProp:",serviceIdProp);
  // States for form validation
  const [formErrors, setFormErrors] = useState({});

  // States for Popup Modal
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({
    name: "",
    phone: "",
    pincode: "",
  });
  const [popupErrors, setPopupErrors] = useState({});
  const [isSubmittingPopup, setIsSubmittingPopup] = useState(false);
  const [popupSuccess, setPopupSuccess] = useState(false);
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const pincodeParam = queryParams.get("pincode");
    console.log("pincode:", pincodeParam);
    setPincode(pincodeParam || "");
  }, []);
  const validateForm = () => {
    const errors = {};
    if (!pincode) {
      errors.pincode = "Pincode is required.";
    } else if (!/^\d{6}$/.test(pincode)) {
      errors.pincode = "Pincode must be a 6-digit number.";
    }

    if (!service) {
      errors.service = "Please select a service type.";
    }

    // Uncomment if date is required
    // if (!checkInDate) {
    //   errors.checkInDate = "Please select an event date.";
    // } else if (checkInDate < new Date()) {
    //   errors.checkInDate = "Event date cannot be in the past.";
    // }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSearch = async () => {
    if (!validateForm()) return;

    setError(null);
    setIsLoading(true);

    try {
      // Simulate API call to fetch pandit data
      const response = await axios.post(
        "https://mmngrm2h3i.execute-api.ap-south-1.amazonaws.com/gangaArti/Area_availability",
        {
          pincode,
          service,
          // checkInDate: checkInDate ? checkInDate.toISOString() : null, // If needed
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseBody = response.data["body-json"];
      // console.log("statuscode", responseBody.statusCode)
      if (responseBody.statusCode === 200) {
        setPanditData(responseBody.body);
        setShowTable(true);
      } else if (responseBody.statusCode === 400) {
        // Show Popup Form
        setPopupData((prev) => ({ ...prev, pincode })); // Pre-fill pincode
        setShowPopup(true);
      } else {
        setError(
          `${responseBody.body} pincode` || "Unexpected error occurred."
        );
      }
    } catch (error) {
      setError("Error fetching data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setShowTable(false);
    setCheckInDate(null);
    setPanditData([]);
    setService("");
    setFormErrors({});
    setError(null);
  };
  return (
    <div id="book-section">
      <h1>Find Ganga Aarti theme Services in Pincode {pincode}</h1>
      <motion.div
        className="p-4 sm:p-6 md:p-8 items-center bg-gray-50 rounded-xl shadow-inner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <motion.div
          className="pb-4 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Check for Slot Availability
          </h4>
        </motion.div>

        {/* Search Form */}
        <form id="booking-form">
          <motion.div
            className="flex flex-col sm:flex-row gap-4 p-4 sm:p-6 bg-white rounded-3xl shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            {/* Pincode input */}
            <div className="flex flex-col w-full">
              <label className="mb-1 text-gray-700">Pincode</label>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="w-6 h-6 text-blue-500" />
                <input
                  type="tel"
                  placeholder="Enter Pincode"
                  value={pincode}
                  autoComplete="on"
                  //onChange={(e) => setPincode(e.target.value)}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Allow only numbers by using a regular expression
                    if (/^\d*$/.test(value) && value.length <= 6) {
                      setPincode(value);
                    }
                  }}
                  className={`w-full p-3 text-gray-700 border ${
                    formErrors.pincode ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
              {formErrors.pincode && (
                <p className="text-red-600 text-sm mt-1">
                  {formErrors.pincode}
                </p>
              )}
            </div>

            {/* Event Date Picker */}
            <div className="flex flex-col w-full">
              <label className="mb-1 text-gray-700">Event Date</label>
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="w-6 h-6 text-blue-500" />
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  placeholderText="Event Date"
                  className={`w-full p-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  // Uncomment if date is required
                  // minDate={new Date()}
                  minDate={new Date()}
                />
              </div>
              {formErrors.checkInDate && (
                <p className="text-red-600 text-sm mt-1">
                  {formErrors.checkInDate}
                </p>
              )}
            </div>

            {/* Service Type Dropdown */}
            <div className="flex flex-col w-full">
              <label className="mb-1 text-gray-700">Service Type</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className={`w-full p-3 text-gray-700 border ${
                  formErrors.service ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <option value="" disabled className="text-gray-500">
                  Select Service Type
                </option>
                <option
                  value="wedding"
                  className="text-gray-700 bg-white hover:bg-blue-100"
                >
                  Wedding Event
                </option>
                <option
                  value="puja"
                  className="text-gray-700 bg-white hover:bg-blue-100"
                >
                  Puja Event
                </option>
              </select>

              {formErrors.service && (
                <p className="text-red-600 text-sm mt-1">
                  {formErrors.service}
                </p>
              )}
            </div>

            {/* Search/Reset Button */}
            <div className="flex flex-col w-full">
              <label className="mb-1 text-gray-700 invisible">Button</label>
              <motion.button
                id="search-button"
                onClick={showTable ? handleReset : handleSearch}
                className={`w-full p-3 rounded-lg transition-colors focus:outline-none focus:ring-2 ${
                  showTable
                    ? "bg-red-600 hover:bg-red-700 focus:ring-red-500"
                    : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
                } text-white ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`} // Add styles for disabled state
                whileHover={isLoading ? {} : { scale: 1.05 }} // Disable hover effect when loading
                whileTap={isLoading ? {} : { scale: 0.95 }} // Disable tap effect when loading
                disabled={isLoading} // Keep the button disabled
              >
                {showTable ? "Reset" : isLoading ? "Loading..." : "Search"}
              </motion.button>
            </div>
          </motion.div>
        </form>
        {/* Error Message */}
        {error && <p className="text-red-600 mt-4">{error}</p>}

        {/* Results Table */}
        {showTable && !isLoading && (
          <motion.div
            className="mt-8 bg-white rounded-lg shadow-lg p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto text-left text-gray-800">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="p-4 text-blue-600 font-bold border-b text-sm md:text-base">
                      No of Pandit(s)
                    </th>
                    <th className="p-4 text-blue-600 font-bold border-b text-sm md:text-base">
                      Rate
                    </th>
                    <th className="p-4 text-blue-600 font-bold border-b text-sm md:text-base">
                      Discount Rate
                    </th>
                    <th className="p-4 text-blue-600 font-bold border-b text-sm md:text-base">
                      Reserve your seat
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {panditData.map((pandit, index) => (
                    <tr
                      key={pandit.numPersons}
                      className={`${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-gray-100 border-b transition-colors duration-200`}
                    >
                      <td className="p-4 text-gray-800 text-sm md:text-base">
                        {pandit.numPersons} pandits
                      </td>
                      <td className="p-4 text-gray-800 text-sm md:text-base">
                        <div className="flex items-center">
                          <span className="text-red-600 line-through mr-2">
                            {formatAmount(pandit.actualRate)}
                          </span>
                          <span className="text-green-600 font-semibold">
                            {formatDiscountPercent(pandit.discountPercent)}% Off
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-gray-800 text-sm md:text-base">
                        {formatAmount(pandit.discountRate)}
                      </td>
                      <td className="p-4">
                        <Link href={`/#book-section`}>
                          <motion.button
                            onClick={() => null}
                            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Book Now
                          </motion.button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
