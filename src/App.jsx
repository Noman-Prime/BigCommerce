import React from "react";
import "tailwindcss";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Wishpage from "./Pages/Wishpage";
import Giftpage from "./Pages/Giftpage";
import Contactpage from "./Pages/Contactpage";
import Product_detail from "./Components/Product_detail";
import Cart from "./Components/Cart";
import DeliveryIssue from "./Components/DeliveryIssue";
import Checkout from "./Components/Checkout";
import About from "./Pages/About";
import FAQ_page from "./Pages/FAQ_page";
import Tracking from "./Pages/Tracking";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wishlist" element={<Wishpage />} />
        <Route path="/gift-certificates" element={<Giftpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/product-detail" element={<Product_detail />} />
        <Route path="/product/:id" element={<Product_detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/delivery-issue" element={<DeliveryIssue />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/FAQ" element={<FAQ_page />} />
        <Route path="/track-order" element={<Tracking />} />
      </Routes>
      
    </>
  );
}

export default App;
