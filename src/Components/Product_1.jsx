import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Product_1.css";

const Product_1 = ({ products }) => {
  const [category, setCategory] = useState("all");
  const [minimum, setMinimum] = useState("");
  const [maximum, setMaximum] = useState("");
  const [appliedFilters, setAppliedFilters] = useState({
    category: "all",
    min: "",
    max: "",
  });
  const [showFilter, setShowFilter] = useState(false);

  const handleApplyCategory = () => {
    setAppliedFilters((prev) => ({
      ...prev,
      category,
    }));
    setShowFilter(false);
  };

  const handleClearCategory = () => {
    setCategory("all");
    setAppliedFilters((prev) => ({
      ...prev,
      category: "all",
    }));
  };

  const handleApplyPrice = () => {
    setAppliedFilters((prev) => ({
      ...prev,
      min: minimum,
      max: maximum,
    }));
    setShowFilter(false);
  };

  const handleClearPrice = () => {
    setMinimum("");
    setMaximum("");
    setAppliedFilters((prev) => ({
      ...prev,
      min: "",
      max: "",
    }));
  };

  const handleClearAll = () => {
    setCategory("all");
    setMinimum("");
    setMaximum("");
    setAppliedFilters({
      category: "all",
      min: "",
      max: "",
    });
  };

  const filteredProducts = products.filter((item) => {
    const matchCategory =
      appliedFilters.category === "all" ||
      item.category === appliedFilters.category;
    const price = item.price || 0;
    const minVal = parseFloat(appliedFilters.min) || 0;
    const maxVal = parseFloat(appliedFilters.max) || Infinity;
    return matchCategory && price >= minVal && price <= maxVal;
  });

  const toggleFilter = () => setShowFilter((prev) => !prev);

  return (
    <section id="product-section" className="product">
      <div className="product-header">
        <h1 className="product-title">Products</h1>

        <div className={`filter-wrapper ${showFilter ? "show" : ""}`}>
          <button className="filter-btn" onClick={toggleFilter}>
            <img src="/images/filter-button.png" alt="Filter" />
          </button>

          <div className="filter-dropdown">
            {/* Category Filter */}
            <label>Category</label>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All</option>
              <option value="men's clothing">Men</option>
              <option value="women's clothing">Women</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>

            <div className="filter-buttons mt-2">
              <button className="btn btn-primary" onClick={handleApplyCategory}>
                Apply
              </button>
              <button className="btn btn-outline-danger" onClick={handleClearCategory}>
                Clear
              </button>
            </div>

            {/* Price Filter */}
            <label className="mt-3">Price Range</label>
            <div className="price-inputs">
              <input
                type="number"
                placeholder="Min"
                value={minimum}
                onChange={(e) => setMinimum(e.target.value)}
              />
              <input
                type="number"
                placeholder="Max"
                value={maximum}
                onChange={(e) => setMaximum(e.target.value)}
              />
            </div>

            <div className="filter-buttons mt-2">
              <button className="btn btn-primary" onClick={handleApplyPrice}>
                Apply
              </button>
              <button className="btn btn-outline-danger" onClick={handleClearPrice}>
                Clear
              </button>
            </div>

            <div className="filter-buttons mt-3">
              <button className="btn btn-dark w-100" onClick={handleClearAll}>
                Clear All Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="product-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
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
          <p className="no-products">No products found.</p>
        )}
      </div>
    </section>
  );
};

export default Product_1;