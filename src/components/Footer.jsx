import { MINISTRY, REGISTER } from "../data/content";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-row">
        <img src={MINISTRY.logoWhite} alt={MINISTRY.name} className="foot-logo" />
        <div className="foot-links">
          <a href="#about">About</a>
          <a href="#events">Events</a>
          <a href={REGISTER.url} target="_blank" rel="noopener noreferrer">{REGISTER.ctaLabel}</a>
          <a href="#contact">Contact</a>
        </div>
        <SocialLinks className="social-row footer-social" />
      </div>
      <div className="wrap foot-copy-row">
        <span>© {new Date().getFullYear()} {MINISTRY.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
