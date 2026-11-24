import useInView from "../hooks/useInView";
import useCountUp from "../hooks/useCountUp";
import "../styles/StatsStrip.css";

function Stat({ value, suffix = "", label, active }) {
  const shown = useCountUp(value, active);
  return (
    <div className="stats-strip__item">
      <div className="stats-strip__number">
        {shown.toLocaleString("en-US")}
        {suffix}
      </div>
      <div className="stats-strip__label">{label}</div>
    </div>
  );
}

/** Blue band of key numbers that count up when it scrolls into view. Sits directly under the hero. */
export default function StatsStrip({ items }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  return (
    <section className="stats-strip" ref={ref} aria-label="The club in numbers">
      <div className="container stats-strip__grid">
        {items.map((item) => (
          <Stat key={item.label} {...item} active={inView} />
        ))}
      </div>
    </section>
  );
}
