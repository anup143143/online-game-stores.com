import { Link } from 'react-router-dom';
import ElectricImage from '../assets/electric-Photoroom.png';
import FashionImage from '../assets/Fashion-Photoroom.png';
import ShoesImage from '../assets/shoes-Photoroom.png';
import WatchImage from '../assets/watch-Photoroom.png';
import Footer from '../Componets/Footer';
import Navbar from '../Componets/Navbar';

export const Categories = () => {

  return (
    <>
      <Navbar />

      
      <div className="categories-section">
               <h2>Featured Categories</h2>
        <div className="all-sec">

          <div className="electronic-sec">
            <Link to="/shop/electronics">
              <img src={ElectricImage} alt="Electronic" />
              <h3>Electronics</h3>
            </Link>
          </div>

          <div className="fashion-sec">
            <Link to="/shop/fashion">
              <img src={FashionImage} alt="Fashion" />
              <h3>Fashion</h3>
            </Link>
          </div>

          <div className="Shoes-sec">
            <Link to="/shop/shoe">
              <img src={ShoesImage} alt="Shoes" />
              <h3>Shoes</h3>
            </Link>
          </div>

          <div className="Watch-sec">
            <Link to="/shop/watches">
              <img src={WatchImage} alt="Watch" />
              <h3>Watches</h3>
            </Link>
          </div>

        </div>
      </div>

      {/* 🔥 NEW SECTION 1: Featured Categories */}
      <section className="featured-sec">
        <div className="featured-grid">
          <div>🔥 Best Selling</div>
          <div>🆕 New Arrivals</div>
          <div>💰 Top Deals</div>
          <div>⭐ Trending</div>
        </div>
      </section>

      {/* 🔥 NEW SECTION 2: Why Shop With Us */}
      <section className="why-sec">
        <h2>Why Shop With Us?</h2>
        <div className="why-grid">
          <div>
            <h3>🚚 Fast Delivery</h3>
            <p>Quick delivery across India</p>
          </div>
          <div>
            <h3>💳 Secure Payment</h3>
            <p>100% secure payment</p>
          </div>
          <div>
            <h3>🔄 Easy Returns</h3>
            <p>7 days return policy</p>
          </div>
          <div>
            <h3>📞 24/7 Support</h3>
            <p>Customer support anytime</p>
          </div>
        </div>
      </section>

      {/* 🔥 NEW SECTION 3: Banner */}
      <section className="banner-sec">
        <h2>Big Sale is Live 🔥</h2>
        <p>Up to 50% off on all categories</p>

        <Link to='/shop'>
          <button>Shop Now</button>
        </Link>
        
      </section>

      {/* 🔥 NEW SECTION 4: Popular Tags */}
      <section className="tags-sec">
        <h2>Popular Searches</h2>
        <div className="tags">
          <span>Mobiles</span>
          <span>Sneakers</span>
          <span>T-Shirts</span>
          <span>Smart Watches</span>
          <span>Laptops</span>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Categories;