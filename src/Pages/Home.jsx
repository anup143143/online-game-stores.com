import Navbar from '../Componets/Navbar'
import { Hero } from '../Componets/Hero'
import Categories from '../Componets/Categories'
import Footer from '../Componets/Footer'
import ProductCard from '../Componets/ProductCard'
import Productdata from '../Componets/ProductData'
import OfferSection from '../Componets/Offersection'

export const Home =()=>{

return(

<>

<Navbar/>
<Hero/>
<Categories/>

<div className="Best-seller">
<h1>Best selling Products</h1>
</div>

<div className="products-details">
<div className="products-section">

{Productdata.slice(0,4).map((item)=>(
<ProductCard key={item.id} product={item}/>
))}

</div>
</div>
<OfferSection/>

<Footer/>

</>

)
}

export default Home;