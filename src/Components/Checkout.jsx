import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Checkout.css";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "cod",
  });
  const [submitted, setSubmitted] = useState(false);

  // ✅ Load Cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const subtotal = cart.reduce(
    (sum, it) => sum + Number(it.price) * (it.quantity || 1),
    0
  );
  const shipping = subtotal > 0 ? 0 : 0;
  const total = subtotal + shipping;

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle order submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.address) {
      alert("⚠️ Please fill all fields before placing your order.");
      return;
    }

    const newOrder = {
      id: Date.now(),
      items: cart,
      total,
      customer: form,
      date: new Date().toLocaleString(),
    };

    // Save to localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    // Clear cart and show success message
    localStorage.removeItem("cart");
    setCart([]);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <div className="checkout-page">
        <h1 className="checkout-title">💳 Checkout</h1>

        {submitted ? (
          <div className="checkout-success">
            <h2>✅ Order Confirmed!</h2>
            <p>
              Thank you, <strong>{form.name}</strong>! Your order has been placed
              successfully.
            </p>
            <p>You’ll receive a confirmation email shortly.</p>
          </div>
        ) : (
          <div className="checkout-content">
            {/* 🛍️ Order Summary */}
            <div className="checkout-summary">
              <h3>Order Summary</h3>
              {cart.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="checkout-item">
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h4>{item.title}</h4>
                      <p>
                        ${item.price} × {item.quantity || 1}
                      </p>
                    </div>
                  </div>
                ))
              )}

              <hr />
              <div className="summary-row">
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <strong>{shipping === 0 ? "Free" : `$${shipping}`}</strong>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
            </div>

            {/* 🧾 Billing Form */}
            <form className="checkout-form" onSubmit={handleSubmit}>
              <h3>Billing Details</h3>

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="e.g. +92 300 1234567"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Shipping Address</label>
                <textarea
                  name="address"
                  rows="3"
                  placeholder="Enter your complete address"
                  value={form.address}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-group">
                <label>Payment Method</label>
                <select
                  name="payment"
                  value={form.payment}
                  onChange={handleChange}
                >
                  <option value="cod">Cash on Delivery</option>
                  <option value="card">Credit / Debit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>

              <button type="submit" className="checkout-btn">
                Place Order
              </button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;