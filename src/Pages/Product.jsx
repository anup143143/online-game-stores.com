import React, { useState } from "react";
import { Productdata } from "../Componets/ProductData";
import ProductCard from "../Componets/ProductCard";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";
import { Link } from "react-router-dom";

const Product = ({ addToCart }) => {

  // ✅ Newsletter State
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Subscribe Handler
  const handleSubscribe = () => {
    if (!email) {
      setMessage("❌ Please enter your email");
      return;
    }

    if (!email.includes("@")) {
      setMessage("❌ Enter valid email");
      return;
    }

    setMessage("✅ Subscribed successfully!");
    setEmail("");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <>
      <Navbar />

      {/* HEADER */}
      <div className="product-header">
        <h1>🛍️ Explore Our Products</h1>
        <p>Discover the best deals and trending items</p>
      </div>

      {/* PRODUCTS */}
      <div className="product-grid">
        {Productdata.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* BANNER */}
      <div className="featured-banner">
        <h2>🔥 Special Offer</h2>
        <p>Get up to 50% off on selected items</p>
        <Link to="/shop">
          <button>Shop Now</button>
        </Link>
      </div>

      {/* SERVICES */}
      <div className="services">
        <div className="service-box">
          <h3>🚚 Free Delivery</h3>
          <p>On orders above ₹499</p>
        </div>

        <div className="service-box">
          <h3>💰 Money Back</h3>
          <p>7 days return policy</p>
        </div>

        <div className="service-box">
          <h3>🔒 Secure Payment</h3>
          <p>100% secure checkout</p>
        </div>

        <div className="service-box">
          <h3>📞 24/7 Support</h3>
          <p>Customer support anytime</p>
        </div>
      </div>

      {/* TRENDING */}
      <div className="trending-section">
        <h2>🔥 Trending Now</h2>

        <div className="product-grid">
          {Productdata.slice(0, 4).map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>

      {/* ✅ NEWSLETTER */}
      <div className="newsletter">
        <h2>📩 Subscribe to our Newsletter</h2>
        <p>Get updates on new products and offers</p>

        {/* ✅ ALERT MESSAGE */}
        {message && (
          <p
            className={`newsletter-alert ${
              message.includes("✅") ? "success" : ""
            }`}
          >
            {message}
          </p>
        )}

        <div className="newsletter-box">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Product;