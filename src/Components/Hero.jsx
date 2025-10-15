import React, { useEffect, useState } from "react";
import "./Hero.css";

const HeroSection = () => {
  // Slides: each has an image + title + subtitle
  const slides = [
    {
      image:"images/banner_1.jpg",
      title: "Welcome to BigCommerce",
      subtitle: "Empowering your online business journey.",
    },
    {
      image:
        "images/banner_2.jpg",
      title: "Build Your Online Store",
      subtitle: "Fast, secure, and scalable e-commerce solutions.",
    },
    {
      image:"images/banner_3.jpg",
      title: "Grow Your Digital Presence",
      subtitle: "Reach more customers with responsive design.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-section">
      {/* Banner Images */}
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.image}
          alt={`Banner ${i + 1}`}
          className={`hero-banner ${i === index ? "active" : ""}`}
        />
      ))}

      {/* Center Text Box */}
      <div className="hero-overlay">
        <h1 key={slides[index].title} className="fade-text hero-title">
          {slides[index].title}
        </h1>
        <p key={slides[index].subtitle} className="fade-text hero-subtitle">
          {slides[index].subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;