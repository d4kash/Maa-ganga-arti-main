"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import { services } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import {formatAmount, formatDiscountPercent} from "../../utils/constants";
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
  const [step, setStep] = useState(1); 
  const [formattedDate, setFormattedDate] = useState("");
  const [serviceTitle, setServiceTitle] = useState("");
  const [serviceDesc, setServiceDesc] = useState("");
  const [defaultPincode, setDefaultPincode] = useState("");
  const [defaultNumberOfPersons, setDefaultNumberOfPersons] = useState("");
  const [orderDetails, setOrderDetails] = useState(null); // Store the order details
  const [paymentSummary, setPaymentSummary] = useState(null); // Store the order details
  const [userData, setUserData] = useState(null); // Store the order details
  const { t } = useTranslation();

  const calculateProgress = () => {
    return (step / 2) * 100;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // Function to prefill form values
  } = useForm();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    };
  }, []);  

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
        setServiceDesc(services[serviceIndex].description);
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
      service: "wedding",
      "full_payment":false,
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

      // console.log("Form submitted successfully:", response.data);
try{
      if (response.data && response.data["body-json"].order_id) {
        setOrderDetails(response.data["body-json"].order_id);
        setPaymentSummary(response.data["body-json"]["body"].Order_Summary);
        setUserData(data);
        setStep(2); // Move to step 2 (payment)
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
      // alert("Booking confirmed!");
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

  const handlePayment = () => {
    const options = {
      key: "rzp_live_9Lu8TsqBpSuohl", // Replace with your Razorpay key
      amount: orderDetails.amount, // Amount in paisa (e.g., 900000 for ₹9000)
      currency: orderDetails.currency,
      name: "Shree narayan Ganga Arti",
      description: "Event Booking",
      order_id: orderDetails.id, // Razorpay Order ID from server response
      handler: function (response) {
        alert(`Payment successful: ${response.razorpay_payment_id}`);
        // Handle post-payment success actions here
      },
      prefill: {
        name: userData.name,
        email: userData.email,
        contact: userData.phone,
      },
      theme: {
        color: "#4f46e5",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };


  return (
<div className="min-h-screen flex flex-col bg-gray-50 w-full">
    {/* Progress Bar at the Top */}
    <div className="w-full py-4 px-6">
      <div className="bg-gray-200 rounded-full h-2.5 w-full">
        <motion.div
          className="bg-indigo-600 h-2.5 rounded-full"
          style={{ width: `${calculateProgress()}%` }} // Dynamic width
          initial={{ width: 0 }}
          animate={{ width: `${calculateProgress()}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>

    {/* Service Details */}
    <details className="bg-white border rounded-lg shadow p-4 mb-6 max-w-3xl mx-auto w-full">
      <summary className="text-lg font-semibold text-indigo-600">More about this service</summary>
      <div className="mt-2 text-gray-600">
        <p>{t(serviceDesc)}</p>
      </div>
    </details>

    <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-6 px-4 sm:px-6 max-w-7xl mx-auto w-full">
      {/* Discount Banner on the Left */}
      <div className="lg:col-span-1 bg-yellow-100 p-6 rounded-lg w-full">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Special Offer!</h2>
        <p className="text-gray-600">
          Book now and get 10% off on Ganga Aarti Services. During <strong>Durga Puja, Chath Puja and more</strong>
        </p>
      </div>
    <div className="lg:col-span-3 bg-white shadow-xl rounded-lg p-4 sm:p-6 w-full">
      {step === 1 && (<motion.form
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
      validate: (value) => {
        if (defaultNumberOfPersons % 2 === 0 && value % 2 !== 0) {
          return "Please enter 2, 4, 6, 8, 12 number of pandits.";
        }
        if (defaultNumberOfPersons % 2 !== 0 && value % 2 === 0) {
          return "Please enter 3, 5, 7, 11 number of pandits.";
        }
        return true;
      },
    })}
    className={`border p-3 w-full rounded-md ${
      errors.numberOfPersons ? "border-red-500" : "border-gray-300"
    }`}
    placeholder="Enter number of members"
    defaultValue={defaultNumberOfPersons} // Prefill number of persons field
  />
  <div className="text-gray-500 text-sm mt-1">
    {defaultNumberOfPersons} Pandits
  </div>
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
      </motion.form>)}
      {step === 2 && paymentSummary && (
       <motion.div
       variants={formVariants}
       initial="initial"
       animate="animate"
       exit="exit"
       className="space-y-6 bg-white p-6 rounded-lg shadow-lg mt-4"
     >
       {/* Order Summary Header */}
       <div className="text-xl font-bold text-gray-800 border-b pb-3">
         Order Summary
       </div>
     
       {/* Summary Details */}
       <div className="space-y-4 text-lg text-gray-700">
         {/* Total Amount */}
         <div className="flex justify-between">
           <span className="font-semibold">Total Amount:</span>
           <span>{formatAmount(paymentSummary["Total_price"])}</span>
         </div>
     
         {/* Discount */}
         <div className="flex justify-between">
           <span className="font-semibold">Discount:</span>
           <span>{formatDiscountPercent(paymentSummary["total_discount"] / 100)}%</span>
         </div>
     
         {/* Payable Amount */}
         <div className="flex justify-between border-t pt-3">
           <span className="font-semibold">Payable Amount:</span>
           <span>{formatAmount(paymentSummary["Total_payment"])}</span>
         </div>
     
         {/* Advance Payment */}
         <div className="flex justify-between">
           <span className="font-semibold">Advance Payment:</span>
           <span>{formatAmount(paymentSummary["initail_payment"])}</span>
         </div>
     
         {/* Remaining Amount */}
         <div className="flex justify-between">
           <span className="font-semibold">Remaining Amount:</span>
           <span>{formatAmount(paymentSummary["pending_payment"])}</span>
         </div>
       </div>
      {/* Cancel Button */}
    {/* <motion.button
      onClick={handleCancel}
      className="w-full bg-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
      whileHover={{ scale: 1.05, backgroundColor: "#e53e3e" }} // Darker red on hover
      whileTap={{ scale: 0.95, backgroundColor: "#c53030" }}   // Even darker red when tapping
    >
      Cancel
    </motion.button> */}
       {/* Pay Now Button */}
       <motion.button
         onClick={handlePayment}
         className="w-full bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 mt-4"
         variants={buttonVariants}
         whileHover="hover"
         whileTap="tap"
       >
         Pay Now
       </motion.button>
     </motion.div>     
      )}
    </div>
    {/* Client Testimonials */}
    <div className="lg:col-span-1 bg-blue-50 p-6 rounded-lg w-full">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">What Our Clients Say</h3>
        <blockquote className="border-l-4 border-indigo-600 pl-4 text-gray-700 mb-4">
        &quot;The Ganga Aarti service was amazing!&quot; — <strong>Rahul K.</strong>
        </blockquote>
        <blockquote className="border-l-4 border-indigo-600 pl-4 text-gray-700">
        &quot;Priests were punctual and rituals were perfect.&quot; — <strong>Pooja S.</strong>
        </blockquote>
      </div>
    </div>

    {/* Helpline at the Bottom */}
    <div className="bg-gray-800 text-white text-center py-4 w-full">
      <p className="text-sm">Need help? Call our helpline: <strong>7870406788, 8340116521</strong></p>
    </div>
    </div>
  );
};

export default MultiStepForm;

