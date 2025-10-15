import React, { useState } from "react";
import "./Gift.css";

const Gift = () => {
  const [form, setForm] = useState({
    recipientName: "",
    recipientEmail: "",
    senderName: "",
    message: "",
    amount: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.recipientName && form.recipientEmail && form.amount) {
      setSubmitted(true);
      // Optionally store or send data to backend
      console.log("Gift Certificate Data:", form);
    }
  };

  return (
    <div className="gift-container">
      <h2 className="gift-title">🎁 Send a Gift Certificate</h2>
      {submitted ? (
        <div className="success-message">
          <h3>✅ Gift Certificate Sent!</h3>
          <p>
            A ${form.amount} certificate has been sent to{" "}
            <strong>{form.recipientEmail}</strong>.
          </p>
        </div>
      ) : (
        <form className="gift-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Recipient Name:</label>
            <input
              type="text"
              name="recipientName"
              value={form.recipientName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Recipient Email:</label>
            <input
              type="email"
              name="recipientEmail"
              value={form.recipientEmail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Your Name:</label>
            <input
              type="text"
              name="senderName"
              value={form.senderName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="3"
              placeholder="Add a special message..."
            ></textarea>
          </div>

          <div className="form-group">
            <label>Amount (USD):</label>
            <input
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              required
              min="10"
              max="1000"
            />
          </div>

          <button type="submit" className="gift-btn">
            Send Gift Certificate
          </button>
        </form>
      )}
    </div>
  );
};

export default Gift;
