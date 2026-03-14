/* ============================================
   CLIENT CONFIGURATION
   Change this file to set up a new client.
   This is the single source of truth for all
   client-specific content across the site.
   ============================================ */

export const client = {
  // ── Business Identity ──────────────────────
  name: "Garden & Driveways",
  shortName: "G&D",
  legalName: "Garden & Driveways",
  tagline: "GARDENS | DRIVEWAYS | PATIOS | LANDSCAPING",
  logoInitials: "G D",

  // ── Founder / Director ─────────────────────
  founderName: "Matt",
  founderRole: "Director",
  yearFounded: "2020",

  // ── Contact Details ────────────────────────
  phone: "07470 867661",
  email: "sales@gardenanddriveways.co.uk",
  whatsapp: {
    display: "07470 867661",
    link: "https://wa.me/447470867661",
  },
  address: [
    "20 Leech Ave",
    "Newcastle-under-Lyme",
    "Staffordshire",
    "ST5 7PN",
  ],
  region: "Newcastle-under-Lyme and Staffordshire",
  basedIn: "Staffordshire",

  // ── Business Hours ─────────────────────────
  hours: [
    { day: "Monday — Friday", time: "8:30 AM — 4:00 PM" },
    { day: "Saturday", time: "8:30 AM — 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],

  // ── Social Links ───────────────────────────
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
  ],

  // ── Awards & Recognition ───────────────────
  awards: [
    { title: "Google Reviews — 4.9 Stars", year: "2026", category: "REVIEWS" },
    { title: "54 Five-Star Reviews", year: "2026", category: "SERVICE" },
  ],

  // ── Partners ───────────────────────────────
  partners: [
    { name: "Marshalls", logo: null },
    { name: "Bradstone", logo: null },
    { name: "Tobermore", logo: null },
    { name: "Tarmac", logo: null },
  ],

  // ── SEO / Metadata ─────────────────────────
  metaTitle: "Garden & Driveways — Paving, Patios & Landscaping in Newcastle",
  metaDescription:
    "Professional paving contractor in Newcastle-under-Lyme, Staffordshire. Driveways, patios, gardens and landscaping. 4.9 stars on Google Reviews.",
};
