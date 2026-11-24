import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "../components/Button.jsx";
import { site, navLinks } from "../data/siteData.js";
import rotaryIcon from "../assets/rotary.svg";
import "../styles/Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`.trim()}>
      <div className="container header__bar">
        <Link to="/" className="header__logo">
          <img src={rotaryIcon} alt="rotary icon" />
        </Link>

        <nav
          id="main-nav"
          className={`header__nav ${open ? "header__nav--open" : ""}`.trim()}
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `header__link ${isActive ? "is-active" : ""}`.trim()
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button to="/get-involved" className="header__nav-cta">
            Get involved
          </Button>
        </nav>

        <Button to="/get-involved" className="header__cta">
          Get involved
        </Button>

        <button
          type="button"
          className={`header__toggle ${open ? "is-open" : ""}`.trim()}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
