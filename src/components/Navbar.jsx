import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo">🛍️ Shopzy</Link>
        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart" className="cart-link">
            🛒 Cart
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}