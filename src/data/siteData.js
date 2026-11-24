// Site-wide content used by the Header, Footer and Layout.
export const site = {
  name: "Rotary Club of Masaka",
  district: "Rotary International District 9214, Uganda",
  motto: "Service Above Self",
  year: 2026,
  address: ["Hotel Next", "Plot 75, Hobert Street", "Masaka"],
  mapsUrl: "https://maps.google.com/?q=Hotel+Next+Hobert+Street+Masaka",
};

export const navLinks = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/news", label: "News" },
  { to: "/gallery", label: "Gallery" },
];

export const footerLinks = [...navLinks, { to: "/team", label: "Our team" }];

export const cta = {
  title: "There is room for you here.",
  text: "Volunteer, partner or simply be part of our journey.",
  button: { label: "Get involved", to: "/get-involved" },
};
