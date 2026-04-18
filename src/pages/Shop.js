import PageHero from "../components/PageHero";
import ProductCard from "../components/ProductCard";
import ServiceStrip from "../components/ServiceStrip";
import SiteFooter from "../components/SiteFooter";
import Icon from "../components/Icon";
import { products } from "../data/products";

function Shop() {
  return (
    <main>
      <PageHero title="Shop" />

      <section className="shop-toolbar wide-grid">
        <div>
          <button>
            <Icon name="filter" size={18} />
            Filter
          </button>
          <span>Showing 1-12 of 24 results</span>
        </div>
        <div>
          <label>
            Show
            <select defaultValue="12">
              <option>12</option>
              <option>24</option>
            </select>
          </label>
          <label>
            Sort by
            <select defaultValue="default">
              <option value="default">Default</option>
              <option>Price</option>
              <option>Newest</option>
            </select>
          </label>
        </div>
      </section>

      <section className="section-block wide-grid">
        <div className="product-grid product-grid-shop">
          {products.map((product) => (
            <ProductCard product={product} key={product.name} />
          ))}
        </div>

        <div className="pagination">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>Next</button>
        </div>
      </section>

      <ServiceStrip />
      <SiteFooter />
    </main>
  );
}

export default Shop;
