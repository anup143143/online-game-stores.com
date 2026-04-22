import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // ✅ LOAD FROM LOCAL STORAGE
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ ADD TO CART
  const addToCart = (product, qty = 1, size = "") => {
    setCartItems((prev) => {

      const existing = prev.find(
        (item) => item.id === product.id && item.size === size
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }

      return [
        ...prev,
        { ...product, quantity: qty, size: size }
      ];
    });
  };

  // ✅ REMOVE FIXED
  const removeFromCart = (id, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  // ✅ COUNT
  const cartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);