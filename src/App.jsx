import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

// Temporary page for routes we have not built yet (About, Projects, News, Gallery, Team, Get involved).
function ComingSoon({ title }) {
  return (
    <section className="section">
      <div className="container">
        <h1>{title}</h1>
        <p style={{ marginTop: 12 }}>This page is coming next.</p>
      </div>
    </section>
  );
}

const upcoming = [
  ["about", "About"],
  ["projects", "Projects"],
  ["news", "News"],
  ["gallery", "Gallery"],
  ["team", "Our team"],
  ["get-involved", "Get involved"],
];

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route element={<About />} path="/about" />
        {upcoming.map(([path, title]) => (
          <Route
            key={path}
            path={path}
            element={<ComingSoon title={title} />}
          />
        ))}
      </Route>
    </Routes>
  );
}
