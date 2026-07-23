import { SUPPORT } from "../data/content";

export default function Support() {
  return (
    <section className="section support" id="support">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Support the vision</div>
          <h2>Partner with what God is doing here.</h2>
          <p className="lead">{SUPPORT.intro}</p>
        </div>
        <div className="support-grid">
          {SUPPORT.categories.map((c, i) => (
            <div className="card reveal" style={{ transitionDelay: `${i * 80}ms` }} key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
        <div className="giving-box reveal">
          <div className="stub-label">Account name</div>
          <div className="stub-value">{SUPPORT.bankDetails.accountName}</div>
          <div className="stub-label">Bank</div>
          <div className="stub-value">{SUPPORT.bankDetails.bankName}</div>
          <div className="stub-label">Account number</div>
          <div className="stub-value">{SUPPORT.bankDetails.accountNumber}</div>
        </div>
      </div>
    </section>
  );
}
