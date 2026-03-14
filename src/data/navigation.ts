export const mainNav = {
  logo: "Hartwood",
  cta: { label: "Contact Us", href: "/contact" },
  links: [
    { label: "Home", href: "/" },
    {
      label: "Garden Design",
      href: "/garden-design",
      children: [
        { label: "Our Gardens", href: "/our-gardens" },
      ],
    },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "News", href: "/news" },
  ],
};

export const footerData = {
  logo: "H L",
  tagline: "HARTWOOD LANDSCAPES",
  subtitle: "INSPIRE | DESIGN | CREATE | NURTURE",
  contact: {
    heading: "GET IN TOUCH",
    address: ["Hartwood House", "42 High Street", "Tunbridge Wells", "Kent, TN1 1XP"],
    phone: "01892 489 923",
    email: "design@hartwood-landscapes.co.uk",
  },
  menu: {
    heading: "MENU",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "News", href: "/news" },
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
      { label: "Instagram", href: "#" },
      { label: "Youtube", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Houzz", href: "#" },
      { label: "Pinterest", href: "#" },
      { label: "Whatsapp", href: "#" },
    ],
  },
  copyright: "2026 Hartwood Landscapes Ltd",
};
