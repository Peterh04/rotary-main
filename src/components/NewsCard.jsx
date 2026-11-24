import { Link } from "react-router-dom";
import TextLink from "../components/TextLink.jsx";
import "../styles/NewsCard.css";

/**
 * News story card.
 * variant 'featured': large photo with summary (use once, big).
 * variant 'compact': small square photo beside the title (use in lists).
 */
export default function NewsCard({
  variant = "featured",
  title,
  category,
  date,
  summary,
  image,
  imageAlt,
  to = "/news",
}) {
  if (variant === "compact") {
    return (
      <Link to={to} className="news-card news-card--compact card-link">
        <div className="news-card__media">
          <img src={image} alt={imageAlt || title} loading="lazy" />
        </div>
        <div>
          <p className="news-card__category">{category}</p>
          <h3 className="news-card__title">{title}</h3>
          <p className="news-card__date">{date}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link to={to} className="news-card news-card--featured card-link">
      <div className="news-card__media">
        <img src={image} alt={imageAlt || title} loading="lazy" />
      </div>
      <p className="news-card__category">
        {category} · {date}
      </p>
      <h3 className="news-card__title">{title}</h3>
      {summary && <p className="news-card__summary">{summary}</p>}
      <TextLink as="span">Read the story</TextLink>
    </Link>
  );
}
