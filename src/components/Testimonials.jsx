import { TESTIMONIALS } from "../data/content";

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Testimonials</div>
          <h2>How God has used this ministry.</h2>
        </div>
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="testimonial-card reveal" style={{ transitionDelay: `${i * 80}ms` }} key={i}>
              <p>"{t.quote}"</p>
              <div className="testimonial-name">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
