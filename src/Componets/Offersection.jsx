import React from "react";
import { Link } from "react-router-dom";

export const Offersection = () => {
  return (
    <section className="offer-section">
      
      <div className="offer-left">
        <h2>🔥 Big Summer Sale</h2>
        <p>Up to 50% OFF on selected items</p>
        <Link to ='./shop'>
        <button className="offer-btn">Shop Now</button>
        </Link>
      </div>

      <div className="offer-right">
        <img
          src="https://images.unsplash.com/photo-1607082349566-187342175e2f"
          alt="offer"
        />
      </div>

    </section>
  );
};

export default Offersection;