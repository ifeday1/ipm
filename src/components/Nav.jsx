import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { MINISTRY, FEATURED_EVENT } from "../data/content";

const LINKS = [
  ["Home", "/"],
  ["About", "/about"],
  ["Events", "/events"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
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
        <Link to="/" className="nav-brand" onClick={() => setOpen(false)}>
          <img src={MINISTRY.logoWhite} alt={MINISTRY.name} />
        </Link>
        <nav className="nav-links">
          {LINKS.map(([label, to]) => (
            <NavLink key={to} to={to} end>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-right">
          <a href={FEATURED_EVENT.replayUrl} target="_blank" rel="noopener noreferrer" className="btn nav-register">
            Watch Replay
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
        {LINKS.map(([label, to]) => (
          <NavLink key={to} to={to} end onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
        <a href={FEATURED_EVENT.replayUrl} target="_blank" rel="noopener noreferrer" className="btn full" onClick={() => setOpen(false)}>
          Watch Replay
        </a>
      </div>
    </header>
  );
}
