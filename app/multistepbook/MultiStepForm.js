"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { services } from "../../utils/constants";
import { useTranslation } from "react-i18next";
import {formatAmount, formatDiscountPercent} from "../../utils/constants";
import { useRouter } from "next/navigation"
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
  const [serviceParamForSubmit, setServiceParam] = useState(null); // Store the order details
  const { t } = useTranslation();
  const router = useRouter();

  const calculateProgress = () => {
    return (step / 2) * 100;
  };

  const {
    register,
    handleSubmit,
    control,
    watch,
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
  
  const paymentOption = watch("paymentOption");


  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const dateParam = queryParams.get("date");
    const serviceParam = queryParams.get("service");
    setServiceParam(queryParams.get("service"));
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
    
    console.log("service index: ", typeof serviceParam)
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

  const services = [
    {
      id: 0,
      image: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/wedding_service2.png",
      title: "services.marriageGangaAarti.title",
      description: "services.marriageGangaAarti.description",
      englishTitle: "Marriage Ganga Aarti", // Add this field
    },
    {
      id: 1,
      image: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/wedding_3.jpeg",
      title: "services.engagementGangaAarti.title",
      description: "services.engagementGangaAarti.description",
      englishTitle: "Engagement Ganga Aarti", // Add this field
    },
    {
      id: 2,
      image: "assets/naag_arti.png",
      title: "services.anniversaryGangaAarti.title",
      description: "services.anniversaryGangaAarti.description",
      englishTitle: "Anniversary Ganga Aarti", // Add this field
    },
    {
      id: 3,
      image: "https://ganga-arti.s3.ap-south-1.amazonaws.com/event/spritual_ganga_arti.png",
      title: "services.spiritualCeremonyGangaAarti.title",
      description: "services.spiritualCeremonyGangaAarti.description",
      englishTitle: "Spiritual Ceremony Ganga Aarti", // Add this field
    },
    {
      id: 4,
      image: "assets/jhar_arti.png",
      title: "services.namkaranGangaAarti.title",
      description: "services.namkaranGangaAarti.description",
      englishTitle: "Namkaran Ganga Aarti", // Add this field
    },
  ];

  const onSubmit = async (data) => {
    console.log("serviceParam: ",serviceTitle.englishTitle);
    const payload = {
      // event_name: serviceParamt(serviceTitle).toString() || "Marriage ganga aarti",
      service: data.eventType.toLowerCase() || "wedding",
      event_name: serviceParamForSubmit != "" ? services[parseInt(serviceParamForSubmit, 10)].englishTitle : serviceTitle,
      // event_name: "विवाह गंगा आरती",
      // service: "wedding",
      "full_payment": false,
      "half_payment": data.paymentOption === "custom" ? false : true,
      "amount": data.amount,
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
      if (response.data && response.data["body-json"]['statusCode'] === 200 && response.data["body-json"].order_id) {
        setOrderDetails(response.data["body-json"].order_id);
        setPaymentSummary(response.data["body-json"]["body"].Order_Summary);
        setUserData(data);
        setStep(2); // Move to step 2 (payment)
      }else{
        alert(response.data["body-json"]['body']);
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

  const handlePayment = async () => {
    const options = {
      key: "rzp_live_9Lu8TsqBpSuohl", // Replace with your Razorpay key
      amount: orderDetails.amount, // Amount in paisa (e.g., 900000 for ₹9000)
      currency: orderDetails.currency,
      name: "Shree narayan Ganga Arti event",
      description: "Event Booking",
      order_id: orderDetails.id, // Razorpay Order ID from server response
      handler: async function (response) {
        // alert(`Payment successful: ${response.razorpay_payment_id}`);
        await verifyPayment(response);
        router.push(`sucesspage?payment_id=${response.razorpay_payment_id}`)
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

  const verifyPayment = async (data) => {
    const url = 'https://mmngrm2h3i.execute-api.ap-south-1.amazonaws.com/gangaArti/payment_verification';
  
    try {
      const response = await axios.put(url, {
        booking_id: data.booking_id,
        razorpay_order_id: data.razorpay_order_id,
        razorpay_payment_id: data.razorpay_payment_id,
        razorpay_signature: data.razorpay_signature,
      });
  
      console.log('Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      throw error;
    }
  };


  const handleServiceChange = (e) => {
    const selectedService = e.target.value;
    setServiceTitle(selectedService);
    // setServiceDesc(services[e.target.id].description);
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
    {serviceDesc ? <details className="bg-white border rounded-lg shadow p-4 mb-6 max-w-3xl mx-auto w-full">
      <summary className="text-lg font-semibold text-indigo-600">More about this service</summary>
      <div className="mt-2 text-gray-600">
        <p>{t(serviceDesc)}</p>
      </div>
    </details> : <></>}

    <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-6 px-4 sm:px-6 max-w-7xl mx-auto w-full">
      {/* Discount Banner on the Left */}
      <div className="lg:col-span-1 bg-yellow-100 p-6 rounded-lg w-full">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Special Offer!</h2>
        <p className="text-gray-600">
          Book now and get 10% off on Ganga Aarti Services. During <strong>Durga Puja, Chath Puja, Deewali and more</strong>
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

        {serviceTitle ? (
        <div className="text-lg font-semibold text-gray-700">
          Service: {t(serviceTitle) || "N/A"}
        </div>
      ) : (
        <div className="bg-white shadow-xl p-6 rounded-lg relative">
  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
    Select Service
    <span className="ml-2 text-gray-500 cursor-pointer relative group">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9 7a1 1 0 112 0 1 1 0 01-2 0zm.25 2.75a.75.75 0 011.5 0V12a.75.75 0 01-1.5 0v-2.25zm1 4.25a1 1 0 100-2h-1a1 1 0 000 2h1z" clipRule="evenodd" />
      </svg>
      <div className="absolute -top-8 left-0 bg-gray-700 text-white text-xs rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      Select the service like anniversary or engagement etc. for which you&apos;re booking our service.
      </div>
    </span>
  </label>
  <select
    id="service"
    name="service"
    required
    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 bg-gray-50 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg shadow-lg"
    onChange={handleServiceChange}
    // onChange={(e) => setServiceTitle(e.target.value)}
  >
    <option value="" disabled selected>
      Choose a service
    </option>
    {services.map((service) => (
      <option key={service.id} value={service.englishTitle}>
        {t(service.title)}
      </option>
    ))}
  </select>
  {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
</div>

      )}
       <fieldset className="mb-4">
       <legend className="flex items-center text-sm font-medium text-gray-700 mb-2">
  Select the event type
  <span className="ml-2 text-gray-500 cursor-pointer relative group">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9 7a1 1 0 112 0 1 1 0 01-2 0zm.25 2.75a.75.75 0 011.5 0V12a.75.75 0 01-1.5 0v-2.25zm1 4.25a1 1 0 100-2h-1a1 1 0 000 2h1z" clipRule="evenodd" />
    </svg>
    <div className="absolute -top-8 left-0 bg-gray-700 text-white text-xs rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
     Let us know for which ocassion(wedding or puja) you&apos;re booking our service.
    </div>
  </span>
</legend>

        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex items-center mb-2 sm:mb-0">
            <input
              id="wedding"
              type="radio"
              value="Wedding"
              {...register("eventType", { required: "Please select an event type" })}
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <label htmlFor="wedding" className="ml-2 text-sm font-medium text-gray-700">
              Wedding Event
            </label>
          </div>

          <div className="flex items-center mb-2 sm:mb-0">
            <input
              id="puja"
              type="radio"
              value="Puja"
              {...register("eventType", { required: "Please select an event type" })}
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <label htmlFor="puja" className="ml-2 text-sm font-medium text-gray-700">
              Puja Event
            </label>
          </div>
        </div>

        {errors.eventType && (
          <p className="text-red-500 text-sm mt-1">{errors.eventType.message}</p>
        )}
      </fieldset>
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
              onInput={(e) => {
                const value = e.target.value.replace(/\D/g, ""); // Replace any non-numeric characters
                if (value.length <= 10) {
                  e.target.value = value; // Allow only 10 digits
                }
              }}
              maxLength={10}
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
              onInput={(e) => {
                const value = e.target.value.replace(/\D/g, ""); // Replace any non-numeric characters
                if (value.length <= 10) {
                  e.target.value = value; // Allow only 10 digits
                }
              }}
              maxLength={10}
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
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  // value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
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
              onInput={(e) => {
                const value = e.target.value.replace(/[^A-Za-z0-9\s]/g, ""); // Remove non-alphabet characters
                e.target.value = value;
              }}
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
              {...register("state", { required: "State is required.",
                pattern: {
                  value: /^[A-Za-z\s]+$/, // Allow only letters and spaces
                  message: "State can only contain letters.",
                },
              })}
              onInput={(e) => {
                const value = e.target.value.replace(/[^A-Za-z\s]/g, ""); // Remove non-alphabet characters
                e.target.value = value;
              }}
              className={`border p-3 w-full rounded-md ${
                errors.state ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter state"
              />
            {errors.state && (
              <span className="text-red-500 text-sm">{errors.state.message}</span>
            )}
          </div>

          <div>
            <input
              type="text"
              {...register("district", { required: "District is required.",pattern: {
                value: /^[A-Za-z\s]+$/, // Allow only letters and spaces
                message: "State can only contain letters.",
              },
            })}
            onInput={(e) => {
              const value = e.target.value.replace(/[^A-Za-z\s]/g, ""); // Remove non-alphabet characters
              e.target.value = value;
            }}
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

{/* Radio Buttons */}
 {/* Responsive Container for Radio Buttons */}
 <div className={`grid gap-4 mb-4 ${paymentOption === "custom" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
        {/* Pay 40% as Advance Radio Button */}
        <label className="flex items-center gap-2 p-2 border border-gray-300 rounded-md">
          <input
            type="radio"
            value="advance"
            {...register("paymentOption")}
            className="text-blue-600 focus:ring-blue-500"
          />
          <span>Pay 40% as advance</span>
        </label>

        {/* Select and Pay as per Choice Radio Button */}
        <label className="flex items-center gap-2 p-2 border border-gray-300 rounded-md">
          <input
            type="radio"
            value="custom"
            {...register("paymentOption")}
            className="text-blue-600 focus:ring-blue-500"
          />
          <span>Select and pay as per choice</span>
        </label>
      </div>

      {/* Conditional Dropdown for Custom Payment Option */}
      {paymentOption === "custom" && (
        <Controller
          name="amount"
          control={control}
          render={({ field }) => (
            <div className="mb-4">
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                Select Amount:
              </label>
              <select
                {...field}
                id="amount"
                className="w-full p-2 border border-gray-300 rounded-md text-gray-900"
              >
                <option value={3500}>3500</option>
                <option value={4500}>4500</option>
                <option value={5000}>5000</option>
                <option value={6000}>6000</option>
                <option value={8000}>8000</option>
                <option value={10000}>10000</option>
              </select>
            </div>
          )}
        />
      )}

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

const styles = {
  // form: {
  //   maxWidth: "400px",
  //   margin: "auto",
  //   padding: "20px",
  //   backgroundColor: "#f9f9f9",
  //   borderRadius: "8px",
  //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  //   textAlign: "center",
  // },
  radioGroup: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "15px",
  },
  radioGroupMobile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  radioLabel: {
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  radioInput: {
    accentColor: "#2196f3",
  },
  dropdownContainer: {
    margin: "15px 0",
    textAlign: "left",
  },
  dropdownLabel: {
    display: "block",
    fontSize: "0.9rem",
    marginBottom: "5px",
  },
  dropdown: {
    width: "100%",
    padding: "8px",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};


export default MultiStepForm;

