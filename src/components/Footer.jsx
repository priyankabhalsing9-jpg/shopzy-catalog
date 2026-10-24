import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-logo">🛍️ Shopzy</p>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <p>© 2026 Shopzy. All rights reserved.</p>
    </footer>
  );
}