"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";

gsap.registerPlugin(ScrollTrigger);

const portfolioImages = [
  { src: "/images/projects/project-01.jpg", alt: "Contemporary courtyard garden with natural stone paving", aspect: "4/3" },
  { src: "/images/projects/project-02.jpg", alt: "Luxury rear garden with layered planting and seating area", aspect: "3/4" },
  { src: "/images/projects/project-03.jpg", alt: "Modern landscaped garden with water feature", aspect: "4/3" },
  { src: "/images/projects/project-04.jpg", alt: "Country estate garden with structured hedging", aspect: "1/1" },
  { src: "/images/projects/project-05.jpg", alt: "Lush planting scheme with mixed perennials", aspect: "3/4" },
  { src: "/images/projects/project-06.jpg", alt: "Urban garden transformation with decking and lighting", aspect: "4/3" },
  { src: "/images/projects/project-07.jpg", alt: "Mediterranean-inspired terrace garden", aspect: "3/4" },
  { src: "/images/projects/project-08.jpg", alt: "Formal garden with clipped topiary and gravel paths", aspect: "4/3" },
  // Repeat to create the "never-ending" feel
  { src: "/images/projects/project-03.jpg", alt: "Stone terrace with outdoor dining area", aspect: "1/1" },
  { src: "/images/projects/project-01.jpg", alt: "Walled garden with climbing roses and pergola", aspect: "3/4" },
  { src: "/images/projects/project-05.jpg", alt: "Herbaceous border with seasonal colour", aspect: "4/3" },
  { src: "/images/projects/project-07.jpg", alt: "Rooftop garden with container planting", aspect: "4/3" },
  { src: "/images/projects/project-02.jpg", alt: "Family garden with lawn and play area", aspect: "3/4" },
  { src: "/images/projects/project-06.jpg", alt: "Shaded woodland garden with ferns", aspect: "4/3" },
  { src: "/images/projects/project-04.jpg", alt: "Courtyard garden with raised beds and water feature", aspect: "1/1" },
  { src: "/images/projects/project-08.jpg", alt: "Gravel garden with drought-tolerant planting", aspect: "3/4" },
  { src: "/images/projects/project-01.jpg", alt: "Contemporary garden with corten steel edging", aspect: "4/3" },
  { src: "/images/projects/project-03.jpg", alt: "Cottage garden with mixed planting", aspect: "3/4" },
  { src: "/images/projects/project-06.jpg", alt: "Evening garden with landscape lighting", aspect: "4/3" },
  { src: "/images/projects/project-05.jpg", alt: "Naturalistic meadow planting", aspect: "1/1" },
];

export default function PortfolioPage() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate header
    if (headerRef.current) {
      const headerItems = headerRef.current.querySelectorAll(".header-reveal");
      gsap.fromTo(
        headerItems,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.15, delay: 0.3 }
      );
    }

    // Animate each gallery image with ScrollTrigger
    if (galleryRef.current) {
      const items = galleryRef.current.querySelectorAll(".gallery-item");
      items.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 80,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "top 50%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Split images into two columns for masonry layout
  const col1 = portfolioImages.filter((_, i) => i % 2 === 0);
  const col2 = portfolioImages.filter((_, i) => i % 2 === 1);

  // Three-column split for desktop
  const deskCol1 = portfolioImages.filter((_, i) => i % 3 === 0);
  const deskCol2 = portfolioImages.filter((_, i) => i % 3 === 1);
  const deskCol3 = portfolioImages.filter((_, i) => i % 3 === 2);

  const renderImage = (img: (typeof portfolioImages)[0], i: number) => (
    <div
      key={`${img.src}-${i}`}
      className="gallery-item group relative overflow-hidden"
      style={{ borderRadius: "6px", marginBottom: "16px" }}
    >
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: img.aspect }}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ background: "linear-gradient(transparent 40%, rgba(0,0,0,0.55))" }}
        >
          <p className="text-white text-sm leading-snug font-light tracking-wide">
            {img.alt}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <InnerPageLayout>
      {/* Hero Header — minimal, text-only with background image */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "70vh", minHeight: "500px" }}
      >
        <Image
          src="/images/projects/project-06.jpg"
          alt="Portfolio"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div
          ref={headerRef}
          className="absolute inset-0 flex flex-col justify-center items-center text-center container-custom"
        >
          <p
            className="header-reveal text-white/60 tracking-[0.25em] mb-4"
            style={{ fontSize: "clamp(10px, 1vw, 13px)", textTransform: "uppercase", fontWeight: 400, opacity: 0 }}
          >
            OUR WORK
          </p>
          <h1
            className="header-reveal font-display text-white max-w-3xl"
            style={{
              fontSize: "clamp(36px, 5vw, 72px)",
              fontWeight: 400,
              lineHeight: 1.15,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#FFFFFF",
              opacity: 0,
            }}
          >
            Portfolio
          </h1>
          <p
            className="header-reveal mt-6 max-w-xl"
            style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.8, opacity: 0 }}
          >
            Every garden tells a story. Scroll through our completed projects and imagine what we could create for you.
          </p>
        </div>
      </section>

      {/* Never-ending masonry gallery */}
      <section ref={galleryRef} style={{ background: "#f7f6f3" }} className="py-12 md:py-20">
        <div className="container-custom">
          {/* Mobile: single column */}
          <div className="block md:hidden">
            <div className="flex flex-col gap-4">
              {portfolioImages.map((img, i) => renderImage(img, i))}
            </div>
          </div>

          {/* Tablet: two columns */}
          <div className="hidden md:flex lg:hidden gap-4">
            <div className="flex-1 flex flex-col">
              {col1.map((img, i) => renderImage(img, i))}
            </div>
            <div className="flex-1 flex flex-col" style={{ marginTop: "60px" }}>
              {col2.map((img, i) => renderImage(img, i))}
            </div>
          </div>

          {/* Desktop: three columns with offset */}
          <div className="hidden lg:flex gap-5">
            <div className="flex-1 flex flex-col">
              {deskCol1.map((img, i) => renderImage(img, i))}
            </div>
            <div className="flex-1 flex flex-col" style={{ marginTop: "80px" }}>
              {deskCol2.map((img, i) => renderImage(img, i))}
            </div>
            <div className="flex-1 flex flex-col" style={{ marginTop: "40px" }}>
              {deskCol3.map((img, i) => renderImage(img, i))}
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA at bottom */}
      <section style={{ background: "var(--charcoal)" }} className="py-20">
        <div className="container-custom text-center">
          <h2
            className="font-display mb-4"
            style={{
              fontSize: "clamp(26px, 3vw, 42px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#FFFFFF",
              lineHeight: 1.3,
            }}
          >
            Let Us Create Something Beautiful For You
          </h2>
          <p
            className="max-w-xl mx-auto mb-8"
            style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", lineHeight: 1.8 }}
          >
            Every project in our portfolio began with a simple conversation. Tell us about your space and we will bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block font-medium tracking-wide transition-all duration-300 hover:opacity-90"
            style={{
              background: "var(--sage)",
              color: "#FFFFFF",
              padding: "16px 40px",
              borderRadius: "50px",
              fontSize: "14px",
              letterSpacing: "0.5px",
              textDecoration: "none",
            }}
          >
            Book a Design Consultation
          </a>
        </div>
      </section>
    </InnerPageLayout>
  );
}
