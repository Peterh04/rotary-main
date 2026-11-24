import { Link } from "react-router-dom";
import "../styles/Button.css";

/**
 * Button / link styled as a button.
 * variant: 'primary' (gold) | 'blue' | 'outline' | 'outline-light'
 * Pass `to` for an in-app route, `href` for an external link, or neither for a <button>.
 */
export default function Button({
  to,
  href,
  variant = "primary",
  arrow = true,
  className = "",
  children,
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim();
  const content = (
    <>
      {children}
      {arrow && (
        <span className="btn__arrow" aria-hidden="true">
          →
        </span>
      )}
    </>
  );

  if (to)
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  if (href)
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
