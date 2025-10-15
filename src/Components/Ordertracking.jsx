import React, { useState } from "react";
import "./Ordertracking.css";

export default function OrderTracking() {
  const [orderNumber, setOrderNumber] = useState("");
  const [status, setStatus] = useState("");

  const handleTrack = () => {
    if (!orderNumber) {
      setStatus("Please enter a valid order number.");
      return;
    }

    // Example logic for tracking (replace with API call)
    if (orderNumber === "12345") {
      setStatus("Your order is shipped and will arrive in 2 days.");
    } else {
      setStatus("Order not found. Please check your order number.");
    }
  };

  return (
    <main className="tracking-page">
      <section className="tracking-hero">
        <h1>Track Your Order</h1>
        <p>Enter your order number below to see the latest status of your shipment.</p>

        <div className="tracking-form">
          <input
            type="text"
            placeholder="Order Number"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
          />
          <button className="btn" onClick={handleTrack}>
            Track Order
          </button>
        </div>

        {status && <p className="tracking-status">{status}</p>}
      </section>
    </main>
  );
}
