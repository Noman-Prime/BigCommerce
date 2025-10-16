// src/pages/Shop.jsx
import React, { useEffect, useState } from "react";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  // Example: Mock data — replace with your API later
  useEffect(() => {
    const mockProducts = [
      { id: 1, name: "Smart Watch", price: 120, image: "/images/watch.jpg" },
      { id: 2, name: "Wireless Headphones", price: 80, image: "/images/headphones.jpg" },
      { id: 3, name: "Sneakers", price: 150, image: "/images/sneakers.jpg" },
      { id: 4, name: "Smartphone", price: 600, image: "/images/phone.jpg" },
      { id: 5, name: "Backpack", price: 50, image: "/images/backpack.jpg" },
      { id: 6, name: "Laptop", price: 950, image: "/images/laptop.jpg" },
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <div className="shop-container">
      <h1 className="shop-title">Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button className="add-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;