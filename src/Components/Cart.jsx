import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // ✅ Load cart whenever page opens or localStorage changes
  useEffect(() => {
    const loadCart = () => {
      const stored = JSON.parse(localStorage.getItem("cart")) || [];
      const normalized = stored.map((item) => ({
        ...item,
        quantity: item.quantity && item.quantity > 0 ? item.quantity : 1,
      }));
      setCart(normalized);
    };

    loadCart();

    // ✅ Listen to cart updates across pages
    window.addEventListener("storage", loadCart);
    return () => window.removeEventListener("storage", loadCart);
  }, []);

  // ✅ Save cart to localStorage when updated
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // ✅ Increase quantity
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((it) => (it.id === id ? { ...it, quantity: it.quantity + 1 } : it))
    );
  };

  // ✅ Decrease quantity (minimum 1)
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, quantity: Math.max(1, it.quantity - 1) } : it
      )
    );
  };

  // ✅ Remove item completely
  const removeItem = (id) => {
    const updated = cart.filter((it) => it.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // ✅ Totals
  const subtotal = cart.reduce(
    (sum, it) => sum + Number(it.price) * it.quantity,
    0
  );
  const shipping = subtotal > 0 ? 0 : 0;
  const total = subtotal + shipping;

  const proceedToCheckout = () => {
  // Save the current cart and total for checkout
  localStorage.setItem(
    "checkoutData",
    JSON.stringify({ cart, total: total.toFixed(2) })
  );

  navigate("/checkout");
};

  const goToProducts = () => {
    navigate("/");
  };
  const goToWishlist = () =>{
    navigate("/Wishlist");
  }

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h1 className="cart-title">🛒 Your Cart</h1>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <p className="cart-empty-text">Your cart is empty.</p>
            <div className="cart-empty-actions">
              <button className="primary-btn" onClick={goToProducts}>
                🛍️ Browse Products
              </button>
              <button className="primary-btn" onClick={goToWishlist}>
                ❤️ View Wishlist
              </button>
            </div>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <div className="cart-item-image-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-item-image"
                    />
                  </div>

                  <div className="cart-item-info">
                    <Link
                      to={`/product/${item.id}`}
                      state={{ product: item }}
                      className="cart-item-title"
                    >
                      {item.title}
                    </Link>

                    <p className="cart-item-price">
                      Price: ${Number(item.price).toFixed(2)}
                    </p>

                    <div className="qty-controls">
                      <button
                        className="qty-btn"
                        onClick={() => decreaseQty(item.id)}
                      >
                        −
                      </button>
                      <div className="qty-value">{item.quantity}</div>
                      <button
                        className="qty-btn"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <p className="cart-item-sub">
                      Subtotal: ${(Number(item.price) * item.quantity).toFixed(2)}
                    </p>

                    <div className="cart-item-actions">
                      <button
                        className="remove-item-btn"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>

                      <button
                        className="move-to-wishlist-btn"
                        onClick={() => {
                          const wishlist =
                            JSON.parse(localStorage.getItem("wishlist")) || [];
                          const exists = wishlist.find((w) => w.id === item.id);
                          if (!exists) {
                            wishlist.push(item);
                            localStorage.setItem(
                              "wishlist",
                              JSON.stringify(wishlist)
                            );
                          }
                          alert("💖 Moved to wishlist!");
                        }}
                      >
                        Move to Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="cart-summary">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <hr />
              <div className="summary-row total-row">
                <strong>Total</strong>
                <strong>${total.toFixed(2)}</strong>
              </div>

              <button className="checkout-btn" onClick={proceedToCheckout}>
                Proceed to Checkout
              </button>

              <button className="continue-btn" onClick={goToProducts}>
                Continue Shopping
              </button>
            </aside>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;