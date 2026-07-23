import { CONTACT } from "../data/content";

const ICONS = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M16 3h-3a5 5 0 0 0-5 5v3H5v4h3v9h4v-9h3.5l.5-4H12V8a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  ),
};

export default function SocialLinks({ className = "social-row" }) {
  return (
    <div className={className}>
      <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
        {ICONS.instagram}
      </a>
      <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
        {ICONS.facebook}
      </a>
      <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
        {ICONS.youtube}
      </a>
    </div>
  );
}
