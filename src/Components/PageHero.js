function PageHero({ title, crumb }) {
  return (
    <section className="page-hero">
      <div>
        <p className="mark">Electric Point</p>
        <h1>{title}</h1>
        <p>Home / {crumb || title}</p>
      </div>
    </section>
  );
}

export default PageHero;
