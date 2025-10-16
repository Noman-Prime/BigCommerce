import React from "react";
import "./TermsConditions.css";

const TermsConditions = () => {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <h1 className="terms-title">Terms & Conditions</h1>

        <p className="terms-intro">
          Welcome to <strong>BigCommerce</strong>. By accessing or using our website,
          you agree to comply with and be bound by the following terms and
          conditions. Please read them carefully before using our services.
        </p>

        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By visiting our website or purchasing from us, you engage in our
            “Service” and agree to be bound by these Terms & Conditions,
            including any additional terms and policies referenced herein.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Use of the Website</h2>
          <ul>
            <li>You must be at least 18 years old to use this website.</li>
            <li>You agree not to use the website for any illegal or unauthorized purpose.</li>
            <li>All content on this website is owned by or licensed to BigCommerce and is protected by copyright laws.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>3. Product Information</h2>
          <p>
            We strive to ensure that product details and prices are accurate.
            However, we reserve the right to correct any errors or update
            information at any time without prior notice.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. Orders and Payments</h2>
          <ul>
            <li>All orders are subject to acceptance and availability.</li>
            <li>We reserve the right to cancel any order for any reason, including pricing errors or stock issues.</li>
            <li>Payments must be made through the methods provided on the checkout page.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>5. Shipping and Delivery</h2>
          <p>
            Delivery times may vary based on location and product availability.
            BigCommerce is not responsible for delays caused by courier services
            or customs.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Limitation of Liability</h2>
          <p>
            BigCommerce shall not be held liable for any indirect, incidental, or
            consequential damages resulting from the use or inability to use our
            website or services.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Privacy Policy</h2>
          <p>
            Your use of this website is also governed by our{" "}
            <a href="/privacy">Privacy Policy</a>. Please review it to understand
            how we collect and use your personal information.
          </p>
        </section>

        <section className="terms-section">
          <h2>8. Changes to These Terms</h2>
          <p>
            BigCommerce reserves the right to update or modify these Terms &
            Conditions at any time. Changes will take effect immediately upon
            posting on the website.
          </p>
        </section>

        <section className="terms-section contact-note">
          <h2>9. Contact Information</h2>
          <p>
            For questions about these Terms & Conditions, please contact us:
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

export default TermsConditions;