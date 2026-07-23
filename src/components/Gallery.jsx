import { useState } from "react";
import { GALLERY } from "../data/content";

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="section" id="gallery">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Photo gallery</div>
          <h2>Moments from past events.</h2>
        </div>
        <div className="gallery-grid">
          {GALLERY.map((g, i) => (
            <figure
              className={"gallery-item reveal" + (g.wide ? " wide" : "")}
              key={i}
              onClick={() => setActive(g)}
            >
              <img src={g.src} alt={g.caption} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="lightbox-close" aria-label="Close">&times;</button>
          <img src={active.src} alt={active.caption} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
