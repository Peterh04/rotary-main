import { Link } from "react-router-dom";
import { site, footerLinks } from "../data/siteData";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__name">{site.name}</p>
          <p className="footer__text">
            {site.district}. {site.motto}.
          </p>
        </div>

        <nav aria-label="Footer">
          <h4 className="footer__heading">Explore</h4>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h4 className="footer__heading">Where we meet</h4>
          <address className="footer__address">
            {site.address.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </address>
          <a
            href={site.mapsUrl}
            className="footer__link footer__link--underlined"
            target="_blank"
            rel="noreferrer"
          >
            Get directions
          </a>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          © {site.year} {site.name}. {site.motto}.
        </div>
      </div>
    </footer>
  );
}
