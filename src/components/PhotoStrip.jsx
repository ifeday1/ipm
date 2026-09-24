import { Link } from "react-router-dom";
import { IIG9_PHOTOS } from "../data/content";

const PICKS = [0, 1, 2, 4, 9];

export default function PhotoStrip() {
  const photos = PICKS.map((i) => IIG9_PHOTOS.moments[i]);
  return (
    <section className="section photo-strip-section">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Immortal Invisible God 9.0</div>
          <h2>A night with The Almighty.</h2>
        </div>
        <div className="photo-strip">
          {photos.map((p, i) => (
            <Link to="/gallery" className={"photo-strip-item reveal" + (i === 0 ? " big" : "")} key={p.src}>
              <img src={p.src} alt={p.caption} loading="lazy" />
            </Link>
          ))}
        </div>
        <div className="view-more-row">
          <Link to="/gallery" className="btn">View the full gallery</Link>
        </div>
      </div>
    </section>
  );
}
