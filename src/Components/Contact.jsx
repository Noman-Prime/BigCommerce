import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name && form.email && form.message) {
      setSubmitted(true);
      console.log("✅ Contact Form Data:", form);
      // Optionally send data to backend or email service
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h2 className="contact-title">📬 Contact Us</h2>

        {submitted ? (
          <div className="thank-you-message">
            <h3>Thank you!</h3>
            <p>We have received your message and will get back to you soon.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Subject:</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Message:</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;