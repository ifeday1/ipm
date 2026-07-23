import { LEADER } from "../data/content";

export default function Leader() {
  return (
    <section className="section" id="leader">
      <div className="wrap leader-grid">
        <div className="leader-image reveal">
          <img src={LEADER.image} alt={LEADER.name} />
        </div>
        <div className="reveal">
          <div className="eyebrow">Meet the leader</div>
          <h2>{LEADER.name}</h2>
          <div className="tag">{LEADER.role}</div>
          <p>{LEADER.bio}</p>
        </div>
      </div>
    </section>
  );
}
