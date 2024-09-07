"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const PincodeSearch = () => {
  const [pincode, setPincode] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [service, setService] = useState(""); // New state for the service type
  const [showTable, setShowTable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [panditData, setPanditData] = useState([]);
  const [error, setError] = useState(null);

  const dummyPanditData = [
    { id: 2, name: "2", price: "₹2000" },
    { id: 4, name: "4", price: "₹2500" },
    { id: 3, name: "6", price: "₹2200" },
    { id: 6, name: "8", price: "₹1800" },
    { id: 5, name: "10", price: "₹2400" },
    { id: 8, name: "12", price: "₹2100" },
  ];

  const handleSearch = async () => {
    setError(null);
    setIsLoading(true);

    try {
      // Simulate API call to fetch pandit data
      const response = await axios.post(
        "https://mmngrm2h3i.execute-api.ap-south-1.amazonaws.com/gangaArti/Area_availability", 
        {
          pincode,
          service,
          // checkInDate // You can also send the check-in date here if required.
        },
        { 
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      
      if (response.data['body-json']['statusCode'] === 200) {
        setPanditData(response.data['body-json']['body'] || dummyPanditData);
        setShowTable(true);
      } else {
        setError(response.data['body-json']['body']);
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
    setService(""); // Reset the service selection
  };

  return (
    <motion.div
      className="p-8 items-center bg-gray-50 rounded-xl shadow-inner"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="pb-4 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h4 className="text-2xl font-semibold text-gray-800">
          Check for Slot Availability
        </h4>
      </motion.div>

      <motion.div
        className="flex flex-wrap items-center justify-between p-6 bg-white rounded-3xl shadow-lg space-y-4 md:space-y-0 md:space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        {/* Pincode input */}
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <FaMapMarkerAlt className="w-6 h-6 text-blue-500" />
          <input
            type="text"
            placeholder="Enter Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="w-full md:w-48 p-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Event Date Picker */}
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <FaCalendarAlt className="w-6 h-6 text-blue-500" />
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            placeholderText="Event Date"
            className="w-full md:w-36 p-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Service Type Dropdown */}
        <div className="w-full md:w-auto">
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full md:w-48 p-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select Service Type
            </option>
            <option value="wedding">Wedding Event</option>
            <option value="puja">Puja Event</option>
          </select>
        </div>

        {/* Search/Reset Button */}
        <div className="w-full md:w-auto">
          <motion.button
            onClick={showTable ? handleReset : handleSearch}
            className={`w-full p-3 rounded-lg transition-colors focus:outline-none focus:ring-2 ${
              showTable
                ? "bg-red-600 hover:bg-red-700 focus:ring-red-500"
                : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
            } text-white`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showTable ? "Reset" : isLoading ? "Loading..." : "Search"}
          </motion.button>
        </div>
      </motion.div>

      {error && <p className="text-red-600 mt-4">{error}</p>}

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
                    No of Pandit
                  </th>
                  <th className="p-4 text-blue-600 font-bold border-b text-sm md:text-base">
                    Price
                  </th>
                  <th className="p-4 text-blue-600 font-bold border-b text-sm md:text-base">
                    Discount Price
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
                      {pandit.numPersons}
                    </td>
                    <td className="p-4 text-gray-800 text-sm md:text-base">
                      {pandit.actualRate}
                    </td>
                    <td className="p-4 text-gray-800 text-sm md:text-base">
                      {pandit.discountRate}
                    </td>
                    <td className="p-4">
                      <motion.button
                        onClick={() =>
                          alert("Booking functionality not yet implemented")
                        }
                        className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Book Now
                      </motion.button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PincodeSearch;
