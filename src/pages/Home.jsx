import { useEffect } from "react";
import HeroVideo from "../components/HeroVideo.jsx";
import StatsStrip from "../components/StatsStrip.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import TextLink from "../components/TextLink.jsx";
import Reveal from "../components/Reveal.jsx";
import FocusAreaRow from "../components/FocusAreaRow.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import TeamMember from "../components/TeamMember.jsx";
import NewsCard from "../components/NewsCard.jsx";
import PartnersStrip from "../components/PartnersStrip.jsx";

import { site } from "../data/siteData.js";
import {
  hero,
  stats,
  about,
  focusAreas,
  projects,
  team,
  news,
  partners,
} from "../data/homeData";
import "../styles/Home.css";

export default function Home() {
  useEffect(() => {
    document.title = site.name;
  }, []);

  return (
    <>
      {/* 1. Hero video with all hero content inside, stats strip attached below */}
      <HeroVideo {...hero} />
      <StatsStrip items={stats} />

      {/* 2. Who we are */}
      <section className="section">
        <div className="container home-about">
          <Reveal>
            <SectionHeading eyebrow={about.eyebrow} title={about.title} />
            <p className="home-about__text">{about.text}</p>
            <TextLink to={about.link.to}>{about.link.label}</TextLink>
          </Reveal>
          <Reveal delay={0.15} className="home-about__media">
            <img src={about.image} alt={about.imageAlt} loading="lazy" />
          </Reveal>
        </div>
      </section>

      <div className="container">
        <hr className="home-divider" />
      </div>

      {/* 3. Focus areas */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Where we make a difference"
              title="Our focus areas"
            />
          </Reveal>
          <div className="home-focus__list">
            {focusAreas.map((area, index) => (
              <Reveal key={area.number} delay={index * 0.1}>
                <FocusAreaRow {...area} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Recent projects */}
      <section className="section home-projects">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="A little of what we’ve been doing"
              title="Recent projects"
            />
          </Reveal>
          <div className="home-projects__grid">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.1}>
                <ProjectCard {...project} to={`/projects#${project.slug}`} />
              </Reveal>
            ))}
          </div>
          <Reveal className="home-more">
            <TextLink to="/projects">See all projects</TextLink>
          </Reveal>
        </div>
      </section>

      {/* 5. Meet the team */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="The people behind the work"
              title="Meet the team"
            />
          </Reveal>
          <div className="home-team__grid">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.12}>
                <TeamMember {...member} />
              </Reveal>
            ))}
          </div>
          <Reveal className="home-more">
            <TextLink to="/team">See the full team</TextLink>
          </Reveal>
        </div>
      </section>

      <div className="container">
        <hr className="home-divider" />
      </div>

      {/* 6. Latest news */}
      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow="What’s new" title="Latest news" />
          </Reveal>
          <div className="home-news__grid">
            <Reveal>
              <NewsCard
                variant="featured"
                {...news.featured}
                to={`/news#${news.featured.slug}`}
              />
            </Reveal>
            <div className="home-news__side">
              {news.side.map((story, index) => (
                <Reveal key={story.slug} delay={0.1 + index * 0.1}>
                  <NewsCard
                    variant="compact"
                    {...story}
                    to={`/news#${story.slug}`}
                  />
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="home-more">
            <TextLink to="/news">All news</TextLink>
          </Reveal>
        </div>
      </section>

      {/* 7. Partners */}
      <div className="container home-partners">
        <Reveal>
          <PartnersStrip partners={partners} />
        </Reveal>
      </div>
    </>
  );
}
