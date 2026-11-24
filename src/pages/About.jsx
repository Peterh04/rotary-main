import { useEffect } from "react";
import PageHeader from "../components/PageHeader.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import Timeline from "../components/Timeline.jsx";
import FocusAreaRow from "../components/FocusAreaRow.jsx";
import TextLink from "../components/TextLink.jsx";
import { site } from "../data/siteData.js";
import { intro, story, values, rotaryYear } from "../data/aboutData.js";
import "../styles/About.css";

export default function About() {
  useEffect(() => {
    document.title = `About | ${site.name}`;
  }, []);

  return (
    <>
      <PageHeader
        eyebrow={intro.eyebrow}
        title={intro.title}
        text={intro.text}
      />

      <div className="container">
        <Reveal className="about-banner">
          <img src={intro.image} alt={intro.imageAlt} />
        </Reveal>
      </div>

      {/* Our story */}
      <section className="section">
        <div className="container about-split">
          <Reveal>
            <SectionHeading eyebrow={story.eyebrow} title={story.title} />
          </Reveal>
          <Timeline items={story.items} />
        </div>
      </section>

      <div className="container">
        <hr className="about-divider" />
      </div>

      {/* What we stand for */}
      <section className="section">
        <div className="container about-split">
          <Reveal>
            <SectionHeading eyebrow={values.eyebrow} title={values.title} />
            <p className="about-text">{values.text}</p>
          </Reveal>
          <div className="about-values">
            {values.items.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.08}>
                <FocusAreaRow compact {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <hr className="about-divider" />
      </div>

      {/* This Rotary year */}
      <section className="section">
        <div className="container about-split">
          <Reveal>
            <SectionHeading
              eyebrow={rotaryYear.eyebrow}
              title={rotaryYear.title}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="about-text about-text--first">{rotaryYear.text}</p>
            <div className="about-links">
              {rotaryYear.links.map((link) => (
                <TextLink key={link.to} to={link.to}>
                  {link.label}
                </TextLink>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
