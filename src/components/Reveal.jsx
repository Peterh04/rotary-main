import useInView from "../hooks/useInView";
import "../styles/Reveal.css";

/** Fades and lifts its children into view the first time they scroll on screen. */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  style,
  children,
  ...rest
}) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}s`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
