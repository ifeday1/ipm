import { useState } from "react";
import { IIG9_PHOTOS } from "../data/content";

const INITIAL_COUNT = 10;

export default function AlmightyPhotos() {
  const [active, setActive] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const { moments, host, ministers } = IIG9_PHOTOS;
  const visibleMoments = showAll ? moments : moments.slice(0, INITIAL_COUNT);
  const hiddenCount = moments.length - INITIAL_COUNT;

  return (
    <section className="section" id="almighty-photos">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Immortal Invisible God 9.0</div>
          <h2>Moments from The Almighty.</h2>
        </div>
        <div className="gallery-grid">
          {visibleMoments.map((g, i) => (
            <figure
              // Photos revealed by "View more" mount after the scroll observer runs, so skip the fade-in.
              className={"gallery-item" + (i < INITIAL_COUNT ? " reveal" : "") + (g.wide ? " wide" : "")}
              key={i}
              onClick={() => setActive(g)}
            >
              <img src={g.src} alt={g.caption} loading="lazy" />
            </figure>
          ))}
        </div>
        {hiddenCount > 0 && (
          <div className="view-more-row">
            <button className="btn ghost" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show less" : `View more (${hiddenCount} more photos)`}
            </button>
          </div>
        )}

        <h3 className="photos-subhead reveal">Korede Emmanuel</h3>
        <div className="host-grid">
          {host.map((g, i) => (
            <figure className="gallery-item reveal" key={i} onClick={() => setActive(g)}>
              <img src={g.src} alt={g.caption} loading="lazy" />
            </figure>
          ))}
        </div>

        <h3 className="photos-subhead reveal">Guest Ministers</h3>
        <div className="minister-grid">
          {ministers.map((m, i) => (
            <figure
              className="minister-card reveal"
              key={i}
              onClick={() => setActive({ src: m.src, caption: m.name })}
            >
              <div className="gallery-item">
                <img src={m.src} alt={m.name} loading="lazy" />
              </div>
              <figcaption>{m.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="lightbox-close" aria-label="Close">&times;</button>
          <img src={active.src} alt={active.caption} onClick={(e) => e.stopPropagation()} />
          <p className="lightbox-caption">{active.caption}</p>
        </div>
      )}
    </section>
  );
}
