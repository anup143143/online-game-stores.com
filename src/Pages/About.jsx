import React from "react";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";
import { Link } from "react-router-dom";

export const About = () => {
  return (

    <>
    <Navbar/>
    <section className="about-section">

      {/* HERO */}
      <div className="about-hero">
        <h1>About Vista Mart</h1>
        <p>Your trusted online shopping partner</p>
      </div>

      <div className="about-container">

        {/* STORY */}
        <div className="about-block">
          <h2>Our Story</h2>
          <p>
            Vista Mart was founded with a simple vision — to make online shopping
            easy, affordable, and accessible for everyone. Starting as a small
            platform, we have grown into a trusted marketplace offering a wide
            range of products across categories like electronics, fashion,
            lifestyle, and more.
          </p>
          <p>
            Our goal has always been to deliver quality products with a seamless
            shopping experience. With customer satisfaction at the core of our
            business, we continuously improve our services to meet modern
            shopping needs.
          </p>
        </div>

        {/* MISSION & VISION */}
        <div className="about-block grid-2">
          <div>
            <h2>Our Mission</h2>
            <p>
              To provide high-quality products at affordable prices while
              ensuring a smooth and secure shopping experience for our customers.
            </p>
          </div>

          <div>
            <h2>Our Vision</h2>
            <p>
              To become one of the most trusted and customer-centric eCommerce
              platforms globally.
            </p>
          </div>
        </div>

        {/* FEATURES */}
        <div className="about-block">
          <h2>Why Choose Us</h2>

          <div className="features">
            <div className="feature-box">
              <h3>🚚 Fast Delivery</h3>
              <p>Quick and reliable shipping across all locations.</p>
            </div>

            <div className="feature-box">
              <h3>💳 Secure Payments</h3>
              <p>Safe and encrypted payment options for all users.</p>
            </div>

            <div className="feature-box">
              <h3>⭐ Premium Quality</h3>
              <p>Carefully selected products with top quality.</p>
            </div>

            <div className="feature-box">
              <h3>📞 24/7 Support</h3>
              <p>Always available customer support team.</p>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="about-stats">
          <div>
            <h2>10K+</h2>
            <p>Happy Customers</p>
          </div>
          <div>
            <h2>500+</h2>
            <p>Products</p>
          </div>
          <div>
            <h2>50+</h2>
            <p>Brands</p>
          </div>
          <div>
            <h2>24/7</h2>
            <p>Support</p>
          </div>
        </div>

        {/* TEAM */}
        <div className="about-block">
          <h2>Our Team</h2>

          <div className="team">
            <div className="team-card">
              <h3>Anup Minj</h3>
              <p>Frontend Developer</p>
            </div>

            <div className="team-card">
              <h3>John Doe</h3>
              <p>Backend Developer</p>
            </div>

            <div className="team-card">
              <h3>Jane Smith</h3>
              <p>UI/UX Designer</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta">
          <h2>Start Shopping with Us Today!</h2>

          <Link to='/shop'>
          <button>Explore Products</button>
          </Link>

        </div>

      </div>
    </section>
    <Footer/>
    </>

  );
};

export default About;