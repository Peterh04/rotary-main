import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ScrollProgress from "../components/ScrollProgress.jsx";
import Header from "../components/Header.jsx";
import CtaBanner from "../components/CtaBanner.jsx";
import Footer from "../components/Footer.jsx";
import { cta } from "../data/siteData";
import "../styles/Layout.css";

/** Wraps every page: progress bar, header, page content, call to action and footer. */
export default function Layout() {
  const { pathname } = useLocation();

  // Start each new page at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <CtaBanner {...cta} />
      <Footer />
    </>
  );
}
