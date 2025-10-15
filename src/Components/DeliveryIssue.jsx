import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./DeliveryIssue.css";

const DeliveryIssue = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderId: "",
    issueType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.orderId ||
      !formData.issueType ||
      !formData.message
    ) {
      alert("⚠️ Please fill all fields before submitting!");
      return;
    }

    // ✅ Example: save to localStorage or send to API
    console.log("Delivery Issue Submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      orderId: "",
      issueType: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <div className="delivery-issue-page">
        <h1 className="delivery-issue-title">📦 Report a Delivery Issue</h1>
        <p className="delivery-issue-subtext">
          If you’ve experienced any problem with your order delivery, please fill
          out this form and our support team will reach out to you shortly.
        </p>

        {!submitted ? (
          <form className="delivery-issue-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Order ID</label>
              <input
                type="text"
                name="orderId"
                placeholder="e.g. #123456"
                value={formData.orderId}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Issue Type</label>
              <select
                name="issueType"
                value={formData.issueType}
                onChange={handleChange}
              >
                <option value="">Select issue type</option>
                <option value="late">🚚 Late Delivery</option>
                <option value="damaged">📦 Damaged Product</option>
                <option value="missing">❌ Missing Item</option>
                <option value="wrong">🔄 Wrong Product Delivered</option>
                <option value="other">💬 Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Describe your issue in detail..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit Issue
            </button>
          </form>
        ) : (
          <div className="success-message">
            <h3>✅ Thank you!</h3>
            <p>
              Your delivery issue has been submitted successfully. Our support
              team will contact you soon.
            </p>
            <button
              className="submit-btn"
              onClick={() => setSubmitted(false)}
            >
              Submit Another Issue
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default DeliveryIssue;
