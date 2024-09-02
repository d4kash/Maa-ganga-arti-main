"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PincodeSearch = () => {
  const [pincode, setPincode] = useState('');
  const [date, setDate] = useState(new Date());
  const [isAvailable, setIsAvailable] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null); // Clear previous errors
    if (!pincode) {
      setError('Pincode is required.');
      return;
    }
    try {
      const response = await fetch(`/api/checkPincode?pincode=${pincode}&date=${date.toISOString()}`);
      const result = await response.json();

      if (result.available) {
        setIsAvailable(true);
      } else {
        setIsAvailable(false);
        setShowModal(true);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleSubmit = async () => {
    setError(null);
    if (!userName || !userPhone) {
      setError('Name and phone number are required.');
      return;
    }

    try {
      await fetch('/api/saveUserDetails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: userName, phone: userPhone }),
      });

      alert('We will get in touch ASAP.');
      setShowModal(false);
      setUserName('');
      setUserPhone('');
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center p-5 bg-gray-100 rounded-lg max-w-3xl mx-auto shadow-md">
      <motion.div
        className="flex flex-col gap-4 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Heading */}
        <h1 className="text-2xl font-bold text-center mb-2">Pincode Availability Checker</h1>
        <p className="text-center text-gray-700 mb-6">
          Enter your pincode and select a date to check availability. If the pincode is unavailable, 
          we'll ask for your contact information to get in touch.
        </p>

        {/* Input Row */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
          <input 
            type="text" 
            placeholder="Enter Pincode" 
            value={pincode} 
            onChange={(e) => setPincode(e.target.value)} 
            className="p-3 border border-gray-300 rounded-md text-lg w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Enter Pincode"
          />
          <DatePicker 
            selected={date} 
            onChange={(date) => setDate(date)} 
            className="p-3 border border-gray-300 rounded-md text-lg w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Select Date"
          />
          <motion.button
            className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 w-full sm:w-1/3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSearch}
          >
            Search
          </motion.button>
        </div>
      </motion.div>

      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

      {isAvailable !== null && (
        isAvailable ? (
          <motion.div
            className="mt-4 text-green-500 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>Congratulations! The pincode is available.</p>
          </motion.div>
        ) : showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h2 id="modal-title" className="text-lg font-bold mb-4">Pincode Not Available</h2>
              <p id="modal-description" className="mb-4">Please provide your details so we can contact you.</p>
              <input 
                type="text" 
                placeholder="Enter Name" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)} 
                className="p-3 border border-gray-300 rounded-md text-lg w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Enter Name"
              />
              <input 
                type="text" 
                placeholder="Enter Phone Number" 
                value={userPhone} 
                onChange={(e) => setUserPhone(e.target.value)} 
                className="p-3 border border-gray-300 rounded-md text-lg w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Enter Phone Number"
              />
              <motion.button
                className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
              >
                Submit
              </motion.button>
            </div>
          </motion.div>
        )
      )}
    </div>
  );
};

export default PincodeSearch;
