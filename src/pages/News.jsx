import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import FilterChips from "../components/FilterChips.jsx";
import NewsCard from "../components/NewsCard.jsx";
import Reveal from "../components/Reveal.jsx";
import useScrollToHash from "../hooks/useScrollToHash.js";
import { site } from "../data/siteData.js";
import { newsIntro, newsCategories, allNews } from "../data/newsData.js";
import "../styles/News.css";

export default function News() {
  const [category, setCategory] = useState("All");
  useScrollToHash();

  useEffect(() => {
    document.title = `News | ${site.name}`;
  }, []);

  const visible =
    category === "All"
      ? allNews
      : allNews.filter((story) => story.category === category);

  return (
    <>
      <PageHeader {...newsIntro} />

      <section className="news-list">
        <div className="container">
          <FilterChips
            label="Filter news by category"
            options={newsCategories}
            value={category}
            onChange={setCategory}
          />
          <p className="visually-hidden" aria-live="polite">
            Showing {visible.length} stories
          </p>

          <div className="news-list__grid">
            {visible.map((story, index) => (
              <Reveal
                key={story.slug}
                id={story.slug}
                delay={(index % 3) * 0.1}
              >
                <NewsCard
                  variant="card"
                  {...story}
                  to={`/news#${story.slug}`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
