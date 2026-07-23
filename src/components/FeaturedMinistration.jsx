import { MINISTRY, MINISTRATIONS } from "../data/content";

export default function FeaturedMinistration() {
  return (
    <section className="section" id="featured">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Featured ministrations</div>
          <h2>Step into the worship.</h2>
        </div>
        <div className="ministrations-grid">
          {MINISTRATIONS.map((m, i) => (
            <a
              href={m.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ministration-card reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
              key={m.title}
            >
              <div className="ministration-image">
                <img src={m.image} alt={m.title} />
                <span className="play-badge" aria-hidden="true">▶</span>
              </div>
              <div className="tag">{m.tag}</div>
              <h3>{m.title}</h3>
              <span className="ministration-link">{m.linkLabel} →</span>
            </a>
          ))}
        </div>
        <a href={MINISTRY.youtubeChannel} target="_blank" rel="noopener noreferrer" className="featured-channel-link">
          Watch more on our YouTube channel →
        </a>
      </div>
    </section>
  );
}
