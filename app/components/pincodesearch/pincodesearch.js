"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { formatAmount, formatDiscountPercent } from "../../../utils/constants";

const PincodeSearch = ({ serviceIdProp }) => {
  const [pincode, setPincode] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [service, setService] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [panditData, setPanditData] = useState([]);
  const [error, setError] = useState(null);
  const [serviceId, setServiceId] = useState(serviceIdProp || "");

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
        setError(`${responseBody.body} pincode` || "Unexpected error occurred.");
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

  // Popup Form Handlers
  const validatePopupForm = () => {
    const errors = {};
    if (!popupData.name.trim()) {
      errors.name = "Name is required.";
    }
    if (!popupData.phone) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(popupData.phone)) {
      errors.phone = "Phone number must be 10 digits.";
    }
    if (!popupData.pincode) {
      errors.pincode = "Pincode is required.";
    } else if (!/^\d{6}$/.test(popupData.pincode)) {
      errors.pincode = "Pincode must be a 6-digit number.";
    }

    setPopupErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePopupSubmit = async (e) => {
    e.preventDefault();
    if (!validatePopupForm()) return;

    setIsSubmittingPopup(true);
    setPopupSuccess(false);

    try {
      // Simulate API call to submit popup data
      const response = await axios.post(
        "https://your-api-endpoint.com/submitUserData", // Replace with your API
        {
          name: popupData.name,
          phone: popupData.phone,
          pincode: popupData.pincode,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setPopupSuccess(true);
        // Optionally, close the popup after a delay
        setTimeout(() => {
          setShowPopup(false);
          setPopupData({ name: "", phone: "", pincode: "" });
          setPopupSuccess(false);
        }, 2000);
      } else {
        setPopupErrors({ api: "Failed to submit data. Please try again." });
      }
    } catch (error) {
      setPopupErrors({ api: "Failed to submit data. Please try again." });
    } finally {
      setIsSubmittingPopup(false);
    }
  };

  return (
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
              type="text"
              placeholder="Enter Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className={`w-full p-3 text-gray-700 border ${
                formErrors.pincode ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
          {formErrors.pincode && (
            <p className="text-red-600 text-sm mt-1">{formErrors.pincode}</p>
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
  <option value="wedding" className="text-gray-700 bg-white hover:bg-blue-100">
    Wedding Event
  </option>
  <option value="puja" className="text-gray-700 bg-white hover:bg-blue-100">
    Puja Event
  </option>
</select>

          {formErrors.service && (
            <p className="text-red-600 text-sm mt-1">{formErrors.service}</p>
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
                      <Link
                        href={`/multistepbook?date=${checkInDate.toDateString()}&service=${serviceIdProp}&pin=${pincode}&nop=${pandit.numPersons}`}
                      >
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

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
  We Need a Little More Information
</h2>
<h4 className="text-lg md:text-xl font-semibold mb-4 text-indigo-600">
  We&apos;re currently unable to serve your area, but don&apos;t worry! Please provide your details, and our team will reach out to assist you as soon as possible.
</h4>
                <form onSubmit={handlePopupSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-gray-700">Name</label>
                    <input
                      type="text"
                      value={popupData.name}
                      onChange={(e) =>
                        setPopupData({ ...popupData, name: e.target.value })
                      }
                      className={`w-full p-2 border ${
                        popupErrors.name ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Enter your name"
                    />
                    {popupErrors.name && (
                      <p className="text-red-600 text-sm mt-1">
                        {popupErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-gray-700">Phone Number</label>
                    <input
                      type="text"
                      value={popupData.phone}
                      onChange={(e) =>
                        setPopupData({ ...popupData, phone: e.target.value })
                      }
                      className={`w-full p-2 border ${
                        popupErrors.phone
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Enter your phone number"
                    />
                    {popupErrors.phone && (
                      <p className="text-red-600 text-sm mt-1">
                        {popupErrors.phone}
                      </p>
                    )}
                  </div>

                  {/* Pincode Field */}
                  <div>
                    <label className="block text-gray-700">Pincode</label>
                    <input
                      type="text"
                      value={popupData.pincode}
                      onChange={(e) =>
                        setPopupData({ ...popupData, pincode: e.target.value })
                      }
                      className={`w-full p-2 border ${
                        popupErrors.pincode
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Enter your pincode"
                    />
                    {popupErrors.pincode && (
                      <p className="text-red-600 text-sm mt-1">
                        {popupErrors.pincode}
                      </p>
                    )}
                  </div>

                  {/* API Error */}
                  {popupErrors.api && (
                    <p className="text-red-600 text-sm">{popupErrors.api}</p>
                  )}

                  {/* Success Message */}
                  {popupSuccess && (
                    <p className="text-green-600 text-sm">
                      Your information has been submitted successfully!
                    </p>
                  )}

                  {/* Buttons */}
                  <div className="flex justify-end space-x-2">
                    <motion.button
                      type="button"
                      onClick={() => setShowPopup(false)}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={isSubmittingPopup || popupSuccess}
                    >
                      {isSubmittingPopup
                        ? "Submitting..."
                        : popupSuccess
                        ? "Submitted"
                        : "Submit"}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PincodeSearch;
