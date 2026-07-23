import { useState } from "react";
import { EVENTS } from "../data/content";

function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function Events() {
  const [tab, setTab] = useState("upcoming");
  const list = tab === "upcoming" ? EVENTS.upcoming : EVENTS.past;

  return (
    <section className="section" id="events">
      <div className="wrap">
        <div className="section-head events-head reveal">
          <div>
            <div className="eyebrow">Events</div>
            <h2>Every event becomes part of our history.</h2>
          </div>
          <div className="tab-switch">
            <button className={tab === "upcoming" ? "active" : ""} onClick={() => setTab("upcoming")}>
              Upcoming
            </button>
            <button className={tab === "past" ? "active" : ""} onClick={() => setTab("past")}>
              Past
            </button>
          </div>
        </div>

        <div className="events-list">
          {list.length === 0 && <div className="empty-state">No {tab} events listed yet.</div>}
          {list.map((e) => (
            <div className="event-row reveal" key={e.title + e.date}>
              <div className="event-date">{formatDate(e.date)}</div>
              <div className="event-info">
                <h3>{e.title}</h3>
                <p>
                  {e.location} — {e.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
