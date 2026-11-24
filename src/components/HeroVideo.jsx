import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import TextLink from "../components/TextLink.jsx";
import "../styles/HeroVideo.css";

/**
 * Full-width hero with a looping background video and all the hero content inside it.
 * The poster image shows while the video loads, if it fails, or when the visitor prefers reduced motion.
 */
export default function HeroVideo({
  videoSrc,
  webmSrc,
  posterSrc,
  eyebrow,
  title,
  text,
  primaryCta,
  secondaryCta,
}) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      setPlaying(false);
      return;
    }
    const attempt = video.play();
    if (attempt && attempt.then) {
      attempt.then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="hero-video" aria-labelledby="hero-title">
      <div
        className="hero-video__media"
        style={{ backgroundImage: `url(${posterSrc})` }}
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          className="hero-video__video"
          poster={posterSrc}
          muted
          loop
          playsInline
          preload="auto"
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          {videoSrc && <source src={videoSrc} type="video/mp4" />}
        </video>
        <div className="hero-video__overlay" />
      </div>

      <div className="container hero-video__inner">
        <div className="hero-video__content">
          {eyebrow && <p className="hero-video__eyebrow">{eyebrow}</p>}
          <h1 id="hero-title" className="hero-video__title">
            {title}
          </h1>
          <div className="hero-video__rule" />
          <p className="hero-video__text">{text}</p>
          <div className="hero-video__actions">
            {primaryCta && (
              <Button to={primaryCta.to}>{primaryCta.label}</Button>
            )}
            {secondaryCta && (
              <TextLink to={secondaryCta.to} tone="light">
                {secondaryCta.label}
              </TextLink>
            )}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="hero-video__toggle"
        onClick={toggle}
        aria-label={
          playing ? "Pause background video" : "Play background video"
        }
      >
        <span
          className={`hero-video__icon ${playing ? "is-pause" : "is-play"}`}
          aria-hidden="true"
        />
      </button>
    </section>
  );
}
