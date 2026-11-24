import Reveal from "../components/Reveal.jsx";
import "../styles/Timeline.css";

/** Vertical list of dated entries. items: [{ label, text }] */
export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item, index) => (
        <Reveal
          as="li"
          key={item.label}
          delay={index * 0.08}
          className="timeline__item"
        >
          <span className="timeline__label">{item.label}</span>
          <p className="timeline__text">{item.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}
