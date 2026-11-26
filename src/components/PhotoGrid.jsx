import Reveal from "../components/Reveal.jsx";
import "../styles/PhotoGrid.css";

/** Grid of photo tiles. Each tile is a button; clicking calls onSelect(index). */
export default function PhotoGrid({ photos, onSelect }) {
  return (
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <Reveal
          key={photo.src + index}
          delay={(index % 3) * 0.08}
          className="photo-grid__cell"
        >
          <button
            type="button"
            className="photo-grid__tile"
            aria-label={`Open photo: ${photo.caption}`}
            onClick={() => onSelect(index)}
          >
            <img src={photo.src} alt="" loading="lazy" />
            <span className="photo-grid__caption">{photo.caption}</span>
          </button>
        </Reveal>
      ))}
    </div>
  );
}
