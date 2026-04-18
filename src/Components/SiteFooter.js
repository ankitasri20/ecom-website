import { Link } from "react-router-dom";
import Icon from "./Icon";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h4>Electric Point</h4>
          <p className="footer-line">
            <Icon name="location" size={18} />
            Electrical Market, Patna
          </p>
          <p>Bihar, India</p>
        </div>

        <div>
          <h4>Links</h4>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h4>Help</h4>
          <Link to="/checkout">Payment Options</Link>
          <Link to="/cart">Returns</Link>
          <Link to="/account">Account</Link>
        </div>

        <div>
          <h4>Newsletter</h4>
          <form className="footer-form" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">
              Subscribe
              <Icon name="spark" size={16} />
            </button>
          </form>
        </div>
      </div>
      <p className="copyright">2026 Electric Point. All rights reserved.</p>
    </footer>
  );
}

export default SiteFooter;
