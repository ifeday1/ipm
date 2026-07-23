import { MISSION, VISION } from "../data/content";

export default function Mission() {
  return (
    <section className="section mission" id="mission">
      <div className="wrap">
        <div className="eyebrow">Our mission</div>
        <p className="mission-statement reveal">{MISSION}</p>
        <div className="mission-vision reveal">
          <div className="eyebrow">Our vision</div>
          <p>{VISION}</p>
        </div>
      </div>
    </section>
  );
}
