import { useParams } from "react-router-dom";
import { Productdata } from "../Componets/ProductData.jsx";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";
import { useState } from "react";
import { useCart } from "./CartContext";

export const ProductDetails = () => {

  const { addToCart } = useCart();

  const { id } = useParams();
  const product = Productdata.find((item) => item.id === Number(id));

  const [qty, setQty] = useState(0);
  const [size, setSize] = useState(product?.sizes?.[0] || "");

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
  }

  const handleAddToCart = () => {

    if (qty === 0) {
      alert("Please select quantity");
      return;
    }

    if (product.sizes && !size) {
      alert("Please select size");
      return;
    }

    // ✅ FIX: size pass karo
    addToCart(product, qty, size);

    setQty(0);
  };

  return (
    <>
      <Navbar />

      <div className="product-details">

        <div className="leftside">
          <img
            src={product.Image}
            alt={product.Name}
            className="product-image"
          />
        </div>

        <div className="rightside">
          <h2 className="product-name">{product.Name}</h2>

          <p className="review">
            {product.rating} ({product.reviewsCount || 0} reviews)
          </p>

          <div className="price-box">
            <span className="new-price">${product.Price}</span>
            {product.oldPrice && (
              <span className="old-price">${product.oldPrice}</span>
            )}
          </div>

          <p className="shipping">{product.Descriptions}</p>

          {/* SIZE */}
          {product.sizes && (
            <div className="size-box">
              <h4>Select Size</h4>

              <div className="sizes">
                {product.sizes.map((s, index) => (
                  <button
                    key={index}
                    className={size === s ? "active-size" : ""}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* QUANTITY */}
          <div className="quantity-box">
            <button onClick={() => qty > 0 && setQty(qty - 1)}>
              -
            </button>

            <span>{qty}</span>

            <button onClick={() => setQty(qty + 1)}>
              +
            </button>
          </div>

          {/* ADD TO CART */}
          <button className="btn" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>

      {/* बाकी सब same */}
      {product.overview && (
        <div className="product-overview">
          <h2>Product Overview</h2>
          <p>{product.overview}</p>

          {product.features && (
            <ul>
              {product.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {product.specifications && (
        <div className="product-spec">
          <h2>Product Specification</h2>
          <ul>
            {Object.entries(product.specifications).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}

      {product.extraFeatures && (
        <div className="extra-features">
          {product.extraFeatures.map((item, index) => (
            <div className="feature" key={index}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      )}

      {product.reviews && (
        <div className="reviews">
          <h2>Product Reviews</h2>

          {product.reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <h4>{review.name}</h4>
              <p className="review-time">{review.time}</p>
              <h5>{review.title}</h5>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      )}

      <Footer />
    </>
  );
};

export default ProductDetails;