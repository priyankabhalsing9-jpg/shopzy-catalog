import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, addToCart, decreaseQty, removeFromCart, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty">
        <h2>🛒 Your cart is empty</h2>
        <p>Add some products to get started.</p>
        <Link to="/products" className="btn">Start Shopping</Link>
      </div>
    );
  }

  return (
    <>
      <h2 className="section-title">Shopping Cart</h2>
      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} width="90" height="90" />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p className="price">₹{item.price.toLocaleString("en-IN")}</p>
              </div>
              <div className="qty">
                <button onClick={() => decreaseQty(item.id)}>−</button>
                <span>{item.qty}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
              <p className="item-total">₹{(item.price * item.qty).toLocaleString("en-IN")}</p>
              <button className="remove" onClick={() => removeFromCart(item.id)}>✕</button>
            </div>
          ))}
        </div>

        <aside className="summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{totalPrice.toLocaleString("en-IN")}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span className="free">FREE</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{totalPrice.toLocaleString("en-IN")}</span>
          </div>
          <button className="btn full" onClick={() => { alert("Order placed successfully!"); clearCart(); }}>
            Checkout
          </button>
          <button className="btn btn-outline full" onClick={clearCart}>Clear Cart</button>
        </aside>
      </div>
    </>
  );
}