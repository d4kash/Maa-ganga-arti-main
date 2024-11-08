"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PaymentSuccess = () => {
  const router = useRouter();
  const [paymentId, setPaymentId] = useState("");

  useEffect(() => {
    // Assuming payment ID is passed via query parameters or state (replace as needed)
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("payment_id");
    setPaymentId(id || "N/A");
  }, []);

  return (
    <div className="payment-success-container" style={styles.container}>
      {/* Animated Success Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={styles.successIcon}
      >
        ✅
      </motion.div>

      <h1 style={styles.title}>Payment Successful!</h1>
      <p style={styles.message}>
        Thank you for your payment. Your order is confirmed.
      </p>
      <p style={styles.note}>
        We&apos;ll notify you soon on your mail about your order status, please check regularly. Please take a screenshot
        of this screen for your records.
      </p>
      <div style={styles.paymentId}>
        <strong>Razorpay Payment ID:</strong> {paymentId}
      </div>
      <button style={styles.button} onClick={() => router.push("/")}>
        Back to Home
      </button>
    </div>
  );
};

// Inline styles for simplicity, you can also use a CSS file or CSS-in-JS
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f8ff",
    padding: "20px",
    textAlign: "center",
  },
  successIcon: {
    fontSize: "3rem",
    color: "#4caf50",
    marginBottom: "1rem",
  },
  title: {
    fontSize: "2rem",
    color: "#4caf50",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },
  note: {
    fontSize: "1rem",
    color: "#ff5722",
    marginBottom: "1rem",
  },
  paymentId: {
    fontSize: "1.1rem",
    color: "#333",
    margin: "1rem 0",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#2196f3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default PaymentSuccess;
