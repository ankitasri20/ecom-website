import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ServiceStrip from "../components/ServiceStrip";
import SiteFooter from "../components/SiteFooter";
import Icon from "../components/Icon";
import { products } from "../data/products";

function Product() {
  const [cartOpen, setCartOpen] = useState(false);
  const product = products[0];
  const gallery = products.slice(0, 4);

  return (
    <main>
      <section className="product-detail wide-grid">
        <div className="breadcrumb">Home / Shop / {product.name}</div>
        <div className="product-main">
          <div className="product-thumbs">
            {gallery.map((item) => (
              <img src={item.image} alt={item.name} key={item.name} />
            ))}
          </div>

          <img className="product-hero-image" src={product.image} alt={product.name} />

          <div className="product-summary">
            <h1>{product.name}</h1>
            <p className="product-price">{product.price}</p>
            <div className="stars">star star star star star</div>
            <p>
              A clean, durable electrical component for modern homes, offices,
              and compact commercial repairs.
            </p>
            <div className="color-dots">
              <span className="blue" />
              <span className="black" />
              <span className="gold" />
            </div>
            <div className="buy-row">
              <input type="number" min="1" defaultValue="1" />
              <button className="btn btn-secondary" onClick={() => setCartOpen(true)}>
                <Icon name="cart" size={18} />
                Add To Cart
              </button>
            </div>
            <dl className="product-meta">
              <div>
                <dt>SKU</dt>
                <dd>EP-SW-001</dd>
              </div>
              <div>
                <dt>Category</dt>
                <dd>{product.category}</dd>
              </div>
              <div>
                <dt>Tags</dt>
                <dd>Switch, Smart, Wiring</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="product-tabs wide-grid">
        <nav>
          <button>Description</button>
          <button>Additional Information</button>
          <button>Reviews [5]</button>
        </nav>
        <p>
          Built for dependable daily use, this component supports neat wiring,
          stable contact, and quick replacement during electrical maintenance.
          Use it for residential switchboards, repair kits, or shop inventory.
        </p>
        <div className="tab-images">
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80"
            alt="Electrical wiring supplies"
          />
          <img
            src="https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?auto=format&fit=crop&w=900&q=80"
            alt="Technician wiring a panel"
          />
        </div>
      </section>

      <section className="section-block wide-grid">
        <div className="section-heading">
          <h2>Related Products</h2>
        </div>
        <div className="product-grid">
          {products.slice(1, 5).map((item) => (
            <ProductCard product={item} key={item.name} />
          ))}
        </div>
        <Link className="view-more" to="/shop">
          View more
        </Link>
      </section>

      {cartOpen && (
        <div className="cart-drawer-wrap">
          <button
            aria-label="Close shopping cart"
            className="drawer-backdrop"
            onClick={() => setCartOpen(false)}
          />
          <aside className="cart-drawer">
            <button className="drawer-close" onClick={() => setCartOpen(false)}>
              x
            </button>
            <h2>
              <Icon name="cart" />
              Shopping Cart
            </h2>
            <div className="drawer-item">
              <img src={product.image} alt={product.name} />
              <div>
                <p>{product.name}</p>
                <span>1 x {product.price}</span>
              </div>
            </div>
            <p className="drawer-total">
              <span>Subtotal</span>
              <strong>{product.price}</strong>
            </p>
            <div className="drawer-actions">
              <Link to="/cart">Cart</Link>
              <Link to="/checkout">Checkout</Link>
            </div>
          </aside>
        </div>
      )}

      <ServiceStrip />
      <SiteFooter />
    </main>
  );
}

export default Product;
