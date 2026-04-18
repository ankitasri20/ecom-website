import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ServiceStrip from "../components/ServiceStrip";
import SiteFooter from "../components/SiteFooter";

function MyAccount() {
  return (
    <main>
      <PageHero title="My Account" />

      <section className="account-layout wide-grid">
        <form className="panel-form" onSubmit={(event) => event.preventDefault()}>
          <h2>Log In</h2>
          <label>
            Username or email address
            <input type="email" />
          </label>
          <label>
            Password
            <input type="password" />
          </label>
          <label className="check-line">
            <input type="checkbox" />
            Remember me
          </label>
          <div className="form-actions">
            <button className="btn btn-secondary" type="submit">
              Log In
            </button>
            <Link to="/account">Lost your password?</Link>
          </div>
        </form>

        <form className="panel-form" onSubmit={(event) => event.preventDefault()}>
          <h2>Register</h2>
          <label>
            Email address
            <input type="email" />
          </label>
          <p>
            A password will be sent to your email address. Your personal data
            will be used to support your experience on this website.
          </p>
          <button className="btn btn-secondary" type="submit">
            Register
          </button>
        </form>
      </section>

      <ServiceStrip />
      <SiteFooter />
    </main>
  );
}

export default MyAccount;
