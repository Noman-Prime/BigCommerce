import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Product_1.css";

const Product_1 = ({ products }) => {
  const [category, setCategory] = useState("all");
  const [minimum, setMinimum] = useState("");
  const [maximum, setMaximum] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const applyFilters = () => {
    let filteredData = [...products];

    if (category !== "all") {
      filteredData = filteredData.filter((item) => item.category === category);
    }

    const minVal = parseFloat(minimum) || 0;
    const maxVal = parseFloat(maximum) || Infinity;

    filteredData = filteredData.filter(
      (item) => item.price >= minVal && item.price <= maxVal
    );

    return filteredData;
  };

  const handleMouseEnter = () => setShowFilter(true);
  const handleMouseLeave = () => setShowFilter(false);
  const toggleFilter = () => setShowFilter((prev) => !prev);

  const finalProducts = applyFilters();

  return (
    <section id="product-section" className="product">
      {/* Header section */}
      <div className="product-header">
        <h1>Products</h1>

        <div
          className={`filter-wrapper ${showFilter ? "show" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleMouseEnter}
          onBlur={handleMouseLeave}
        >
          <button
            className="filter-btn"
            aria-label="Filter"
            onClick={toggleFilter}
          >
            <img src="/images/filter-button.png" alt="Filter" />
          </button>

          <div
            className="filter-dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleMouseEnter}
            onBlur={handleMouseLeave}
          >
            <label className="fw-semibold mb-2">Category</label>
            <select
              className="form-select mb-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All</option>
              <option value="men's clothing">Men</option>
              <option value="women's clothing">Women</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>

            <div className="filter-buttons">
              <button className="btn btn-primary" onClick={applyFilters}>
                Apply Category
              </button>
              <button
                className="btn btn-danger"
                onClick={() => setCategory("all")}
              >
                Clear Category
              </button>
            </div>

            <label className="fw-semibold mb-2 mt-3">Price</label>
            <div className="price-inputs">
              <input
                type="number"
                placeholder="Min"
                min="0"
                value={minimum}
                onChange={(e) => setMinimum(e.target.value)}
              />
              <input
                type="number"
                placeholder="Max"
                min="0"
                value={maximum}
                onChange={(e) => setMaximum(e.target.value)}
              />
            </div>
            <div className="filter-buttons">
              <button className="btn btn-primary" onClick={applyFilters}>
                Apply Price
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  setMinimum("");
                  setMaximum("");
                }}
              >
                Clear Price
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="product-container">
        {finalProducts.length > 0 ? (
          finalProducts.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.image} className="card-img" alt={p.title} />
              <div className="card-body">
                <Link
                  className="card-title"
                  to="/product-detail"
                  state={{ product: p }}
                >
                  {p.title}
                </Link>
                <h5 className="card-price">${p.price}</h5>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </section>
  );
};

export default Product_1;