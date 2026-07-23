import { MINISTRY, REGISTER } from "../data/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" style={{ backgroundImage: `url(${MINISTRY.heroBackgroundImage})` }} aria-hidden="true"></div>
      <div className="hero-scrim" aria-hidden="true"></div>
      <div className="hero-beam" aria-hidden="true"></div>
      <div className="wrap hero-inner">
        <div className="eyebrow"><span className="pulse-dot"></span>{MINISTRY.scripture} · Worship &amp; Praise</div>
        <h1>
          {MINISTRY.name.split(" ").slice(0, 1).join(" ")}
          <br />
          <em>{MINISTRY.name.split(" ").slice(1).join(" ")}</em>
        </h1>
        <p className="sub">{MINISTRY.tagline}</p>
        <div className="cta-row">
          <a href={MINISTRY.youtubeChannel} target="_blank" rel="noopener noreferrer" className="btn">
            Experience Our Worship
          </a>
          <a href={MINISTRY.youtubeChannel} target="_blank" rel="noopener noreferrer" className="btn ghost">
            Watch Latest Ministration
          </a>
          <a href={REGISTER.url} target="_blank" rel="noopener noreferrer" className="btn ghost">
            {REGISTER.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
