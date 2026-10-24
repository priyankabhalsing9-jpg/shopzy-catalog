import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="empty">
        <p>Product not found.</p>
        <Link to="/products" className="btn">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="details">
      <div className="details-img">
        <img src={product.image} alt={product.name} width="400" height="400" />
      </div>
      <div className="details-info">
        <p className="category">{product.category}</p>
        <h1>{product.name}</h1>
        <p className="rating">⭐ {product.rating} rating</p>
        <p className="price big">
          ₹{product.price.toLocaleString("en-IN")}
          <span className="old-price">₹{product.oldPrice.toLocaleString("en-IN")}</span>
        </p>
        <p className="desc">{product.description}</p>
        <div className="card-actions">
          <button className="btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <Link to="/cart" className="btn btn-outline">Go to Cart</Link>
        </div>
        <Link to="/products" className="back-link">← Back to Products</Link>
      </div>
    </div>
  );
}