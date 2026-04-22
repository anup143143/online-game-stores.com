import { Link } from 'react-router-dom';
import ElectricImage from '../assets/electric-Photoroom.png';
import FashionImage from '../assets/Fashion-Photoroom.png';
import ShoesImage from '../assets/shoes-Photoroom.png';
import WatchImage from '../assets/watch-Photoroom.png';


export const Categories = () => {

  return (
    <>

      <div className="categories-section">
        <h1>Featured Categorey</h1>
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

     
    </>
  )
}

export default Categories;