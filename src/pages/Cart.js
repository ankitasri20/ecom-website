import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ServiceStrip from "../components/ServiceStrip";
import SiteFooter from "../components/SiteFooter";
import Icon from "../components/Icon";
import { products } from "../data/products";

function Cart() {
  const item = products[0];

  return (
    <main>
      <PageHero title="Cart" />

      <section className="cart-layout wide-grid">
        <div className="cart-table">
          <div className="cart-head">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
          <div className="cart-row">
            <div className="cart-product">
              <img src={item.image} alt={item.name} />
              <span>{item.name}</span>
            </div>
            <span>{item.price}</span>
            <input type="number" min="1" defaultValue="1" />
            <strong>{item.price}</strong>
          </div>
        </div>

        <aside className="cart-total">
          <h2>Cart Totals</h2>
          <p>
            <span>Subtotal</span>
            <strong>{item.price}</strong>
          </p>
          <p>
            <span>Total</span>
            <strong>{item.price}</strong>
          </p>
          <Link className="btn btn-secondary" to="/checkout">
            <Icon name="lock" size={18} />
            Check Out
          </Link>
        </aside>
      </section>

      <ServiceStrip />
      <SiteFooter />
    </main>
  );
}

export default Cart;
