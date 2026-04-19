import { Link, NavLink } from "react-router-dom";
import Icon from "./Icon";

function Navbar() {
  const navClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");
  const cartClass = ({ isActive }) => (isActive ? "nav-cart active" : "nav-cart");

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" to="/">
          <span className="brand-mark">EP</span>
          Electric Point
        </Link>

        <div className="nav-links">
          <NavLink className={navClass} to="/">
            <Icon name="home" />
            Home
          </NavLink>
          <NavLink className={navClass} to="/shop">
            <Icon name="shop" />
            Shop
          </NavLink>
          <NavLink className={navClass} to="/blog">
            <Icon name="blog" />
            Blog
          </NavLink>
          <NavLink className={navClass} to="/contact">
            <Icon name="contact" />
            Contact
          </NavLink>
        </div>

        <div className="nav-actions">
          <NavLink className={navClass} to="/account">
            <Icon name="account" />
            Account
          </NavLink>
          <NavLink className={cartClass} to="/cart">
            <Icon name="cart" />
            Cart
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
