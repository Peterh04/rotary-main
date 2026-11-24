import Button from "../components/Button.jsx";
import "../styles/CtaBanner.css";

/** Full-width blue call to action that sits above the footer. */
export default function CtaBanner({ title, text, button }) {
  return (
    <section className="cta-banner" aria-labelledby="cta-title">
      <div className="container cta-banner__inner">
        <div>
          <h2 id="cta-title" className="cta-banner__title">
            {title}
          </h2>
          <p className="cta-banner__text">{text}</p>
        </div>
        <Button to={button.to}>{button.label}</Button>
      </div>
    </section>
  );
}
