import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Product_detail.css";

const Product_detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  if (!product) {
    return <h2>No product detail available</h2>;
  }

  // ✅ Add to Cart
  const addToCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const alreadyInCart = cart.find((item) => item.id === product.id);

  if (alreadyInCart) {
    alert("🛒 This product is already in your cart!\nYou can change quantity in your cart.");
  } else {
    // Add product with quantity 1
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  }
};


  // ✅ Add to Wishlist (no alert blocking + auto redirect)
  const addToWishlist = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const alreadyInWishlist = wishlist.find((item) => item.id === product.id);

    if (!alreadyInWishlist) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }

    // ✅ Instantly navigate to wishlist page
    navigate("/wishlist");
  };

  return (
    <>
      <div className="product-detail">
        <div className="detail-card">
          <img
            src={product.image}
            alt={product.title}
            className="detail-image"
          />

          <div className="product-info">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>

            <div className="buttons">
              <button className="add-to-cart" onClick={addToCart}>
                Add to Cart
              </button>
              <button className="add-to-wishlist" onClick={addToWishlist}>
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product_detail;
