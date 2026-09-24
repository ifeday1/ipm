import { Link } from "react-router-dom";

export default function PageHeader({ eyebrow, title, intro, image, position = "center" }) {
  return (
    <section className="page-header">
      <div
        className="page-header-bg"
        style={{ backgroundImage: `url(${image})`, backgroundPosition: position }}
        aria-hidden="true"
      ></div>
      <div className="page-header-scrim" aria-hidden="true"></div>
      <div className="wrap page-header-inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{eyebrow}</span>
        </nav>
        <h1>{title}</h1>
        {intro && <p className="page-header-intro">{intro}</p>}
      </div>
    </section>
  );
}
