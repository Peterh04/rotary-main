import "../styles/PageHeader.css";

/** Title block at the top of inner pages: eyebrow, big title and an intro line. */
export default function PageHeader({ eyebrow, title, text }) {
  return (
    <header className="page-header">
      <div className="container">
        <div className="page-header__inner">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="page-header__title">{title}</h1>
          {text && <p className="page-header__text">{text}</p>}
        </div>
      </div>
    </header>
  );
}
