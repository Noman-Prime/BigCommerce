import React, { useEffect, useState } from "react";
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogData = [
      {
        id: 1,
        title: "The Future of E-Commerce: Trends for 2025",
        image:
          "./images/AI-ecommere.jpg",
        author: "Admin",
        date: "October 8, 2025",
        description:
          "E-commerce continues to evolve rapidly with AI-driven personalization, same-day delivery, and virtual shopping experiences. Discover the key trends shaping 2025.",
      },
      {
        id: 2,
        title: "Top 10 Tips for Smart Online Shopping",
        image:
          "./images/AI-learn.jpg",
        author: "Sarah Malik",
        date: "September 28, 2025",
        description:
          "Learn how to find the best deals, avoid scams, and make your online shopping safe and efficient. Our experts share proven strategies for smarter buying.",
      },
      {
        id: 3,
        title: "How Sustainable Products Are Changing the Market",
        image:
          "./images/AI-eco-friendly.jpg",
        author: "John Ahmed",
        date: "September 10, 2025",
        description:
          "Consumers are demanding eco-friendly products more than ever. Here’s how sustainability is transforming e-commerce and what it means for your choices.",
      },
    ];

    setBlogs(blogData);
  }, []);

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>Latest Articles</h1>
        <p>
          Stay updated with the latest trends, tips, and insights in the world
          of e-commerce and shopping.
        </p>
      </div>

      <div className="blog-container">
        {blogs.map((post) => (
          <div key={post.id} className="blog-card">
            <img
              src={post.image}
              alt={post.title}
              className="blog-img"
              loading="lazy"
            />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <div className="blog-meta">
                <span>✍️ {post.author}</span> | <span>{post.date}</span>
              </div>
              <p>{post.description}</p>
              <button className="read-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
