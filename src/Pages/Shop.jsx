import { useParams, Link } from "react-router-dom";
import Navbar from '../Componets/Navbar'
import Footer from '../Componets/Footer'
import ProductCard from '../Componets/ProductCard'
import { Productdata } from '../Componets/ProductData'

export const Shop = () => {

  const { category } = useParams();

  // filter products
  const filteredProducts = category
    ? Productdata.filter((product) => product.category === category)
    : Productdata;

  return (
    <>
      <Navbar />
      
      <h1 className='shop-head'>
        Shop Our Products
      </h1>

      <div className="shop-sec">

        {/* LEFT SIDEBAR */}

        <div className="left-sidebar">

          <input type="text" placeholder='Search' />

          <h3>Categories</h3>

          <ul className='nav-link'>
            <li><Link to="/shop/electronics">Electronics</Link> </li>
            <li><Link to="/shop/fashion">Fashion</Link> </li>
            <li><Link to="/shop/shoe">Shoes</Link></li>
            <li><Link to="/shop/watches">Watches</Link></li>
            <li><Link to="/shop">All Products</Link></li>
          </ul>

          <div className="Contact-us">
            <h3>Contact Us</h3>
            <p>Email: info@shop.com</p>
            <p>Phone: 123-456-7890</p>
          </div>

        </div>

        {/* PRODUCT GRID */}

        <div className="Product-grid">

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <h2>No Products Found</h2>
          )}

        </div>

      </div>

      <Footer />
    </>
  )
}

export default Shop