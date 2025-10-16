import React from "react";
import "./ReturnsRefund.css";

const ReturnsRefunds = () => {
  return (
    <div className="returns-page">
      <div className="returns-container">
        <h1 className="returns-title">Returns & Refunds Policy</h1>

        <p className="returns-intro">
          At <strong>BigCommerce</strong>, your satisfaction is our top priority.
          If you are not completely happy with your purchase, we’re here to help
          you with an easy and transparent return and refund process.
        </p>

        <section className="returns-section">
          <h2>1. Return Eligibility</h2>
          <ul>
            <li>Items can be returned within <strong>7 days</strong> of delivery.</li>
            <li>Products must be unused, in original packaging, and include all accessories.</li>
            <li>Proof of purchase (order ID or invoice) is required for all returns.</li>
          </ul>
        </section>

        <section className="returns-section">
          <h2>2. Non-Returnable Items</h2>
          <ul>
            <li>Customized or personalized products.</li>
            <li>Items purchased on sale or with special discounts.</li>
            <li>Digital goods, downloadable software, or gift cards.</li>
          </ul>
        </section>

        <section className="returns-section">
          <h2>3. Refund Process</h2>
          <p>
            Once your return is received and inspected, we will send you an email
            to notify you about the approval or rejection of your refund.
          </p>
          <ul>
            <li>If approved, your refund will be processed within <strong>5–7 business days</strong>.</li>
            <li>Refunds will be credited to your original payment method.</li>
          </ul>
        </section>

        <section className="returns-section">
          <h2>4. Exchange Policy</h2>
          <p>
            We replace items only if they are defective or damaged. If you need to
            exchange it for the same item, please contact us via:
          </p>
          <ul>
            <li>Email: <a href="mailto:support@bigcommerce.com">support@bigcommerce.com</a></li>
            <li>WhatsApp: <a href="https://wa.me/923254466097" target="_blank" rel="noopener noreferrer">+92 325 4466097</a></li>
          </ul>
        </section>

        <section className="returns-section">
          <h2>5. Shipping Costs</h2>
          <p>
            Customers are responsible for paying their own shipping costs for
            returning items unless the product is defective or the wrong item was sent.
          </p>
        </section>

        <section className="returns-section contact-note">
          <h2>Need Help?</h2>
          <p>
            If you have any questions about our returns and refunds policy,
            please contact us anytime through email or WhatsApp.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ReturnsRefunds;
