"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const PincodeSearch = () => {
  const [pincode, setPincode] = useState('');
  const [date, setDate] = useState(new Date());
  const [isAvailable, setIsAvailable] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [error, setError] = useState(null);

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
  const [checkInDate, setCheckInDate] = useState(null);
  const [showTable, setShowTable] = useState(false);
  const [panditData] = useState([
    { id: 2, name: '2', price: '₹2000' },
    { id: 4, name: '4', price: '₹2500' },
    { id: 3, name: '6', price: '₹2200' },
    { id: 6, name: '8', price: '₹1800' },
    { id: 5, name: '10', price: '₹2400' },
    { id: 8, name: '12', price: '₹2100' },
  ]);

  const handleSearch = () => {
    setShowTable(true);
  };

  const handleReset = () => {
    setShowTable(false);
    setCheckInDate(null);
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
        <h4 className="text-2xl font-semibold text-gray-800">Check for Availability</h4>
      </motion.div>

      <motion.div 
        className="flex flex-wrap items-center justify-between p-6 bg-white rounded-3xl shadow-lg space-y-4 md:space-y-0 md:space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <FaMapMarkerAlt className="w-6 h-6 text-blue-500" />
          <input
            type="text"
            placeholder="Where to?"
            className="w-full md:w-48 p-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center space-x-2 w-full md:w-auto">
          <FaCalendarAlt className="w-6 h-6 text-blue-500" />
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            placeholderText="Check in"
            className="w-full md:w-36 p-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center space-x-2 w-full md:w-auto">
          <FaCalendarAlt className="w-6 h-6 text-blue-500" />
          <input
            type="text"
            placeholder="Check out"
            className="w-full md:w-36 p-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-full md:w-auto">
  <motion.button
    onClick={showTable ? handleReset : handleSearch}
    className={`w-full p-3 rounded-lg transition-colors focus:outline-none focus:ring-2 ${showTable ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'} text-white`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {showTable ? 'Reset' : 'Search'}
  </motion.button>
</div>

      </motion.div>

      {showTable && (
        <motion.div 
          className="mt-8 bg-white rounded-lg shadow-lg p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <table className="min-w-full table-auto text-left text-gray-800">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4">No of Pandit</th>
                <th className="p-4">Price</th>
                <th className="p-4">Reserve your seat</th>
              </tr>
            </thead>
            <tbody>
              {panditData.map((pandit) => (
                <tr key={pandit.id} className="border-b">
                  <td className="p-4">{pandit.name}</td>
                  <td className="p-4">{pandit.price}</td>
                  <td className="p-4">
                    <motion.button
                      onClick={() => alert('Booking functionality not yet implemented')}
                      className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        </motion.div>
      )}
    </motion.div>
  );
};

export default PincodeSearch;
