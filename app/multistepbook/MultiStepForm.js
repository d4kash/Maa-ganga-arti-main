"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import { services } from "../../utils/constants";
import { useTranslation } from "react-i18next";
// date=Wed%20Sep%2018%202024&service=0&pin=825301&nop=4
const formVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: "#4f46e5", // Darker shade on hover
    boxShadow: "0px 0px 10px rgba(79, 70, 229, 0.6)", // Add a subtle shadow on hover
  },
  tap: {
    scale: 0.95,
    backgroundColor: "#4338ca", // Even darker shade when tapping
  },
};

const MultiStepForm = () => {
  const [formattedDate, setFormattedDate] = useState("");
  const [serviceTitle, setServiceTitle] = useState("");
  const [defaultPincode, setDefaultPincode] = useState("");
  const [defaultNumberOfPersons, setDefaultNumberOfPersons] = useState("");
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // Function to prefill form values
  } = useForm();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const dateParam = queryParams.get("date");
    const serviceParam = queryParams.get("service");
    const pincodeParam = queryParams.get("pin");
    const nopParam = queryParams.get("nop");

    // Handle date parameter
    if (dateParam) {
      const date = new Date(dateParam);
      if (!isNaN(date.getTime())) {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        const formatted = `${day}/${month}/${year}`;
        setFormattedDate(formatted);
      } else {
        console.error("Invalid date format");
      }
    }

    // Handle service parameter
    if (serviceParam) {
      const serviceIndex = parseInt(serviceParam, 10);
      if (!isNaN(serviceIndex) && services[serviceIndex]) {
        setServiceTitle(services[serviceIndex].title);
      } else {
        console.error("Invalid service index");
      }
    }

    // Handle pincode parameter
    if (pincodeParam) {
      setDefaultPincode(pincodeParam);
      setValue("pincode", pincodeParam); // Prefill pincode field
    }

    // Handle number of persons parameter
    if (nopParam) {
      setDefaultNumberOfPersons(nopParam);
      setValue("numberOfPersons", nopParam); // Prefill number of persons field
    }
  }, [setValue]);

  const onSubmit = async (data) => {
    const payload = {
      event_name: "विवाह गंगा आरती",
      name: data.name,
      phone_number: data.phone,
      alter_number: data.alterPhone || "",
      email: data.email,
      address: data.address,
      pincode: data.pincode,
      description: data.description || "",
      event_date: formattedDate,
      members: data.numberOfPersons,
      land_mark: data.landmark || "",
      state: data.state,
      district: data.district,
    };

    try {
      const response = await axios.post(
        "https://mmngrm2h3i.execute-api.ap-south-1.amazonaws.com/gangaArti/bookingEvent",
        JSON.stringify(payload)
      );

      console.log("Form submitted successfully:", response.data);
      alert("Booking confirmed!");
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
        alert(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        console.error("Error request:", error.request);
        alert("No response received. Please try again.");
      } else {
        console.error("Error message:", error.message);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg mt-10 md:mt-20">
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        variants={formVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="space-y-6"
      >
        <div className="text-lg font-semibold text-gray-700">
          Event Date: {formattedDate}
        </div>

        <div className="text-lg font-semibold text-gray-700">
          Service: {t(serviceTitle) || "N/A"}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              {...register("name", { required: "Name is required." })}
              className={`border p-3 w-full rounded-md ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name.message}</span>
            )}
          </div>

          <div>
            <input
              type="text"
              {...register("phone", {
                required: "Phone number is required.",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits.",
                },
              })}
              className={`border p-3 w-full rounded-md ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone.message}</span>
            )}
          </div>

          <div>
            <input
              type="text"
              {...register("alterPhone", {
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Alternate phone number must be 10 digits.",
                },
              })}
              className="border p-3 w-full rounded-md border-gray-300"
              placeholder="Enter alternate phone number (optional)"
            />
          </div>

          <div>
            <input
              type="email"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "Invalid email address.",
                },
              })}
              className={`border p-3 w-full rounded-md ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>

          <div>
            <input
              type="text"
              {...register("address", {
                required: "Address is required.",
                minLength: {
                  value: 10,
                  message: "Address must be at least 10 characters.",
                },
              })}
              className={`border p-3 w-full rounded-md ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your address"
            />
            {errors.address && (
              <span className="text-red-500 text-sm">{errors.address.message}</span>
            )}
          </div>

          <div>
            <input
              type="text"
              {...register("pincode", {
                required: "Pincode is required.",
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: "Pincode must be 6 digits.",
                },
              })}
              className={`border p-3 w-full rounded-md ${
                errors.pincode ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your pincode"
              defaultValue={defaultPincode} // Prefill pincode field
            />
            {errors.pincode && (
              <span className="text-red-500 text-sm">{errors.pincode.message}</span>
            )}
          </div>

          <div>
            <input
              type="text"
              {...register("landmark")}
              className="border p-3 w-full rounded-md border-gray-300"
              placeholder="Enter landmark (optional)"
            />
          </div>

          <div>
            <input
              type="text"
              {...register("state", { required: "State is required." })}
              className={`border p-3 w-full rounded-md ${
                errors.state ? "border-red-500" : "border-gray-300"
              }`}
              />
            {errors.state && (
              <span className="text-red-500 text-sm">{errors.state.message}</span>
            )}
          </div>

          <div>
            <input
              type="text"
              {...register("district", { required: "District is required." })}
              className={`border p-3 w-full rounded-md ${
                errors.district ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your district"
            />
            {errors.district && (
              <span className="text-red-500 text-sm">
                {errors.district.message}
              </span>
            )}
          </div>

          <div>
            <input
              type="number"
              {...register("numberOfPersons", {
                required: "Number of members is required.",
                min: {
                  value: 1,
                  message: "Number of members must be at least 1.",
                },
              })}
              className={`border p-3 w-full rounded-md ${
                errors.numberOfPersons ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter number of members"
              defaultValue={defaultNumberOfPersons} // Prefill number of persons field
            />
            {errors.numberOfPersons && (
              <span className="text-red-500 text-sm">
                {errors.numberOfPersons.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <motion.button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Submit
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
};

export default MultiStepForm;

