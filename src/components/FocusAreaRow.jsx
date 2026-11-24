import "../styles/FocusAreaRow.css";

/** One numbered row in the focus areas list. */
export default function FocusAreaRow({ number, title, text }) {
  return (
    <div className="focus-row">
      <span className="focus-row__number">{number}</span>
      <div>
        <h3 className="focus-row__title">{title}</h3>
        <p className="focus-row__text">{text}</p>
      </div>
    </div>
  );
}
