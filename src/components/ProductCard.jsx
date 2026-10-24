import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  return (
    <div className="card">
      <span className="badge">{discount}% OFF</span>
      <Link to={`/products/${product.id}`} className="card-img">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width="300"
          height="300"
        />
      </Link>
      <div className="card-body">
        <p className="category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="rating">⭐ {product.rating}</p>
        <p className="price">
          ₹{product.price.toLocaleString("en-IN")}
          <span className="old-price">₹{product.oldPrice.toLocaleString("en-IN")}</span>
        </p>
        <div className="card-actions">
          <Link to={`/products/${product.id}`} className="btn btn-outline">
            Details
          </Link>
          <button className={`btn ${added ? "btn-success" : ""}`} onClick={handleAdd}>
            {added ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}