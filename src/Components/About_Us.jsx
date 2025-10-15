import React from "react";
import { Link } from "react-router-dom";
import "./About_Us.css";

export default function About_Us() {
    return (
        <main className="about-page">
            {/* HERO SECTION */}
            <section className="about-hero">
                <div className="about-hero-inner">
                    <div className="hero-text">
                        <h1 className="title">About Us</h1>
                        <p className="subtitle">
                            Welcome to <strong>BigCommerce</strong> — a modern e-commerce platform built
                            to help businesses grow online with style, stability, and smart tools.
                        </p>
                        <div className="hero-ctas">
                            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                            <Link to="/blog" className="btn btn-primary">Visit Our Blog</Link>
                        </div>
                    </div>

                    <div className="hero-image" aria-hidden="true">
                        <img
                            src="/images/illustraction.jpg"
                            alt="Team working illustration"
                            className="responsive-img"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* MISSION / VISION */}
            <section className="mission-section">
                <div className="container grid-2">
                    <div className="card">
                        <h2>Our Mission</h2>
                        <p>
                            To simplify online selling and empower creators, startups, and enterprises
                            to build beautiful online stores without complexity.
                        </p>
                    </div>

                    <div className="card">
                        <h2>Our Vision</h2>
                        <p>
                            To become a global hub for smart e-commerce — helping every brand reach the
                            world through technology, creativity, and trust.
                        </p>
                    </div>
                </div>
            </section>

            {/* CORE VALUES */}
            <section className="values-section">
                <div className="container">
                    <h2 className="section-heading">Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value">
                            <strong>Innovation</strong>
                            <p>We embrace change and continuously innovate to make e-commerce better.</p>
                        </div>
                        <div className="value">
                            <strong>Quality</strong>
                            <p>We focus on delivering stable, scalable, and secure digital solutions.</p>
                        </div>
                        <div className="value">
                            <strong>Integrity</strong>
                            <p>We believe in honesty, transparency, and long-term relationships.</p>
                        </div>
                        <div className="value">
                            <strong>Empowerment</strong>
                            <p>We empower small businesses to compete globally and grow sustainably.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section className="founder-section">
                <img
                    src="/images/noman.jpg"
                    alt="Muhammad Noman"
                    className="founder-photo"
                />
                <h3 className="founder-name">Muhammad Noman</h3>
                <p className="founder-role">Co-Founder & Developer</p>
                <p className="founder-bio">
                    Muhammad Noman is the Co-Founder and Developer of this brand and website.
                    He built this platform with a passion for modern web technology, clean design,
                    and seamless user experience to help people shop smarter and faster.
                </p>
            </section>

        </main>
    );
}