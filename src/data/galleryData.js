// Gallery content. Swap for API/CMS data later. Each photo: { src, caption, alt? }.
import Maternal from "../assets/maternal.png";
import Motivated from "../assets/motivated.png";
import Education from "../assets/Education.png";
import tree_planting from "../assets/tree_planting.png";
import childrens_home from "../assets/Nazareen_childrens_home.png";

export const galleryIntro = {
  eyebrow: "In pictures",
  title: "Gallery",
  text: "Moments from our projects, meetings and community days.",
};

export const photos = [
  { src: Maternal, caption: "Maternal & Child Health Project" },
  {
    src: Motivated,
    caption: "Volunteers are driven by intrinsic motivation to heelp others",
  },
  {
    src: Education,
    caption:
      "Implemented an Education Support Project under Basic Education and Literacy",
  },
  {
    src: tree_planting,
    caption: "Tree Planting with District Governor at Buwunga Health Centre ",
  },
  {
    src: childrens_home,
    caption: "Supporting Nazareth Childrens home for the last 10years ",
  },
];
