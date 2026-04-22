import { Link } from "react-router-dom";
import { useCart } from './CartContext';

export const ProductCard = ({ product, addToCart }) => {
  const { addToCart: addToCartFromContext } = useCart();

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart(product);
    } else {
      addToCartFromContext(product);
    }
  };

  return (
    <section>
      <div className="product-card">

        <Link to={`/product/${product.id}`}>
          <img
            src={product.Image}
            alt={product.Name}
            className="product-image"
          />
        </Link>

        <h3 className="product-name">{product.Name}</h3>
        <p className="product-price">Price: ${product.Price}</p>
        <p className="product-rating">{product.rating}</p>

        <button onClick={handleAddToCart} className="btn"> Add to cart</button>

      </div>
    </section>
  );
};

export default ProductCard;