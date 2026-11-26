import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "../styles/Lightbox.css";

/**
 * Full-screen photo viewer.
 * photos: [{ src, alt, caption }]   index: number or null (null = closed)
 * onClose(): close it.   onChange(newIndex): move to another photo.
 * Close with the X, the Esc key or a click outside the photo. Move with the arrow buttons,
 * the left/right arrow keys, or a swipe on touch screens.
 */
export default function Lightbox({ photos, index, onClose, onChange }) {
  const closeRef = useRef(null);
  const dialogRef = useRef(null);
  const touchStartX = useRef(null);
  const isOpen = index !== null && index !== undefined;

  const go = useCallback(
    (step) => onChange((index + step + photos.length) % photos.length),
    [index, photos.length, onChange],
  );

  // Lock page scroll, move focus into the viewer, and give focus back to the clicked photo on close.
  useEffect(() => {
    if (!isOpen) return undefined;
    const previous = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previous?.focus?.();
    };
  }, [isOpen]);

  // Keyboard: Esc closes, arrows move, Tab stays inside the viewer.
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowLeft") go(-1);
      else if (event.key === "ArrowRight") go(1);
      else if (event.key === "Tab") {
        const buttons = dialogRef.current?.querySelectorAll("button");
        if (!buttons || !buttons.length) return;
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, go, onClose]);

  // Load the neighbouring photos in advance so arrows feel instant.
  useEffect(() => {
    if (!isOpen) return;
    [-1, 1].forEach((step) => {
      const image = new Image();
      image.src = photos[(index + step + photos.length) % photos.length].src;
    });
  }, [isOpen, index, photos]);

  if (!isOpen) return null;
  const photo = photos[index];

  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };
  const onTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) > 50) go(distance < 0 ? 1 : -1);
  };

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      ref={dialogRef}
      onClick={(event) => {
        if (
          event.target === event.currentTarget ||
          event.target.classList.contains("lightbox__stage")
        )
          onClose();
      }}
    >
      <button
        ref={closeRef}
        type="button"
        className="lightbox__btn lightbox__close"
        aria-label="Close photo viewer"
        onClick={onClose}
      >
        ×
      </button>
      <button
        type="button"
        className="lightbox__btn lightbox__prev"
        aria-label="Previous photo"
        onClick={() => go(-1)}
      >
        ‹
      </button>

      <div
        className="lightbox__stage"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img
          key={photo.src}
          className="lightbox__img"
          src={photo.src}
          alt={photo.alt || photo.caption}
        />
        <p className="lightbox__caption" aria-live="polite">
          {photo.caption}
          <span className="lightbox__count">
            {index + 1} of {photos.length}
          </span>
        </p>
      </div>

      <button
        type="button"
        className="lightbox__btn lightbox__next"
        aria-label="Next photo"
        onClick={() => go(1)}
      >
        ›
      </button>
    </div>,
    document.body,
  );
}
