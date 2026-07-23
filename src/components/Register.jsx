import { REGISTER, CONTACT } from "../data/content";

export default function Register() {
  return (
    <section className="section register" id="register">
      <div className="wrap">
        <div className="register-card reveal">
          <div className="eyebrow">Register</div>
          <h2>{REGISTER.title}</h2>
          <p className="lead">{REGISTER.subtitle}</p>
          <a href={REGISTER.url} target="_blank" rel="noopener noreferrer" className="btn">
            {REGISTER.buttonLabel}
          </a>
          <p className="form-note">
            Looking to invite IPM to your own event instead? Reach us at{" "}
            <a href={`mailto:${CONTACT.bookingEmail}`}>{CONTACT.bookingEmail}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
