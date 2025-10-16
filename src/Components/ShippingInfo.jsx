import React from "react";
import "./ShippingInfo.css";

const ShippingInfo = () => {
  return (
    <div className="shipping-page">
      <div className="shipping-container">
        <h1 className="shipping-title">Shipping Information</h1>

        <p className="shipping-intro">
          Thank you for shopping with <strong>BigCommerce</strong>.  
          This page provides details about our shipping process, delivery times,
          and important policies to help ensure a smooth experience.
        </p>

        <section className="shipping-section">
          <h2>1. Processing Time</h2>
          <p>
            All orders are processed within <strong>1–3 business days</strong>.
            During peak seasons or sales, processing may take slightly longer,
            but we’ll always notify you in case of delays.
          </p>
        </section>

        <section className="shipping-section">
          <h2>2. Domestic Shipping (Within Pakistan)</h2>
          <ul>
            <li>Estimated delivery time: <strong>3–5 business days</strong>.</li>
            <li>Orders are shipped via reliable courier services such as TCS or Leopards.</li>
            <li>You will receive a tracking number once your order is dispatched.</li>
          </ul>
        </section>

        <section className="shipping-section">
          <h2>3. International Shipping</h2>
          <ul>
            <li>Currently, international shipping is available to select countries.</li>
            <li>Delivery time may vary between <strong>10–20 business days</strong> depending on the destination.</li>
            <li>Customs duties, taxes, or import fees (if any) are the responsibility of the customer.</li>
          </ul>
        </section>

        <section className="shipping-section">
          <h2>4. Shipping Charges</h2>
          <p>
            Shipping fees are calculated at checkout based on your order weight,
            delivery location, and chosen shipping method.  
            Occasionally, we offer <strong>free shipping promotions</strong>.
          </p>
        </section>

        <section className="shipping-section">
          <h2>5. Order Tracking</h2>
          <p>
            Once your order has been shipped, you’ll receive an email or SMS
            containing your <strong>tracking ID</strong>.  
            You can track your order status on our{" "}
            <a href="/track-order">Order Tracking</a> page.
          </p>
        </section>

        <section className="shipping-section">
          <h2>6. Delayed or Lost Packages</h2>
          <p>
            If your package is delayed or lost, please contact our support team
            within <strong>7 days</strong> of the expected delivery date.  
            We’ll work with the courier service to resolve the issue as quickly
            as possible.
          </p>
        </section>

        <section className="shipping-section">
          <h2>7. Incorrect Address Policy</h2>
          <p>
            Please make sure your delivery address is accurate and complete
            before placing your order.  
            BigCommerce is not responsible for delays or losses due to incorrect
            shipping addresses.
          </p>
        </section>

        <section className="shipping-section contact-note">
          <h2>Need Assistance?</h2>
          <p>
            For any shipping-related inquiries, please contact our support team:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:support@bigcommerce.com">
                support@bigcommerce.com
              </a>
            </li>
            <li>
              WhatsApp:{" "}
              <a
                href="https://wa.me/923254466097"
                target="_blank"
                rel="noopener noreferrer"
              >
                +92 325 4466097
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ShippingInfo;
