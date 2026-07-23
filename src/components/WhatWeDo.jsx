import { WHAT_WE_DO } from "../data/content";

const ICONS = {
  note: (
    <path d="M20 4v20.5a5 5 0 1 1-2-4V9l-10 2v13.5a5 5 0 1 1-2-4V6l14-3z" />
  ),
  mic: (
    <path d="M16 2a4 4 0 0 0-4 4v10a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4zM8 14a8 8 0 0 0 16 0M16 26v4M11 30h10" />
  ),
  globe: (
    <path d="M16 2a14 14 0 1 0 0 28 14 14 0 0 0 0-28zM2 16h28M16 2c4 4 6 9 6 14s-2 10-6 14c-4-4-6-9-6-14s2-10 6-14z" />
  ),
  disc: <path d="M16 2a14 14 0 1 0 0 28 14 14 0 0 0 0-28zM16 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />,
  book: (
    <path d="M4 6a2 2 0 0 1 2-2h9v24H6a2 2 0 0 1-2-2V6zM28 6a2 2 0 0 0-2-2h-9v24h9a2 2 0 0 0 2-2V6z" />
  ),
  hands: (
    <path d="M4 18l6-6 6 4 6-8 6 6M4 18v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-6" />
  ),
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 32 32" className="wwd-icon" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

export default function WhatWeDo() {
  return (
    <section className="section" id="what-we-do">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">What we do</div>
          <h2>Praise, in every form.</h2>
        </div>
        <div className="wwd-grid">
          {WHAT_WE_DO.map((item, i) => (
            <div className="wwd-card reveal" style={{ transitionDelay: `${(i % 3) * 80}ms` }} key={item.title}>
              <Icon name={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
