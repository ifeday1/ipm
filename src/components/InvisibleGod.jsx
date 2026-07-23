import { FEATURED_EVENT, REGISTER } from "../data/content";

export default function InvisibleGod() {
  const e = FEATURED_EVENT;
  return (
    <section className="section invisible-god" id="invisible-god">
      <div className="wrap ig-grid">
        <div className="ig-flyer reveal">
          <img src={e.flyerImage} alt={`${e.series} — ${e.title}`} />
        </div>
        <div className="ig-details reveal">
          <div className="eyebrow">{e.series}</div>
          <h2>{e.title}</h2>
          <p className="lead">Hosted by {e.host}.</p>

          <div className="ig-facts">
            <div>
              <div className="stub-label">Date</div>
              <div className="stub-value">{e.date}</div>
            </div>
            <div>
              <div className="stub-label">Red carpet</div>
              <div className="stub-value">{e.redCarpetTime}</div>
            </div>
            <div>
              <div className="stub-label">Main event</div>
              <div className="stub-value">{e.mainEventTime}</div>
            </div>
            <div>
              <div className="stub-label">Venue</div>
              <div className="stub-value">{e.venue}, {e.location}</div>
            </div>
          </div>

          <div className="ig-tags">
            <span>{e.entry}</span>
            <span>{e.bus}</span>
          </div>

          <div className="cta-row">
            <a href={REGISTER.url} target="_blank" rel="noopener noreferrer" className="btn">
              Register
            </a>
            <a href={`tel:${e.sponsorshipPhone}`} className="btn ghost">
              Sponsorship: {e.sponsorshipPhone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
