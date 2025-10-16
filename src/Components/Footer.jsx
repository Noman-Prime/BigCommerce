import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-5 pb-4 mt-5">
      <div className="container">
        {/* ===== Main Footer ===== */}
        <div className="row gy-4 text-center text-md-start">
          {/* ===== Quick Links ===== */}
          <div className="col-12 col-sm-6 col-md-4">
            <h6 className="fw-bold mb-3 text-uppercase">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/shop" className="footer-link">Shop</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
            </ul>
          </div>

          {/* ===== Customer Service ===== */}
          <div className="col-12 col-sm-6 col-md-4">
            <h6 className="fw-bold mb-3 text-uppercase">Customer Service</h6>
            <ul className="list-unstyled">
              <li><Link to="/login" className="footer-link">My Account</Link></li>
              <li><Link to="/track-order" className="footer-link">Order Tracking</Link></li>
              <li><Link to="/returns" className="footer-link">Returns & Refunds</Link></li>
              <li><Link to="/shipping" className="footer-link">Shipping Info</Link></li>
              <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* ===== Contact Options ===== */}
          <div className="col-12 col-md-4">
            <h6 className="fw-bold mb-2 text-uppercase">Contact Us Directly</h6>

            <div className="contact-links d-flex flex-column gap-2 mt-0">
              <a
                href="https://wa.me/923254466097?text=Hello!%20I%20visited%20your%20website%20and%20want%20to%20contact%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success d-flex align-items-center justify-content-center gap-2 rounded-3"
                style={{ fontWeight: "600" }}
              >
                <i className="bi bi-whatsapp"></i> Chat on WhatsApp
              </a>

              <a
                href="mailto:noman.devcodes@gmail.com?subject=Inquiry%20from%20Website&body=Hello%20Noman,"
                className="btn btn-outline-light d-flex align-items-center justify-content-center gap-2 rounded-3"
                style={{ fontWeight: "600" }}
              >
                <i className="bi bi-envelope-fill"></i> Send Email
              </a>
            </div>

            {/* ===== Social Icons ===== */}
            <div className="social-icons d-flex justify-content-center justify-content-md-start gap-3 mt-3">
              <a href="#" className="text-light social-link"><FaFacebookF /></a>
              <a href="#" className="text-light social-link"><FaTwitter /></a>
              <a href="#" className="text-light social-link"><FaInstagram /></a>
              <a href="#" className="text-light social-link"><FaLinkedin /></a>
              <a href="#" className="text-light social-link"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* ===== Divider ===== */}
        <hr className="my-4 border-secondary" />

        {/* ===== Bottom Footer ===== */}
        <div className="row text-center text-md-between">
          <div className="col-md-6 mb-2 mb-md-0">
            <p className="mb-0 small">
              © {new Date().getFullYear()} BigCommerce. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6">
            <p className="mb-0 small">
              Designed with ❤️ by{" "}
              <span className="text-light fw-semibold">Muhammad Noman</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;