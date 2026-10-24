import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Shop Smart. Live Better.</h1>
        <p>Best gadgets and accessories at unbeatable prices.</p>
        <Link to="/products" className="btn btn-light">Shop Now</Link>
      </section>

      <section className="features">
        <div>🚚 Free Delivery</div>
        <div>🔒 Secure Payment</div>
        <div>↩️ Easy Returns</div>
        <div>⭐ Top Quality</div>
      </section>

      <h2 className="section-title">Featured Products</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}