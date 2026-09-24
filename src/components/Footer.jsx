import { MINISTRY, FEATURED_EVENT } from "../data/content";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-row">
        <img src={MINISTRY.logoWhite} alt={MINISTRY.name} className="foot-logo" />
        <div className="foot-links">
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          <Link to="/gallery">Gallery</Link>
          <a href={FEATURED_EVENT.replayUrl} target="_blank" rel="noopener noreferrer">Watch Replay</a>
          <Link to="/contact">Contact</Link>
        </div>
        <SocialLinks className="social-row footer-social" />
      </div>
      <div className="wrap foot-copy-row">
        <span>© {new Date().getFullYear()} {MINISTRY.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
