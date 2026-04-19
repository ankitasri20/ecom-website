import PageHero from "../components/PageHero";
import ServiceStrip from "../components/ServiceStrip";
import SiteFooter from "../components/SiteFooter";
import Icon from "../components/Icon";
import { products } from "../data/products";

function Checkout() {
  const product = products[0];

  return (
    <main>
      <PageHero title="Checkout" />

      <section className="checkout-layout wide-grid">
        <form className="panel-form checkout-form" onSubmit={(event) => event.preventDefault()}>
          <h2>Billing details</h2>
          <div className="two-fields">
            <label>
              First Name
              <input type="text" />
            </label>
            <label>
              Last Name
              <input type="text" />
            </label>
          </div>
          <label>
            Company Name (Optional)
            <input type="text" />
          </label>
          <label>
            Country / Region
            <select defaultValue="India">
              <option>India</option>
              <option>United States</option>
            </select>
          </label>
          <label>
            Street address
            <input type="text" />
          </label>
          <label>
            Town / City
            <input type="text" />
          </label>
          <label>
            Province
            <select defaultValue="Delhi">
              <option>Delhi</option>
              <option>Maharashtra</option>
            </select>
          </label>
          <label>
            ZIP code
            <input type="text" />
          </label>
          <label>
            Phone
            <input type="tel" />
          </label>
          <label>
            Email address
            <input type="email" />
          </label>
          <input type="text" placeholder="Additional information" />
        </form>

        <aside className="order-panel">
          <div className="secure-note">
            <Icon name="lock" />
            Secure checkout
          </div>
          <div className="order-head">
            <h3>Product</h3>
            <h3>Subtotal</h3>
          </div>
          <p>
            <span>{product.name} x 1</span>
            <strong>{product.price}</strong>
          </p>
          <p>
            <span>Subtotal</span>
            <strong>{product.price}</strong>
          </p>
          <p className="order-total">
            <span>Total</span>
            <strong>{product.price}</strong>
          </p>
          <label className="check-line">
            <input type="radio" name="payment" defaultChecked />
            Direct Bank Transfer
          </label>
          <p>
            Make your payment directly into our bank account. Your order will
            not ship until the funds have cleared.
          </p>
          <label className="check-line">
            <input type="radio" name="payment" />
            Cash On Delivery
          </label>
          <button className="btn btn-secondary" type="button">
            <Icon name="lock" size={18} />
            Place order
          </button>
        </aside>
      </section>

      <ServiceStrip />
      <SiteFooter />
    </main>
  );
}

export default Checkout;
