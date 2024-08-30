"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";

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
  const [formData, setFormData] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [formattedDate, setFormattedDate] = useState("");
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false); // New state

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => setIsRazorpayLoaded(true);
    script.onerror = () => console.error("Failed to load Razorpay script");
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    // Extract the date from the query parameters
    const queryParams = new URLSearchParams(window.location.search);
    const dateParam = queryParams.get("date");

    if (dateParam) {
      // Parse the date string
      const date = new Date(dateParam);
      
      // Check if the date is valid
      if (!isNaN(date.getTime())) {
        // Convert the date to "DD/MM/YYYY" format
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const formatted = `${day}/${month}/${year}`;

        setFormattedDate(formatted);
        setSelectedDate(date.toISOString().split("T")[0]); // Format as "YYYY-MM-DD" for backend
      } else {
        console.error("Invalid date format");
      }
    }
  }, []);

  const onSubmit = async (data) => {
    const payload = {
      event_name: "विवाह गंगा आरती",
      name: data.name,
      phone_number: data.phone,
      alter_number: data.alterPhone || "", // Optional field
      email: data.email,
      address: data.address,
      pincode: data.pincode,
      description: data.description || "", // Optional field
      event_date: formattedDate, // Send the original date format to the backend
      members: data.numberOfPersons,
      land_mark: data.landmark || "", // Optional field
      state: data.state,
      district: data.district,
    };

    try {
      const response = await axios.post(
        "https://mmngrm2h3i.execute-api.ap-south-1.amazonaws.com/gangaArti/bookingEvent",
        JSON.stringify(payload)
      );

      console.log("Form submitted successfully:", response.data);
      await initiateRazorpay(response.data["body-json"]["order_id"]["id"], response.data["body-json"]["order_id"]["amount"], response.data["body-json"]["booking_id"])
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

  const initiateRazorpay = (orderId, amount, bookingId) => {
    const options = {
      key: "rzp_live_9Lu8TsqBpSuohl", // Replace with your Razorpay key
      amount: amount, // Amount in the smallest currency unit (e.g., paise for INR)
      currency: "INR",
      name: "Shree Narayan Ganga Aarti",
      description: "Booking Payment",
      order_id: orderId,
      handler: async function (response) {
        // Log the Razorpay response
        console.log("Razorpay Response:", response);
        
        // Extracting data from Razorpay response
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;
  
        // Create the payload for verification
        const verificationPayload = {
          booking_id: bookingId, // Replace with actual booking ID
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature,
        };
  
        try {
          // Verify payment with the backend API
          const verificationResponse = await axios.put(
            "https://mmngrm2h3i.execute-api.ap-south-1.amazonaws.com/gangaArti/payment_verification",
            verificationPayload
          );
  
          if (verificationResponse.status === 200) {
            alert("Payment verified successfully");
            // Handle successful payment verification logic here
            console.log("Payment verified:", verificationResponse.data);
          } else {
            alert("Payment verification failed");
            console.error("Verification failed:", verificationResponse.data);
          }
        } catch (error) {
          alert("Error verifying payment. Please try again.");
          console.error("Verification error:", error.response ? error.response.data : error.message);
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      notes: {
        address: formData.address,
      },
      theme: {
        color: "#F37254",
      },
    };
  
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-xl rounded-lg mt-10 md:mt-20 min-h-[500px]">
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        variants={formVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="space-y-6 relative"
      >
        {/* Display formatted date */}
        <div className="text-lg font-semibold text-gray-700">
          Event Date: {formattedDate}
        </div>

        {/* Name */}
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

        {/* Phone Number */}
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

        {/* Alternate Phone Number */}
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

        {/* Email */}
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

        {/* Address */}
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

        {/* Pincode */}
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
        />
        {errors.pincode && (
          <span className="text-red-500 text-sm">{errors.pincode.message}</span>
        )}

        {/* Description */}
        <textarea
          {...register("description")}
          className="border p-3 w-full rounded-md border-gray-300"
          placeholder="Enter description (optional)"
        />

        {/* Landmark */}
        <input
          type="text"
          {...register("landmark")}
          className="border p-3 w-full rounded-md border-gray-300"
          placeholder="Enter landmark (optional)"
        />

        {/* State */}
        <input
          type="text"
          {...register("state", { required: "State is required." })}
          className={`border p-3 w-full rounded-md ${
            errors.state ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter your state"
        />
        {errors.state && (
          <span className="text-red-500 text-sm">{errors.state.message}</span>
        )}

        {/* District */}
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

        {/* Number of Members */}
        <input
          type="number"
          {...register("numberOfPersons", {
            required: "Number of members is required.",
            min: 1,
          })}
          className={`border p-3 w-full rounded-md ${
            errors.numberOfPersons ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Enter number of members"
        />
        {errors.numberOfPersons && (
          <span className="text-red-500 text-sm">
            {errors.numberOfPersons.message}
          </span>
        )}

        {/* Submit button */}
        <motion.button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg transition duration-200 mt-6"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
};

export default MultiStepForm;
