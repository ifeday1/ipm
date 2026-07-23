import { CONTACT } from "../data/content";
import SocialLinks from "./SocialLinks";

function waLink(number) {
  const digits = number.replace(/[^\d]/g, "");
  const intl = digits.replace(/^0/, "234");
  return `https://wa.me/${intl}`;
}

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Contact</div>
          <h2>Get in touch.</h2>
        </div>
        <div className="contact-grid">
          <div className="card reveal">
            <div className="stub-label">Phone</div>
            <a className="stub-value link" href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a>
          </div>
          <div className="card reveal" style={{ transitionDelay: "60ms" }}>
            <div className="stub-label">Email &amp; Booking</div>
            <a className="stub-value link" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
          <div className="card reveal" style={{ transitionDelay: "120ms" }}>
            <div className="stub-label">WhatsApp</div>
            <a
              className="stub-value link"
              href={waLink(CONTACT.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACT.whatsapp}
            </a>
          </div>
        </div>
        <SocialLinks />
      </div>
    </section>
  );
}
