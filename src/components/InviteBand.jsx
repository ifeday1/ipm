import { Link } from "react-router-dom";

export default function InviteBand() {
  return (
    <section className="invite-band">
      <div className="invite-band-bg" style={{ backgroundImage: "url(/assets/iig9/moment-06.jpg)" }} aria-hidden="true"></div>
      <div className="invite-band-scrim" aria-hidden="true"></div>
      <div className="wrap invite-band-inner reveal">
        <div className="eyebrow">Invite IPM</div>
        <h2>Bring the sound of praise to your event.</h2>
        <p className="lead">IPM ministers at worship concerts, conferences, crusades, camp meetings and gospel events.</p>
        <div className="cta-row">
          <Link to="/contact" className="btn">Invite the ministry</Link>
          <Link to="/contact#support" className="btn ghost">Support the ministry</Link>
        </div>
      </div>
    </section>
  );
}
