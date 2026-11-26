import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import PhotoGrid from "../components/PhotoGrid.jsx";
import Lightbox from "../components/Lightbox.jsx";
import { site } from "../data/siteData.js";
import { galleryIntro, photos } from "../data/galleryData.js";
import "../styles/Gallery.css";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null); // null = viewer closed

  useEffect(() => {
    document.title = `Gallery | ${site.name}`;
  }, []);

  return (
    <>
      <PageHeader {...galleryIntro} />

      <section className="gallery-section">
        <div className="container">
          <PhotoGrid photos={photos} onSelect={setOpenIndex} />
        </div>
      </section>

      <Lightbox
        photos={photos}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onChange={setOpenIndex}
      />
    </>
  );
}
