import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import FilterChips from "../components/FilterChips.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Reveal from "../components/Reveal.jsx";
import { site } from "../data/siteData.js";
import {
  projectsIntro,
  projectCategories,
  allProjects,
} from "../data/projectsData.js";
import "../styles/Projects.css";

export default function Projects() {
  const [category, setCategory] = useState("All");
  const { hash } = useLocation();

  useEffect(() => {
    document.title = `Projects | ${site.name}`;
  }, []);

  // Links like /projects#neonatal-care-support scroll to that project.
  useEffect(() => {
    if (!hash) return undefined;
    const timer = setTimeout(() => {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ block: "center" });
    }, 150);
    return () => clearTimeout(timer);
  }, [hash]);

  const visible =
    category === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === category);

  return (
    <>
      <PageHeader {...projectsIntro} />

      <section className="projects-list">
        <div className="container">
          <FilterChips
            label="Filter projects by category"
            options={projectCategories}
            value={category}
            onChange={setCategory}
          />
          <p className="visually-hidden" aria-live="polite">
            Showing {visible.length} projects
          </p>

          <div className="projects-list__grid">
            {visible.map((project, index) => (
              <Reveal
                key={project.slug}
                id={project.slug}
                delay={(index % 3) * 0.1}
              >
                <ProjectCard {...project} to={`/projects#${project.slug}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
