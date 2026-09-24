import { Link } from "react-router-dom";
import { ABOUT, MINISTRY } from "../data/content";

export default function AboutTeaser() {
  return (
    <section className="section">
      <div className="wrap about-grid">
        <div className="reveal">
          <div className="eyebrow">Who we are</div>
          <h2>{MINISTRY.name}.</h2>
          <p className="lead">{ABOUT.intro}</p>
          <div className="cta-row">
            <Link to="/about" className="btn ghost">More about IPM</Link>
          </div>
        </div>
        <div className="about-image reveal">
          <img src="/assets/iig9/korede-05.jpg" alt="Korede Emmanuel ministering with the IPM choir" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
