// News page content. Swap for API/CMS data later. `slug` is used for links like /news#slug.
import sotiusSsegewa from "../assets/sotius_ssegewa.png";
import Water from "../assets/water.png";
import NewBorn from "../assets/new_born.png";
import Bed from "../assets/bed.png";
import Exam from "../assets/exam.png";

export const newsIntro = {
  eyebrow: "What’s new",
  title: "News",
  text: "Stories, events and updates from the club.",
};

export const newsCategories = [
  "All",
  "Club",
  "Health",
  "Education",
  "Water & sanitation",
];

export const allNews = [
  {
    slug: "president-installation-2026",
    category: "Club",
    date: "9 June 2026",
    title: "Sotius Ssegawa installed as 42nd president",
    image: sotiusSsegewa,
    imageAlt: "Club members gathered together",
  },
  {
    slug: "six-city-schools-clean-water",
    category: "Water & sanitation",
    date: "Rotary year 2026/27",
    title: "Six city schools to get clean water",
    image: Water,
    imageAlt: "A volunteer planting saplings",
  },
  {
    slug: "newborn-unit-equipment",
    category: "Health",
    date: "19 December 2025",
    title: "New equipment for the newborn unit",
    image: NewBorn,
    imageAlt: "Volunteers on a project day",
  },
  {
    slug: "medical-camp-kyabakuza",
    category: "Health",
    date: "30 November 2025",
    title: "Free medical camp reaches more than 600 residents",
    image: "/images/vest2.jpg",
    imageAlt: "Volunteers at a community day",
  },
  {
    slug: "exam-kits-208-pupils",
    category: "Education",
    date: "30 November 2025",
    title: "Exam kits for 208 pupils",
    image: Exam,
    imageAlt: "Children at a school outreach",
  },
  {
    slug: "first-30-mattresses",
    category: "Health",
    date: "30 August 2025",
    title: "First 30 of 100 mattresses delivered",
    image: Bed,
    imageAlt: "Saplings being planted",
  },
];
