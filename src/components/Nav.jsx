import { useState, useEffect } from "react";
import { MINISTRY, REGISTER } from "../data/content";

const LINKS = [
  ["Almighty 9.0", "#invisible-god"],
  ["About", "#about"],
  ["Mission", "#mission"],
  ["What We Do", "#what-we-do"],
  ["Events", "#events"],
  ["Gallery", "#gallery"],
  ["Testimonials", "#testimonials"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-brand" onClick={() => setOpen(false)}>
          <img src={MINISTRY.logoWhite} alt={MINISTRY.name} />
        </a>
        <nav className="nav-links">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-right">
          <a href={REGISTER.url} target="_blank" rel="noopener noreferrer" className="btn nav-register">
            {REGISTER.ctaLabel}
          </a>
          <button
            className={"nav-burger" + (open ? " open" : "")}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <div className={"nav-mobile" + (open ? " open" : "")}>
        {LINKS.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a href={REGISTER.url} target="_blank" rel="noopener noreferrer" className="btn full" onClick={() => setOpen(false)}>
          {REGISTER.ctaLabel}
        </a>
      </div>
    </header>
  );
}
