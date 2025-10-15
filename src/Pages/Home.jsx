import React, { useState, useEffect } from "react";
import Hero from "../Components/Hero";
import Product_1 from "../Components/Product_1";
import Footer from "../Components/Footer";
import axios from "axios";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products once
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setAllProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  // Search handler passed to Navbar
  const handleSearch = (query) => {
    if (!query) {
      setFilteredProducts(allProducts); // reset
      return;
    }

    const results = allProducts.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(results);

    // Scroll to product section
    const productSection = document.getElementById("product-section");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Hero />
      <Product_1 products={filteredProducts} />
      <Footer />
    </div>
  );
};

export default Home;