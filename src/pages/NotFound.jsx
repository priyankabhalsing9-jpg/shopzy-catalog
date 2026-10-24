import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="hero">
      <h1>404 - Page Not Found</h1>
      <Link to="/" className="btn">
        Go Home
      </Link>
    </div>
  );
}