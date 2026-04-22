import React, { useState } from 'react';
import LogoMart from '../assets/lg mart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import CartSidebar from './CartSidebar';
import { Productdata } from './ProductData';

export const Navbar = () => {

  const { cartCount, cartItems, removeFromCart } = useCart();

  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const navigate = useNavigate();

  // SEARCH
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setFiltered([]);
    } else {
      const result = Productdata.filter((item) =>
        item.Name.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(result);
    }
  };

  const handleSelect = (id) => {
    navigate(`/product/${id}`);
    setSearch("");
    setFiltered([]);
  };

  const handleSearchSubmit = () => {
    if (search.trim() === "") return;

    const foundProduct = Productdata.find((item) =>
      item.Name.toLowerCase().includes(search.toLowerCase())
    );

    if (foundProduct) {
      navigate(`/product/${foundProduct.id}`);
    } else {
      navigate(`/product?search=${search}`);
    }

    setSearch("");
    setFiltered([]);
  };

  return (
    <>
      <section className='Header'>
        <nav className="navbar-section">

          {/* LOGO */}
          <Link to='/'>
          <div className="logo-container">
            <img src={LogoMart} alt="Logo" className="logo-image" />
          </div>
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="nav-links">
            <Link to="/"><li>Home</li></Link>
            <Link to="/shop"><li>Shop</li></Link>
            <Link to="/categories"><li>Categories</li></Link>
            <Link to="/product"><li>Product</li></Link>
          </ul>

          {/* RIGHT SIDE */}
          <div className="nav-actions">

            {/* ✅ HAMBURGER (ALWAYS RENDER, CSS CONTROL) */}
            <div className="hamburger" onClick={() => setMenuOpen(true)}>
              <FontAwesomeIcon icon={faBars} />
            </div>

            {/* SEARCH */}
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleSearchChange}
                onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
              />
              <FontAwesomeIcon icon={faSearch} onClick={handleSearchSubmit} />

              {filtered.length > 0 && (
                <div className="search-results">
                  {filtered.slice(0, 5).map((item) => (
                    <div
                      key={item.id}
                      className="search-item"
                      onClick={() => handleSelect(item.id)}
                    >
                      {item.Name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CART */}
            <div className="cart-icon" onClick={() => setIsOpen(true)}>
              <p>{cartCount}</p>
              <FontAwesomeIcon icon={faCartShopping} />
            </div>

             <Link to="/shop">
            <button className="login-btn">Shop Now</button>
            </Link>
            
          </div>
        </nav>
      </section>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-header">
          <h3>Menu</h3>
          <button onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <ul>
          <li onClick={() => setMenuOpen(false)}><Link to="/">Home</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/shop">Shop</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/categories">Categories</Link></li>
          <li onClick={() => setMenuOpen(false)}><Link to="/product">Product</Link></li>
        </ul>
      </div>

      {/* OVERLAY */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

      {/* CART */}
      <CartSidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        cartItems={cartItems}
        onRemoveItem={removeFromCart}
      />
    </>
  );
};

export default Navbar;