import PageHero from "../components/PageHero";
import ServiceStrip from "../components/ServiceStrip";
import SiteFooter from "../components/SiteFooter";
import Icon from "../components/Icon";

function Contact() {
  return (
    <main>
      <PageHero title="Contact" />

      <section className="contact-layout wide-grid">
        <div className="section-heading">
          <h2>Get In Touch With Us</h2>
          <p>
            For more information about our products and bulk electrical orders,
            reach out to our sales team.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <article>
              <span className="info-icon">
                <Icon name="location" />
              </span>
              <div>
                <h3>Address</h3>
                <p>Electrical Market, Patna</p>
                <p>Bihar, India</p>
              </div>
            </article>
            <article>
              <span className="info-icon">
                <Icon name="phone" />
              </span>
              <div>
                <h3>Phone</h3>
                <p>Mobile: +91 98765 43210</p>
                <p>Hotline: +91 1800 440 7788</p>
              </div>
            </article>
            <article>
              <span className="info-icon">
                <Icon name="clock" />
              </span>
              <div>
                <h3>Working Time</h3>
                <p>Monday-Friday: 9:00 - 20:00</p>
                <p>Saturday-Sunday: 10:00 - 18:00</p>
              </div>
            </article>
          </div>

          <form className="panel-form" onSubmit={(event) => event.preventDefault()}>
            <label>
              Your name
              <input type="text" placeholder="Abc" />
            </label>
            <label>
              Email address
              <input type="email" placeholder="abc@gmail.com" />
            </label>
            <label>
              Subject
              <input type="text" placeholder="This is optional" />
            </label>
            <label>
              Message
              <textarea placeholder="Hi! I'd like to ask about" />
            </label>
            <button className="btn btn-secondary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>

      <ServiceStrip />
      <SiteFooter />
    </main>
  );
}

export default Contact;
