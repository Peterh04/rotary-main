// About page content. Swap for API/CMS data later.
import TreePlanting from "../assets/treePlanting.png";

export const intro = {
  eyebrow: "About the club",
  title: "Service above self, since 1985.",
  text: "The Rotary Club of Masaka is part of Rotary International District 9214. We bring together professionals and community leaders from different backgrounds to serve Masaka and the region.",
  image: TreePlanting,
  imageAlt: "Club members gathered around a newly planted tree",
};

export const story = {
  eyebrow: "Our story",
  title: "How the club began",
  items: [
    {
      label: "1984",
      text: "On 12 June 1984, a small group of men in Masaka met three Rotarians from the Rotary Club of Kampala Arch, who introduced them to Rotary’s ideals of service.",
    },
    {
      label: "1985",
      text: "The club received its charter on 2 April 1985 and became a full Rotary club.",
    },
    {
      label: "Since then",
      text: "We have nurtured new Rotary, Rotaract and Interact clubs across the region, including Kalisizo, Kyotera, Lukaya, Lyantonde, Kinoni and Masaka City.",
    },
    {
      label: "2021/22",
      text: "Our meeting home moved from Masaka Sports Club to Hotel Next after 37 years.",
    },
    {
      label: "2026",
      text: "On 9 June 2026, Sotius Ssegawa was installed as the club’s 42nd president.",
    },
  ],
};

export const values = {
  eyebrow: "What we stand for",
  title: "Service Above Self",
  text: "Our motto guides everything we do. Before we act, we ask four questions, known as the Four-Way Test.",
  items: [
    { number: "01", title: "Is it the truth?" },
    { number: "02", title: "Is it fair to all concerned?" },
    { number: "03", title: "Will it build goodwill and better friendships?" },
    { number: "04", title: "Will it be beneficial to all concerned?" },
  ],
};

export const rotaryYear = {
  eyebrow: "This Rotary year",
  title: "Each One Engage for Impact",
  text: "This is the District 9214 theme for 2026/27. It sits alongside Rotary International’s call to Create Lasting Impact. Under both, every member is asked to take part, give and serve.",
  links: [
    { label: "See our projects", to: "/projects" },
    { label: "Meet the team", to: "/team" },
  ],
};
