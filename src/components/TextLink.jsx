import { Link } from "react-router-dom";
import "../styles/TextLink.css";

/**
 * Text link with a short gold line that fills across on hover and slides back on leave.
 * tone: 'default' (blue text) | 'light' (white text, for dark backgrounds)
 * as="span" renders a non-link element (use inside a card that is already a link).
 */
export default function TextLink({
  to,
  href,
  as,
  tone = "default",
  arrow = true,
  className = "",
  children,
  ...rest
}) {
  const classes = `text-link text-link--${tone} ${className}`.trim();
  const content = (
    <>
      {children}
      {arrow && (
        <span className="text-link__arrow" aria-hidden="true">
          →
        </span>
      )}
    </>
  );

  if (as === "span")
    return (
      <span className={classes} {...rest}>
        {content}
      </span>
    );
  if (to)
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  return (
    <a href={href} className={classes} {...rest}>
      {content}
    </a>
  );
}
