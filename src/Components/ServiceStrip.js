import Icon from "./Icon";

function ServiceStrip() {
  const services = [
    {
      icon: "delivery",
      title: "Free Delivery",
      text: "For orders over Rs. 500 across selected city areas.",
    },
    {
      icon: "return",
      title: "90 Days Return",
      text: "Easy returns on unused electrical components.",
    },
    {
      icon: "lock",
      title: "Secure Payment",
      text: "Protected checkout for every parts order.",
    },
  ];

  return (
    <section className="service-strip">
      {services.map((service) => (
        <article key={service.title}>
          <span className="service-icon">
            <Icon name={service.icon} />
          </span>
          <div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default ServiceStrip;
