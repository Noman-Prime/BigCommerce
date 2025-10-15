import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Wishlist.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  // ✅ Load wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // ✅ Remove product from wishlist
  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // ✅ View product details
  const viewDetails = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  // ✅ Add product to bucket/cart
  const addToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const alreadyInCart = cart.find((item) => item.id === product.id);

  if (alreadyInCart) {
    alert("🛒 This product is already in your cart!");
  } else {
    // Add with default quantity 1
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("✅ Product added to cart!");
  }

  // ✅ Redirect to cart page
  navigate("/cart");
};


  // ✅ Go to products
  const goToProducts = () => {
    navigate("/");
  };

  return (
    <>
      <div className="wishlist-container">
        <h2 className="wishlist-title">💖 My Wishlist</h2>

        {wishlist.length === 0 ? (
          <div className="empty-state">
            <p className="empty-text">No product added yet!</p>
            <button className="go-products-btn" onClick={goToProducts}>
              🛍️ Add Products
            </button>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlist.map((item) => (
              <div key={item.id} className="wishlist-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="wishlist-image"
                />
                <h3 className="wishlist-name">{item.title}</h3>
                <p className="wishlist-price">${item.price}</p>

                <div className="wishlist-btn-group">
                  <button
                    className="details-btn"
                    onClick={() => viewDetails(item)}
                  >
                    View Details
                  </button>

                  <button
                    className="bucket-btn"
                    onClick={() => addToCart(item)}
                  >
                    Add to Bucket
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;