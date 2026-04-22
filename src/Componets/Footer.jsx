import Logoimage from "../assets/logo mart.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Updated imports for social media icons
import { faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export const Footer =()=>{

    return(
        <>
        <div className="footer-sec">
            <div className="footer1">
                <div className="logo">
                    <img src={Logoimage} alt="Logo" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aperiam porro tenetur minima eligendi praesentium qui et 
                    </p>
            </div>
            <div className="footer2">
           <h1>Quick Links</h1>

               <Link to="/"><h3>Home</h3></Link>
               <Link to="/shop"><h3>Shop</h3></Link>
               <Link to="/contact"><h3>Contact</h3></Link>   {/* ✅ FIX */}
               <Link to="/about"><h3>About</h3></Link>

            </div>

            <div className="footer3">
            <h1>Follow Us</h1>
              <a href="#"><FontAwesomeIcon icon={faVoicemail} />link@gmail.com</a>
              <p>7523333311</p>
              <p>street land mark city pathlalgaon</p>
                
                  
            </div>  <div className="footer3">
                <h1>Follow Us</h1>
                <div className="social-icons">
                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>

                </div>
            </div>
        </div>

        <div className="copyrights">
            <p>&copy; 2026 Vista mart. All rights reserved.</p>
        </div>
        
        
        
        </>
    )
}

export default Footer;