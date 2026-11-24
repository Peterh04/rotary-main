// Home page content. Swap these arrays for API data when your backend is ready.
import sotiusSsegewa from "../assets/sotius_ssegewa.png";
import MartinKigozi from "../assets/Martin_Kigozi.png";
import Claire from "../assets/Claire.png";
import Water from "../assets/water.png";
import Neonatal from "../assets/neonatal.png";
import ExamSets from "../assets/exam.png";
import TreePlanting from "../assets/treePlanting.png";
import Care from "../assets/care.png";

export const hero = {
  videoSrc: "/videos/hero.mp4",
  webmSrc: "", // optional: '/videos/hero.webm'
  posterSrc: "/images/hero-poster.jpg",
  eyebrow: "Service · Community · Impact",
  title: "Small acts. Lasting change.",
  text: "We are a club of volunteers in Masaka, Uganda, working together to support education, improve health and bring clean water to the communities around us.",
  primaryCta: { label: "Explore our work", to: "/projects" },
  secondaryCta: { label: "Meet the club", to: "/about" },
};

export const stats = [
  { value: 41, label: "Years of service" },
  { value: 500, suffix: "+", label: "Newborns supported each year" },
  { value: 2436, label: "Pupils getting clean water" },
];

export const about = {
  eyebrow: "Who we are",
  title: "Ordinary people, one shared purpose.",
  text: "The Rotary Club of Masaka received its charter on 2 April 1985. Since then we have grown into a club of professionals and community leaders who give their time, skills and resources to the people of Masaka and beyond.",
  link: { label: "About our club", to: "/about" },
  image: TreePlanting,
  imageAlt: "A volunteer planting saplings",
};

export const focusAreas = [
  {
    number: "01",
    title: "Education",
    text: "Books, geometry sets and sanitary towels for pupils preparing for their exams.",
  },
  {
    number: "02",
    title: "Disease Prevention and Treatment",
    text: "Free community medical camps and access to essential healthcare.",
  },
  {
    number: "03",
    title: "Maternal and Child Health",
    text: "Better maternity wards and newborn care.",
  },
  {
    number: "04",
    title: "Water, Sanitation and Hygiene",
    text: "Latrines and rainwater tanks for healthier schools.",
  },
  {
    number: "05",
    title: "Peacebuilding and Conflict Prevention",
    text: "Dialogue, understanding and stronger communities.",
  },
  {
    number: "06",
    title: "Community Economic Development",
    text: "Sustainable livelihoods and local opportunities.",
  },
  {
    number: "07",
    title: "Protecting the Environment",
    text: "Protecting the Environment.",
  },
];

export const projects = [
  {
    slug: "clean-water-six-city-schools",
    category: "Water & sanitation",
    title: "Clean water for six city schools",
    summary: "Latrines and rainwater tanks for 2,436 pupils in Masaka City.",
    image: Water,
    imageAlt: "Children at a school outreach",
  },
  {
    slug: "xnatal-care-support",
    category: "Health",
    title: "Neonatal care support",
    summary:
      "Equipment for the newborn unit at Masaka Regional Referral Hospital.",
    image: Neonatal,
    imageAlt: "Club members at a project site",
  },
  {
    slug: "exam-kits-208-pupils",
    category: "Education",
    title: "Exam kits for 208 pupils",
    summary:
      "Geometry sets, books and sanitary towels for P.6 and P.7 learners.",
    image: ExamSets,
    imageAlt: "Volunteers working together outdoors",
  },
];

export const news = {
  featured: {
    slug: "medical-camp-kyabakuza",
    category: "Health",
    date: "30 November 2025",
    title: "Free medical camp reaches more than 600 residents",
    summary:
      "With Rotaract and DFCU Bank, our members brought general treatment, dental, eye and ENT care, and blood donation to Kyabakuza.",
    image: Care,
    imageAlt: "Volunteers at a community day",
  },
  side: [
    {
      slug: "president-installation-2026",
      category: "Club",
      date: "9 June 2026",
      title: "Sotius Ssegawa installed as 42nd president",
      image: sotiusSsegewa,
      imageAlt: "Club members gathered together",
    },
    {
      slug: "newborn-unit-equipment",
      category: "Health",
      date: "19 December 2025",
      title: "New equipment for the newborn unit",
      image: Neonatal,
      imageAlt: "Volunteers on a project day",
    },
  ],
};

export const team = [
  {
    name: "Sotius Ssegawa",
    role: "President",
    photo: sotiusSsegewa,
  },
  { name: "Martin Kigozi", role: "Vice President", photo: MartinKigozi },
  { name: "Clare Najjemba", role: "Secretary", photo: Claire },
];

export const partners = [
  "DFCU Bank",
  "Centenary Bank",
  "Hotel Next",
  "Rotary Club of Hassfurt, Germany",
  "Rotaract Club of Masaka",
];
