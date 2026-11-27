// Projects page content. Swap for API data later. `slug` is used for links like /projects#slug.

import Weelchair from "../assets/weelchair.png";
import SchoolWater from "../assets/school_water.png";
import NewBorn from "../assets/new_born.png";
import Kisoro from "../assets/kisoro.png";
import Elder from "../assets/elder.png";
import Desks from "../assets/desks.png";
import AdoptVillage from "../assets/adoptVillage.png";
import Neonatal from "../assets/neonatal.png";
import Exam from "../assets/exam.png";
import Care from "../assets/care.png";
import Bed from "../assets/bed.png";
import Water from "../assets/water.png";

export const projectCategories = [
  "All",
  "Health",
  "Education",
  "Water & sanitation",
  "Community",
];

export const projectsIntro = {
  eyebrow: "Our work",
  title: "Projects",
  text: "From school latrines to newborn equipment, a look at what our members have delivered with partners across the region.",
};

export const allProjects = [
  {
    slug: "clean-water-six-city-schools",
    category: "Water & sanitation",
    title: "Clean water for six city schools",
    summary: "Latrines and rainwater tanks for 2,436 pupils in Masaka City.",
    image: SchoolWater,
    imageAlt: "Children at a school outreach",
  },
  {
    slug: "neonatal-care-support",
    category: "Health",
    title: "Neonatal care support",
    summary:
      "Equipment for the newborn unit at Masaka Regional Referral Hospital.",
    image: NewBorn,
    imageAlt: "Club members at a project site",
  },
  {
    slug: "exam-kits-208-pupils",
    category: "Education",
    title: "Exam kits for 208 pupils",
    summary:
      "Geometry sets, books and sanitary towels for P.6 and P.7 learners.",
    image: Exam,
    imageAlt: "Volunteers working together outdoors",
  },
  {
    slug: "kyabakuza-medical-camp",
    category: "Health",
    title: "Kyabakuza medical camp",
    summary:
      "Free treatment, screening and blood donation for local residents.",
    image: Care,
    imageAlt: "Volunteers at a community day",
  },
  {
    slug: "maternity-mattresses",
    category: "Health",
    title: "Maternity mattresses",
    summary:
      "100 hospital-grade mattresses for Masaka Regional Referral Hospital.",
    image: Bed,
    imageAlt: "Saplings being planted",
  },
  {
    slug: "buwunga-health-centre",
    category: "Health",
    title: "Buwunga Health Centre",
    summary: "A delivery bed and emergency supplies for the maternity ward.",
    image: Neonatal,
    imageAlt: "Women carrying supplies",
  },
  {
    slug: "kisoro-water-project",
    category: "Water & sanitation",
    title: "Kisoro water project",
    summary: "Clean water, sanitation and income support for women in Kisoro.",
    image: Kisoro,
    imageAlt: "A volunteer planting saplings",
  },
  {
    slug: "adopt-a-village-kyakatebe",
    category: "Community",
    title: "Adopt a village, Kyakatebe",
    summary: "A community health centre built with Rotary Club of Innisfail.",
    image: AdoptVillage,
    imageAlt: "Volunteers digging",
  },
  {
    slug: "housing-for-the-vulnerable",
    category: "Community",
    title: "Housing for the vulnerable",
    summary: "A two-bedroom home for an elderly woman and her dependants.",
    image: Elder,
    imageAlt: "Club members gathered together",
  },
  {
    slug: "wheelchairs-project",
    category: "Community",
    title: "Wheelchairs project",
    summary: "Wheelchairs for children and adults with disabilities.",
    image: Weelchair,
    imageAlt: "Children at an outreach",
  },
  {
    slug: "desks-and-girls-toilets",
    category: "Education",
    title: "Desks and girls’ toilets",
    summary: "Desks for St Charles S.S. Kyansi and a new girls’ toilet block.",
    image: Desks,
    imageAlt: "Volunteers on a project day",
  },
  {
    slug: "schools-water-and-toilets",
    category: "Water & sanitation",
    title: "Schools water and toilets",
    summary: "Toilets for four schools and water tanks for five.",
    image: Water,
    imageAlt: "Club members outdoors",
  },
];
