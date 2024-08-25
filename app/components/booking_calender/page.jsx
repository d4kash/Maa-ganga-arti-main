"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSwipeable } from "react-swipeable"; // For swipe gestures

const Calendar = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const today = new Date();
  const [currentMonthIndex, setCurrentMonthIndex] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [disablePrevious, setDisablePrevious] = useState(true);

  // Generate calendar data for the current year
  const generateCalendarData = () => {
    let yearData = [];

    months.forEach((month, monthIndex) => {
      const daysInMonth = new Date(currentYear, monthIndex + 1, 0).getDate();
      let monthData = [];

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentYear, monthIndex, day);
        const dayOfWeek = date.getDay();
        const isPastDate = date < today; // Disable past dates

        // Randomly determine booking status and remaining slots
        const isBookingAllowed = date >= today;
        const remainingSlots = isBookingAllowed
          ? Math.floor(Math.random() * 10)
          : 0;
        const isFullyBooked = remainingSlots === 0;

        monthData.push({
          date: date,
          dayOfWeek: dayOfWeek,
          isPastDate: isPastDate,
          isBookingAllowed: isBookingAllowed,
          isFullyBooked: isFullyBooked,
          remainingSlots: remainingSlots,
        });
      }

      yearData.push({ month: month, days: monthData });
    });

    return yearData;
  };

  const yearData = generateCalendarData();

  // Update button state based on the current month and year
  useEffect(() => {
    const isCurrentMonth =
      currentYear === today.getFullYear() &&
      currentMonthIndex === today.getMonth();
    setDisablePrevious(isCurrentMonth);
  }, [currentMonthIndex, currentYear]);

  const renderDay = (dayData, index) => {
    const {
      date,
      isPastDate,
      isBookingAllowed,
      isFullyBooked,
      remainingSlots,
    } = dayData;
    const day = date.getDate();

    return (
      <motion.div
        key={index}
        className={`p-2 border rounded-lg ${
          isPastDate
            ? "bg-gray-200"
            : isFullyBooked
            ? "bg-red-100"
            : "bg-yellow-100"
        } flex flex-col items-center justify-between`}
        whileHover={{ scale: isPastDate ? 1 : 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div
          className={`font-bold text-gray-700 ${
            isPastDate ? "text-gray-500" : ""
          } text-xs md:text-sm lg:text-base`}
        >
          {day}
        </div>
        {!isPastDate && (
          <div className="flex flex-col items-center w-full">
            {isFullyBooked ? (
              <div className="text-red-600 text-xs md:text-sm lg:text-base text-center">
                All Booked
              </div>
            ) : (
              <div className="flex flex-col items-center w-full">
                {/* Display only slot count on mobile and hide detailed text */}
                <div className="text-green-600 text-xs md:text-sm lg:text-base text-center">
                  {remainingSlots > 0 && (
                    <span className="block md:hidden">
                      Slots: {remainingSlots}
                    </span>
                  )}
                  {remainingSlots > 0 && (
                    <span className="hidden md:block">
                      Remaining Slots: {remainingSlots}
                    </span>
                  )}
                </div>
                <Link href={`/multistepbook?date=${date.toDateString()}`}>
                  <div className="mt-1 px-2 py-1 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 text-xs md:text-sm lg:text-base text-center w-full">
                    Book
                  </div>
                </Link>
              </div>
            )}
          </div>
        )}
      </motion.div>
    );
  };

  const handleNextMonth = () => {
    if (currentMonthIndex === 11) {
      setCurrentMonthIndex(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonthIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousMonth = () => {
    if (currentMonthIndex === 0) {
      setCurrentMonthIndex(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonthIndex((prevIndex) => prevIndex - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextMonth,
    onSwipedRight: handlePreviousMonth,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="max-w-6xl mx-auto my-8 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <button
          onClick={handlePreviousMonth}
          disabled={disablePrevious}
          className={`px-4 py-2 rounded-lg text-sm md:text-base mb-2 sm:mb-0 ${
            disablePrevious
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Previous
        </button>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-2 sm:mb-0">
          {months[currentMonthIndex]} {currentYear}
        </h2>
        <button
          onClick={handleNextMonth}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-sm md:text-base"
        >
          Next
        </button>
      </div>
      <motion.div
        className="grid grid-cols-7 gap-1 text-center text-xs sm:text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        {...swipeHandlers}
      >
        {daysOfWeek.map((day, index) => (
          <div key={index} className="font-bold">
            {day}
          </div>
        ))}
        {yearData[currentMonthIndex].days.map((dayData, index) =>
          renderDay(dayData, index)
        )}
      </motion.div>
    </div>
  );
};

export default Calendar;
