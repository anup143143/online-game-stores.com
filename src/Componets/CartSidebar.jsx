import React, { useState } from "react";

const CartSidebar = ({ isOpen, onClose, cartItems, onRemoveItem }) => {

  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        return total + (item.Price || 0) * (item.quantity || 1);
      }, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    setIsCheckedOut(true);

    // ✅ 3 seconds बाद auto reset
    setTimeout(() => {
      setIsCheckedOut(false);
    }, 3000);
  };

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>

      <div className="cart-header">
        <h2>Your Cart 🛒</h2>
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Your cart is empty 😢
          </p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">

              <img src={item.Image} alt={item.Name} className="cart-img" />

              <div className="item-info">
                <h4>{item.Name}</h4>
                <p>Price: ₹{item.Price}</p>
                <p>Qty: {item.quantity || 1}</p>
                <p>Size: {item.size || "N/A"} </p>
                <p>Total: ₹{(item.Price || 0) * (item.quantity || 1)}</p>

                <button
                className="remove-btn"
                 onClick={() => onRemoveItem(item.id, item.size)}>
                                           Remove</button>
              </div>

            </div>
          ))
        )}
      </div>

      <div className="cart-footer">

        <div className="total">
          Total: ₹{getTotalPrice()}
        </div>

        {/* ✅ Alert Message */}
        {isCheckedOut && (
          <p className="checkout-alert">
            Checkout is now disabled
          </p>
        )}

        <button
          className={`checkout-btn ${isCheckedOut ? "disabled" : ""}`}
          onClick={handleCheckout}
          disabled={isCheckedOut}
        >
          Checkout
        </button>

      </div>

    </div>
  );
};

export default CartSidebar;