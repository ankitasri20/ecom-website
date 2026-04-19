import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ServiceStrip from "../components/ServiceStrip";
import SiteFooter from "../components/SiteFooter";
import { products } from "../data/products";

function Home() {
  const productHighlights = [
    {
      name: "Smart switch boards",
      detail: "Modern control for lights, fans, and compact devices.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Breaker protection",
      detail: "Fast trip safety for home and shop installations.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const posts = [
    {
      title: "Choosing safe wiring for new rooms",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "How to test a circuit before load",
      image:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Panel parts that make repairs faster",
      image:
        "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">New arrival</p>
          <h1>Smart electric essentials</h1>
          <p>
            Trusted switches, tools, wiring, and protection devices for homes,
            shops, and fast electrical repairs in Patna.
          </p>
          <Link className="btn btn-primary" to="/shop">
            Shop now
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1400&q=80"
          alt="Electrical tools and components"
        />
      </section>

      <section className="wide-grid feature-grid" aria-label="Featured categories">
        {productHighlights.map((item) => (
          <article className="feature-tile" key={item.name}>
            <img src={item.image} alt={item.name} />
            <div>
              <h2>{item.name}</h2>
              <Link className="text-link" to="/shop">
                View more
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="section-block wide-grid">
        <div className="section-heading">
          <p className="eyebrow">Top picks for you</p>
          <h2>Reliable parts for every repair</h2>
        </div>

        <div className="product-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard product={product} key={product.name} />
          ))}
        </div>
        <Link className="view-more" to="/shop">
          View more
        </Link>
      </section>

      <section className="info-section wide-grid">
        <div>
          <p className="eyebrow">About Electric Point</p>
          <h2>Electrical products selected for safer everyday work</h2>
        </div>
        <div>
          <p>
            We focus on practical electrical supplies that technicians,
            homeowners, and small businesses need often: switches, wiring,
            breakers, testing tools, lighting accessories, and installation
            essentials.
          </p>
          <div className="info-stats">
            <span>
              <strong>24+</strong>
              Product types
            </span>
            <span>
              <strong>90</strong>
              Day returns
            </span>
            <span>
              <strong>Patna</strong>
              Local support
            </span>
          </div>
        </div>
      </section>

      <section className="promo-band">
        <img
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80"
          alt="Copper wiring supplies"
        />
        <div>
          <p className="eyebrow">New arrival</p>
          <h2>Wiring starter kit</h2>
          <Link className="btn btn-secondary" to="/shop">
            Order now
          </Link>
        </div>
      </section>

      <section className="section-block wide-grid">
        <div className="section-heading">
          <h2>Our blog</h2>
          <p>Practical electrical notes for safe, clean installation work.</p>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <article className="blog-card" key={post.title}>
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
              <p>Read more</p>
            </article>
          ))}
        </div>
        <Link className="view-more" to="/blog">
          View all posts
        </Link>
      </section>

      <section className="cta-section wide-grid">
        <div>
          <p className="eyebrow">Need bulk electrical supplies?</p>
          <h2>Get dependable components for your next installation.</h2>
        </div>
        <Link className="btn btn-primary" to="/contact">
          Talk to us
        </Link>
      </section>

      <section className="instagram-strip">
        <p className="eyebrow">Follow us</p>
        <h2>Our Instagram</h2>
        <Link className="btn btn-secondary" to="/contact">
          Follow us
        </Link>
      </section>

      <ServiceStrip />
      <SiteFooter />
    </main>
  );
}

export default Home;
