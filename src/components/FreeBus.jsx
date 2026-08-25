import { FREE_BUS, FEATURED_EVENT } from "../data/content";

export default function FreeBus() {
  return (
    <section className="section free-bus" id="free-bus">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">{FREE_BUS.eyebrow}</div>
          <h2>{FREE_BUS.title}</h2>
          <p className="lead">{FREE_BUS.intro}</p>
        </div>

        <div className="bus-grid">
          <div className="bus-flyer reveal">
            <img src={FREE_BUS.flyerImage} alt="Free Bus Movement — pick-up points and registration" />
          </div>

          <div className="bus-side reveal">
            <div className="bus-cta">
              <a href={FREE_BUS.registerUrl} target="_blank" rel="noopener noreferrer" className="btn">
                Register Your Seat
              </a>
              <span className="bus-note">
                Entry is free · Bus transport is free · Sponsorship: {FEATURED_EVENT.sponsorshipPhone}
              </span>
            </div>

            <div className="bus-list">
              {FREE_BUS.stops.map((stop) => (
                <div className="bus-row" key={stop.location}>
                  <div className="bus-location">{stop.location}</div>
                  <div className="bus-contact">
                    {stop.name} —{" "}
                    <a className="bus-phone" href={`tel:${stop.phone}`}>
                      {stop.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
