import { useState } from "react";
import { FAQS } from "../data/content";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Good to know</div>
          <h2>Frequently asked questions.</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={"faq-item reveal" + (isOpen ? " open" : "")} key={i}>
                <button className="faq-question" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && <div className="faq-answer">{item.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
