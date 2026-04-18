import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ServiceStrip from "../components/ServiceStrip";
import SiteFooter from "../components/SiteFooter";

function Blog() {
  const posts = [
    {
      title: "Gain reliability with minimal panel design",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1100&q=80",
    },
    {
      title: "Exploring safe ways of decorating cable runs",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1100&q=80",
    },
    {
      title: "Handmade labels that took time to make",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=80",
    },
  ];

  return (
    <main>
      <PageHero title="Blog" />

      <section className="blog-page-layout wide-grid">
        <div className="blog-list">
          {posts.map((post) => (
            <article className="blog-post" key={post.title}>
              <img src={post.image} alt={post.title} />
              <div className="post-meta">Admin / 18 Apr 2026 / Electrical</div>
              <h2>{post.title}</h2>
              <p>
                Learn simple ways to choose electrical components, organize
                wiring, and keep everyday installations neat and dependable.
              </p>
              <Link className="text-link" to="/blog">
                Read more
              </Link>
            </article>
          ))}

          <div className="pagination">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
          </div>
        </div>

        <aside className="blog-sidebar">
          <input type="search" placeholder="Search" />
          <h3>Categories</h3>
          <p>Switchgear <span>4</span></p>
          <p>Wiring <span>6</span></p>
          <p>Protection <span>8</span></p>
          <p>Tools <span>5</span></p>
          <h3>Recent Posts</h3>
          {posts.map((post) => (
            <article className="recent-post" key={post.title}>
              <img src={post.image} alt={post.title} />
              <span>{post.title}</span>
            </article>
          ))}
        </aside>
      </section>

      <ServiceStrip />
      <SiteFooter />
    </main>
  );
}

export default Blog;
