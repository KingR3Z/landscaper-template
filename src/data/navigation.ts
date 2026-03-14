export const mainNav = {
  logo: "G&D",
  cta: { label: "Get a Free Quote", href: "/contact" },
  links: [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/garden-design",
      children: [
        { label: "Our Gardens", href: "/our-gardens" },
      ],
    },
    { label: "Portfolio", href: "/our-gardens" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "News", href: "/news" },
  ],
};

export const footerData = {
  logo: "G D",
  tagline: "GARDEN & DRIVEWAYS",
  subtitle: "GARDENS | DRIVEWAYS | PATIOS | LANDSCAPING",
  contact: {
    heading: "GET IN TOUCH",
    address: ["20 Leech Ave", "Newcastle-under-Lyme", "Staffordshire", "ST5 7PN"],
    phone: "07470 867661",
    email: "sales@gardenanddriveways.co.uk",
  },
  menu: {
    heading: "MENU",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/our-gardens" },
      { label: "Contact Us", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Accessibility Statement", href: "/accessibility" },
    ],
  },
  socials: {
    heading: "FOLLOW US",
    links: [
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
  copyright: "2026 Garden & Driveways",
};
