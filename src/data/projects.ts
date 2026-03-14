export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  location: string;
  budget?: string;
  designTime: string;
  installationTime: string;
  image: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "newcastle-driveway",
    title: "block paved driveway",
    description:
      "A tired concrete driveway replaced with premium herringbone block paving. Complete with new edging, drainage and a fresh look that transformed the front of the property.",
    location: "Newcastle-under-Lyme",
    designTime: "1 week",
    installationTime: "5 days",
    image: "/images/projects/project-01.jpg",
  },
  {
    id: "stoke-lawn",
    title: "artificial lawn & patio",
    description:
      "Full back garden renovation featuring artificial grass, Indian stone patio slabs and new timber fencing. A low-maintenance garden the whole family can enjoy.",
    location: "Stoke-on-Trent",
    designTime: "1 week",
    installationTime: "7 days",
    image: "/images/projects/project-02.jpg",
  },
  {
    id: "kidsgrove-herringbone",
    title: "herringbone block paving",
    description:
      "Classic charcoal herringbone block paving with contrasting border detail. New drainage channels fitted and old concrete removed. A driveway built to last.",
    location: "Kidsgrove",
    designTime: "3 days",
    installationTime: "4 days",
    image: "/images/projects/project-03.jpg",
  },
  {
    id: "stone-fencing",
    title: "fencing & brick pillars",
    description:
      "New boundary treatment with timber lap panels set between hand-built brick pillars. Finished with post caps and a matching pedestrian gate.",
    location: "Stone, Staffordshire",
    designTime: "3 days",
    installationTime: "5 days",
    image: "/images/projects/project-04.jpg",
  },
  {
    id: "audley-gravel",
    title: "red granite gravel path",
    description:
      "A winding gravel pathway through a redesigned front garden. Red granite aggregate over membrane with timber sleeper borders. Simple, elegant and practical.",
    location: "Audley",
    designTime: "2 days",
    installationTime: "3 days",
    image: "/images/projects/project-05.jpg",
  },
  {
    id: "wolstanton-paving",
    title: "gold block paving driveway",
    description:
      "Full front garden transformation from lawn to a spacious gold-toned block paving driveway. Extra parking space created with matching pathways.",
    location: "Wolstanton",
    designTime: "1 week",
    installationTime: "6 days",
    image: "/images/projects/project-06.jpg",
  },
  {
    id: "silverdale-concrete",
    title: "stamped concrete driveway",
    description:
      "Pattern imprinted concrete in a natural stone finish. A cost-effective alternative that looks stunning and requires minimal maintenance for years to come.",
    location: "Silverdale",
    designTime: "3 days",
    installationTime: "3 days",
    image: "/images/projects/project-07.jpg",
  },
  {
    id: "burslem-tarmac",
    title: "tarmac driveway",
    description:
      "Professional tarmac driveway installation with block paving apron and border details. Clean, durable finish that enhances the property's kerb appeal.",
    location: "Burslem",
    designTime: "2 days",
    installationTime: "2 days",
    image: "/images/projects/project-08.jpg",
  },
];
