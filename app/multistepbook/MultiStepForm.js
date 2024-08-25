"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";

const formVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.5)" },
  tap: { scale: 0.95 },
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-xl rounded-lg mt-10 md:mt-20 min-h-[500px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          variants={formVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="space-y-6 relative"
        >
          {step === 1 && <Step1 nextStep={nextStep} />}
          {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
          {step === 3 && <Step3 prevStep={prevStep} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Step1 = ({ nextStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isFocused, setIsFocused] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const date = urlParams.get("date");
    setSelectedDate(date);
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between min-h-[400px]"
    >
      {/* Display selected date with title and animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-4"
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Selected Date for Booking
        </h3>
        {selectedDate && (
          <div className="text-lg font-medium text-gray-700">
            {selectedDate}
          </div>
        )}
      </motion.div>

      {/* Form content */}
      <div className="flex-grow space-y-6">
        <h2 className="text-2xl font-bold text-center">
          Number of Persons Required
        </h2>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: isFocused ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <select
            {...register("numberOfPersons", {
              required: "This field is required.",
            })}
            className={`border p-3 w-full rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 ${
              errors.numberOfPersons
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            } ${isFocused ? "shadow-lg" : ""}`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            defaultValue=""
          >
            <option value="" disabled>
              Select number of persons
            </option>
            {[2, 4, 6, 8, 10, 12].map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </motion.div>
        {errors.numberOfPersons && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-red-500 text-sm"
          >
            {errors.numberOfPersons.message}
          </motion.span>
        )}
      </div>

      {/* Next button positioned at the bottom */}
      <motion.button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg transition duration-200 mt-6"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Next
      </motion.button>
    </form>
  );
};

const Step2 = ({ nextStep, prevStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between min-h-[400px]"
    >
      {/* Back button positioned at the top left */}
      <motion.button
        type="button"
        onClick={prevStep}
        className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 transition duration-200"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        ← Back
      </motion.button>

      {/* Form content */}
      <div className="flex-grow space-y-6 mt-6 pt-4">
        <h2 className="text-2xl font-bold text-center">Address Information</h2>
        <input
          type="text"
          {...register("address", {
            required: "Address is required.",
            minLength: {
              value: 10,
              message: "Address must be at least 10 characters.",
            },
          })}
          className={`border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.address ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your address"
        />
        {errors.address && (
          <span className="text-red-500 text-sm">{errors.address.message}</span>
        )}
        <input
          type="text"
          {...register("district", {
            required: "District is required.",
          })}
          className={`border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.district ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your district"
        />
        {errors.district && (
          <span className="text-red-500 text-sm">
            {errors.district.message}
          </span>
        )}
        <input
          type="text"
          {...register("pincode", {
            required: "Pincode is required.",
            minLength: {
              value: 6,
              message: "Pincode must be 6 digits.",
            },
            maxLength: {
              value: 6,
              message: "Pincode must be 6 digits.",
            },
          })}
          className={`border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.pincode ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your pincode"
        />
        {errors.pincode && (
          <span className="text-red-500 text-sm">{errors.pincode.message}</span>
        )}
      </div>

      {/* Next button positioned at the bottom */}
      <motion.button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg transition duration-200 mt-6"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Next
      </motion.button>
    </form>
  );
};

const Step3 = ({ prevStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Payment data:", data);
    alert("Payment Successful!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between min-h-[400px]"
    >
      {/* Back button positioned at the top left */}
      <motion.button
        type="button"
        onClick={prevStep}
        className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 transition duration-200"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        ← Back
      </motion.button>

      {/* Form content */}
      <div className="flex-grow space-y-6 mt-6 pt-4">
        <h2 className="text-2xl font-bold text-center">Make Payment</h2>
        <input
          type="text"
          {...register("cardNumber", {
            required: "Card number is required.",
            minLength: { value: 16, message: "Card number must be 16 digits." },
            maxLength: { value: 16, message: "Card number must be 16 digits." },
          })}
          className={`border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.cardNumber ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Card Number"
        />
        {errors.cardNumber && (
          <span className="text-red-500 text-sm">
            {errors.cardNumber.message}
          </span>
        )}
        <input
          type="text"
          {...register("expiry", { required: "Expiry date is required." })}
          className={`border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.expiry ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="MM/YY"
        />
        {errors.expiry && (
          <span className="text-red-500 text-sm">{errors.expiry.message}</span>
        )}
        <input
          type="text"
          {...register("cvv", {
            required: "CVV is required.",
            minLength: { value: 3, message: "CVV must be 3 digits." },
            maxLength: { value: 3, message: "CVV must be 3 digits." },
          })}
          className={`border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.cvv ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="CVV"
        />
        {errors.cvv && (
          <span className="text-red-500 text-sm">{errors.cvv.message}</span>
        )}
      </div>

      {/* Submit button positioned at the bottom */}
      <motion.button
        type="submit"
        className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-2 rounded-lg shadow-lg transition duration-200 mt-6"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        Submit
      </motion.button>
    </form>
  );
};

export default MultiStepForm;
