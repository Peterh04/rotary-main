import "../styles/SectionHeading.css";

/** Small eyebrow label + section title. */
export default function SectionHeading({
  eyebrow,
  title,
  as: Tag = "h2",
  className = "",
}) {
  return (
    <div className={`section-heading ${className}`.trim()}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag className="section-heading__title">{title}</Tag>
    </div>
  );
}
