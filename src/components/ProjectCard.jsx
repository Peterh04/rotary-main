import { Link } from "react-router-dom";
import "../styles/ProjectCard.css";

/** Photo, category, title and one line of summary. The whole card is a link. */
export default function ProjectCard({
  title,
  category,
  summary,
  image,
  imageAlt,
  to = "/projects",
}) {
  return (
    <Link to={to} className="project-card card-link">
      <div className="project-card__media">
        <img src={image} alt={imageAlt || title} loading="lazy" />
      </div>
      <p className="project-card__category">{category}</p>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__summary">{summary}</p>
    </Link>
  );
}
