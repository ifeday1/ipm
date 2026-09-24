import { MISSION, VISION } from "../data/content";

export default function Mission() {
  return (
    <section className="section mission" id="mission">
      <div className="wrap">
        <div className="mission-row">
          <div className="mission-text">
            <div className="eyebrow">Our mission</div>
            <p className="mission-statement reveal">{MISSION}</p>
          </div>
          <div className="mission-image reveal">
            <img src="/assets/iig9/mission.jpg" alt="Worshippers raising their phone lights in praise at The Almighty" loading="lazy" />
          </div>
        </div>
        <div className="mission-row reverse">
          <div className="mission-vision reveal">
            <div className="eyebrow">Our vision</div>
            <p>{VISION}</p>
          </div>
          <div className="mission-image reveal">
            <img src="/assets/iig9/vision.jpg" alt="A young worshipper praising God with her hands raised" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
