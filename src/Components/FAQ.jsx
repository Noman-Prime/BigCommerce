import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "What is BigCommerce?",
    answer: "BigCommerce is a modern e-commerce platform built to help businesses grow online with style, stability, and smart tools. It allows merchants to create online stores quickly with customizable templates and reliable infrastructure.",
  },
  {
    question: "How can I create an account?",
    answer: "You can create an account by clicking on the Sign Up button on the homepage, providing your email, password, and store details. Once registered, you can access the dashboard and start building your store immediately.",
  },
  {
    question: "Can I integrate third-party apps?",
    answer: "Yes! BigCommerce supports multiple third-party app integrations such as payment gateways, marketing tools, and shipping services. This helps you extend the functionality of your online store effortlessly.",
  },
  {
    question: "How do I contact support?",
    answer: "You can contact our support team via the Contact Us page or send an email to support@bigcommerce.com. Our support team is available 24/7 to assist with any issues or questions you may have.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
