import { ABOUT, MINISTRY } from "../data/content";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <div className="reveal">
          <div className="eyebrow">Who we are</div>
          <h2>About {MINISTRY.name}.</h2>
          <p className="lead">{ABOUT.intro}</p>
          <p>{ABOUT.body}</p>
        </div>
        <div className="about-image reveal">
          <img src={ABOUT.image} alt="Immortal Praise Ministry in worship" />
        </div>
      </div>
    </section>
  );
}
