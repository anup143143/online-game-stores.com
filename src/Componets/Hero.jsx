import { Link } from 'react-router-dom';
import HeroImg from '../assets/Hero-img.png';





export const Hero =()=>{

    return(
     <>

     <div className="Hero-section">
        <div className="left-hero">
            <div className="hero-text">
                <h1>Big Sale on Best Products</h1>
                <p>Up to 50% off on all products. Limited time offer!</p>
                <Link to="./Shop">
                <button className="btn">Shop Now</button>
                </Link>
            </div>
            <div className="right-hero">
                <img src={HeroImg} alt="Hero Image" />
            </div>
        </div>
     </div>
   </>


    )
}

export default Hero