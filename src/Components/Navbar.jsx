import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [accountOpen, setAccountOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccountOpen, setMobileAccountOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const accountRef = useRef(null);

  const handleSearch = () => {
    const query = search.trim();
    if (query) {
      onSearch(query);
      setSearch("");
      const productSection = document.getElementById("product-section");
      if (productSection) {
        productSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (accountOpen && accountRef.current) {
      const rect = accountRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [accountOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector(".mobile-menu");
      const hamburger = document.querySelector(".hamburger-menu");

      if (
        mobileMenuOpen &&
        menu &&
        hamburger &&
        !menu.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        setMobileMenuOpen(false);
        setMobileAccountOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setAccountOpen(false);
    setMobileAccountOpen(false);
  };

  return (
    <>
      {/* Topbar - Desktop only */}
      <header className="topbar desktop-only">
        <div className="container">
          <p className="topbar-text">
            Free International shipping. No minimum order required*
          </p>

          <ul className="topbar-links">
            <li
              className="account-dropdown"
              ref={accountRef}
              onMouseEnter={() => {
                if (window.innerWidth > 768) setAccountOpen(true);
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 768) setAccountOpen(false);
              }}
            >
              <span>My Account ▼</span>

              {accountOpen &&
                ReactDOM.createPortal(
                  <ul
                    className="dropdown-menu show"
                    style={{
                      position: "absolute",
                      top: dropdownPos.top + "px",
                      left: dropdownPos.left + "px",
                      zIndex: 1000,
                    }}
                  >
                    <li>
                      <Link to="/login" onClick={() => setAccountOpen(false)}>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" onClick={() => setAccountOpen(false)}>
                        Register
                      </Link>
                    </li>
                  </ul>,
                  document.body
                )}
            </li>

            <li>
              <Link to="/wishlist">Wish List</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
            <li>
              <Link to="/gift-certificates">Gift Certificates</Link>
            </li>
          </ul>
        </div>
      </header>

      {/* Middle Navbar */}
      <header className="midbar">
        <div className="container">
          <button
            className="hamburger-menu mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={mobileMenuOpen ? "active" : ""}></span>
            <span className={mobileMenuOpen ? "active" : ""}></span>
            <span className={mobileMenuOpen ? "active" : ""}></span>
          </button>

          <Link to="/">
            <img className="logo" src="/images/logo.svg" alt="Logo" />
          </Link>

          <div className="search-group desktop-only">
            <input
              type="text"
              className="search-input"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button className="search-btn" onClick={handleSearch}>
              Search
            </button>
          </div>

          <p className="welcome-text desktop-only">Welcome to BigCommerce!</p>
        </div>
      </header>

      {/* Bottom Navbar */}
      <nav className="main-navbar sticky-navbar desktop-only">
        <div className="container">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/delivery-issue">Delivery Issue</Link>
            </li>
            <li className="cart">
              <Link to="/cart">🛒 Add To Cart</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <h3>Menu</h3>
          <button
            className="close-btn"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <ul className="mobile-menu-list">
          <li className="mobile-menu-section">
            <button
              className="section-title"
              onClick={() => setMobileAccountOpen(!mobileAccountOpen)}
            >
              Account {mobileAccountOpen ? "▲" : "▼"}
            </button>
            {mobileAccountOpen && (
              <ul>
                <li>
                  <Link to="/login" onClick={closeMobileMenu}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" onClick={closeMobileMenu}>
                    Register
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/" onClick={closeMobileMenu}>
              🏠 Home
            </Link>
          </li>
          <li>
            <Link to="/wishlist" onClick={closeMobileMenu}>
              ❤️ Wish List
            </Link>
          </li>
          <li>
            <Link to="/checkout" onClick={closeMobileMenu}>
              💳 Checkout
            </Link>
          </li>
          <li>
            <Link to="/gift-certificates" onClick={closeMobileMenu}>
              🎁 Gift Certificates
            </Link>
          </li>
          <li>
            <Link to="/blogs" onClick={closeMobileMenu}>
              📝 Blogs
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMobileMenu}>
              📞 Contact Us
            </Link>
          </li>
          <li>
            <Link to="/delivery-issue" onClick={closeMobileMenu}>
              📦 Delivery Issue
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={closeMobileMenu} className="cart-link">
              🛒 Add To Cart
            </Link>
          </li>
        </ul>
      </div>

      {mobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
