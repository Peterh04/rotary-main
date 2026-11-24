import "../styles/PartnersStrip.css";

/** Slim line of partner names. Swap the names for logos when you have them. */
export default function PartnersStrip({ label = "Working with", partners }) {
  return (
    <div className="partners-strip">
      <p className="partners-strip__label">{label}</p>
      <ul className="partners-strip__list">
        {partners.map((partner) => (
          <li key={partner}>{partner}</li>
        ))}
      </ul>
    </div>
  );
}
