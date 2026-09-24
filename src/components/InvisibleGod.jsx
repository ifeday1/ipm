import { Link } from "react-router-dom";
import { FEATURED_EVENT } from "../data/content";

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

          {e.concluded && (
            <p className="ig-status">This event has concluded — thank you to everyone who came out. The full ministration is now up on YouTube.</p>
          )}

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

          <div className="cta-row">
            <a href={e.replayUrl} target="_blank" rel="noopener noreferrer" className="btn">
              Watch the Replay
            </a>
            <Link to="/gallery" className="btn ghost">
              See the Photos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
