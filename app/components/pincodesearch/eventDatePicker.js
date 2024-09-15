import { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventDatePicker = ({ onDateChange }) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [slotsByDate, setSlotsByDate] = useState({});

  // Helper function to generate random remaining slots (max 8)
  const generateRandomSlots = () => {
    const slots = {};
    const daysInMonth = 31; // Assuming 31 days in the current month

    for (let i = 1; i <= daysInMonth; i++) {
      const dateKey = new Date(2024, 8, i).toLocaleDateString(); // Adjust month (8 = September)
      slots[dateKey] = Math.floor(Math.random() * 9); // Random slots between 0 and 8
    }
    return slots;
  };

  // Initialize slots when component mounts
  useEffect(() => {
    const initialSlots = generateRandomSlots();
    setSlotsByDate(initialSlots);
  }, []);

  // Function to handle date selection
  const handleDateChange = (date) => {
    setCheckInDate(date);
    onDateChange(date); // Call the parent's function to return the selected date
  };

  // Function to render the date and slots
  const renderDateWithSlots = (day, date) => {
    const dateKey = date.toLocaleDateString();
    const remainingSlots = slotsByDate[dateKey] ?? 0; // Default to 0 slots if not found

    return (
      <div className="flex flex-col items-center">
        <span>{day}</span>
        <span className="text-xs text-green-600">
          {remainingSlots} slots
        </span>
      </div>
    );
  };

  return (
    <div className="flex items-center space-x-2 w-full">
      <FaCalendarAlt className="w-6 h-6 text-blue-500" />
      <DatePicker
        selected={checkInDate}
        onChange={handleDateChange} // Call handleDateChange on date selection
        placeholderText="Event Date"
        className="w-full p-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        renderDayContents={renderDateWithSlots} // Custom day rendering
      />
    </div>
  );
};

export default EventDatePicker;
