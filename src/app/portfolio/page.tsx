"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";

gsap.registerPlugin(ScrollTrigger);

/* All project images */
const projectImages = [
  { src: "/images/projects/project-01.jpg", title: "Block Paved Driveway", location: "Newcastle-under-Lyme" },
  { src: "/images/projects/project-02.jpg", title: "Artificial Lawn & Patio", location: "Stoke-on-Trent" },
  /* project-03 is used as hero banner — skip to avoid duplicate */
  { src: "/images/projects/project-04.jpg", title: "Fencing & Brick Pillars", location: "Stone, Staffordshire" },
  { src: "/images/projects/project-05.jpg", title: "Red Granite Gravel Path", location: "Audley" },
  { src: "/images/projects/project-06.jpg", title: "Gold Block Paving Driveway", location: "Wolstanton" },
  { src: "/images/projects/project-07.jpg", title: "Stamped Concrete Driveway", location: "Silverdale" },
  { src: "/images/projects/project-08.jpg", title: "Tarmac Driveway", location: "Burslem" },
  { src: "/images/projects/project-09.jpg", title: "Rustic Block Paving", location: "Madeley" },
  { src: "/images/projects/project-10.jpg", title: "Patio & Garden Furniture", location: "Trentham" },
  { src: "/images/projects/project-11.jpg", title: "Resin Bound Driveway", location: "Leek" },
  { src: "/images/projects/project-12.jpg", title: "Indian Sandstone Patio", location: "Cheadle" },
  { src: "/images/projects/project-13.jpg", title: "Cobblestone Pathway", location: "Stafford" },
  { src: "/images/projects/project-14.jpg", title: "Garden Retaining Wall", location: "Uttoxeter" },
  { src: "/images/projects/project-15.jpg", title: "Natural Stone Steps", location: "Stone" },
  { src: "/images/projects/project-16.jpg", title: "Decorative Gravel Garden", location: "Eccleshall" },
  { src: "/images/projects/project-17.jpg", title: "Modern Composite Deck", location: "Newcastle" },
  { src: "/images/projects/project-18.jpg", title: "Block Paving Extension", location: "Hanley" },
  { src: "/images/projects/project-19.jpg", title: "Front Garden Transformation", location: "Longton" },
  { src: "/images/projects/project-20.jpg", title: "Sleeper Raised Beds", location: "Tunstall" },
  { src: "/images/projects/project-21.jpg", title: "Permeable Block Paving", location: "Fenton" },
  { src: "/images/projects/project-22.jpg", title: "Limestone Patio", location: "Biddulph" },
  { src: "/images/projects/project-23.jpg", title: "Driveway & Path Combo", location: "Alsager" },
  { src: "/images/projects/project-24.jpg", title: "Contemporary Garden Design", location: "Congleton" },
  { src: "/images/projects/project-25.jpg", title: "Charcoal Block Paving", location: "Crewe" },
  { src: "/images/projects/project-26.jpg", title: "Porcelain Patio Tiles", location: "Sandbach" },
  { src: "/images/projects/project-27.jpg", title: "Garden Boundary Wall", location: "Nantwich" },
  { src: "/images/projects/project-28.jpg", title: "Buff Sandstone Driveway", location: "Market Drayton" },
  { src: "/images/projects/project-29.jpg", title: "Artificial Grass Install", location: "Newport" },
  { src: "/images/projects/project-30.jpg", title: "Patterned Concrete Path", location: "Whitchurch" },
  { src: "/images/projects/project-31.jpg", title: "Curved Block Paving", location: "Wem" },
  { src: "/images/projects/project-32.jpg", title: "Granite Sett Edging", location: "Shrewsbury" },
  { src: "/images/projects/project-33.jpg", title: "Split-Level Patio", location: "Telford" },
  { src: "/images/projects/project-34.jpg", title: "Monoblock Driveway", location: "Bridgnorth" },
  { src: "/images/projects/project-35.jpg", title: "Garden Drainage System", location: "Much Wenlock" },
  { src: "/images/projects/project-36.jpg", title: "York Stone Pathway", location: "Ludlow" },
  { src: "/images/projects/project-37.jpg", title: "Herringbone Apron Drive", location: "Church Stretton" },
  { src: "/images/projects/project-38.jpg", title: "Raised Planter Walls", location: "Oswestry" },
  { src: "/images/projects/project-39.jpg", title: "Tarmac & Block Border", location: "Whitchurch" },
  { src: "/images/projects/project-40.jpg", title: "Full Rear Garden Build", location: "Ellesmere" },
  { src: "/images/projects/project-41.jpg", title: "Porcelain Tile Driveway", location: "Wigan" },
  { src: "/images/projects/project-42.jpg", title: "Cottage Garden Path", location: "Buxton" },
  { src: "/images/projects/project-43.jpg", title: "Reclaimed Brick Paving", location: "Macclesfield" },
  { src: "/images/projects/project-44.jpg", title: "Low-Maintenance Frontage", location: "Stockport" },
  { src: "/images/projects/project-45.jpg", title: "Granite Paving Driveway", location: "Altrincham" },
  { src: "/images/projects/project-46.jpg", title: "Sandstone & Gravel Mix", location: "Wilmslow" },
  { src: "/images/projects/project-47.jpg", title: "Driveway Renovation", location: "Knutsford" },
];

/* Google review images */
const reviewImages = [
  { src: "/images/reviews/review-01.jpg", title: "Customer Review", reviewer: "Google Review" },
  { src: "/images/reviews/review-02.jpg", title: "Customer Review", reviewer: "Google Review" },
  { src: "/images/reviews/review-03.jpg", title: "Customer Review", reviewer: "Google Review" },
  { src: "/images/reviews/review-04.jpg", title: "Customer Review", reviewer: "Google Review" },
  { src: "/images/reviews/review-05.jpg", title: "Customer Review", reviewer: "Google Review" },
  { src: "/images/reviews/review-06.jpg", title: "Customer Review", reviewer: "Google Review" },
  { src: "/images/reviews/review-08.jpg", title: "Customer Review", reviewer: "Google Review" },
  { src: "/images/reviews/review-09.jpg", title: "Customer Review", reviewer: "Google Review" },
];

/* Aspect ratios for visual variety */
const aspects = ["4/5", "3/4", "1/1", "4/3", "3/4", "4/5", "1/1", "4/3", "3/4", "4/5"];

export default function PortfolioPage() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const reviewHeadingRef = useRef<HTMLDivElement>(null);

  /* GSAP scroll-triggered reveal for gallery items */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1, ease: "power2.out",
            scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
          }
        );
      }

      // Review heading reveal
      if (reviewHeadingRef.current) {
        gsap.fromTo(
          reviewHeadingRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 1, ease: "power2.out",
            scrollTrigger: { trigger: reviewHeadingRef.current, start: "top 85%" },
          }
        );
      }

      // Gallery items
      const galleryItems = document.querySelectorAll(".gallery-item");
      galleryItems.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 92%",
              end: "top 50%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Review items
      const reviewItems = document.querySelectorAll(".review-item");
      reviewItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  /* Split project images into columns for masonry */
  const items = projectImages.map((img, i) => ({
    ...img,
    aspect: aspects[i % aspects.length],
    key: i,
  }));

  const col2_a = items.filter((_, i) => i % 2 === 0);
  const col2_b = items.filter((_, i) => i % 2 === 1);
  const col3_a = items.filter((_, i) => i % 3 === 0);
  const col3_b = items.filter((_, i) => i % 3 === 1);
  const col3_c = items.filter((_, i) => i % 3 === 2);

  const renderImage = (img: (typeof items)[0]) => (
    <div
      key={img.key}
      className="gallery-item group relative overflow-hidden"
      style={{ borderRadius: "4px", marginBottom: "12px", opacity: 0 }}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: img.aspect }}>
        <Image
          src={img.src}
          alt={img.title}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          className="absolute inset-0 flex flex-col items-start justify-end p-4 md:p-5 opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ background: "linear-gradient(transparent 30%, rgba(0,0,0,0.6))" }}
        >
          <p className="text-white/50 text-[10px] tracking-[0.2em] uppercase mb-1">
            {img.location}
          </p>
          <p className="text-white text-sm font-medium leading-snug">
            {img.title}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <InnerPageLayout>
      <style jsx>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-animate {
          opacity: 0;
          animation: heroFadeUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .hero-animate-1 { animation-delay: 0.3s; }
        .hero-animate-2 { animation-delay: 0.45s; }
        .hero-animate-3 { animation-delay: 0.6s; }
        .hero-animate-4 { animation-delay: 0.75s; }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 0.7; transform: translateY(6px); }
        }
      `}</style>

      {/* Hero */}
      <section
        className="relative w-full overflow-hidden flex items-center justify-center"
        style={{ height: "70vh", minHeight: "450px" }}
      >
        <Image
          src="/images/portfolio-hero-hd.png"
          alt="Portfolio — Gold Block Paving Driveway"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.55) 100%)" }}
        />
        <div className="relative z-10 text-center px-6">
          <p
            className="hero-animate hero-animate-1 tracking-[0.3em] mb-4"
            style={{ fontSize: "clamp(10px, 1vw, 12px)", textTransform: "uppercase", fontWeight: 400, color: "rgba(255,255,255,0.85)" }}
          >
            Our Work
          </p>
          <h1
            className="hero-animate hero-animate-2 font-display"
            style={{
              fontSize: "clamp(36px, 6vw, 76px)",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "0.02em",
              color: "#FFFFFF",
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}
          >
            Portfolio
          </h1>
          <div
            className="hero-animate hero-animate-3 mx-auto mt-6"
            style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.5)" }}
          />
          <p
            className="hero-animate hero-animate-4 mt-5 max-w-md mx-auto"
            style={{ fontSize: "15px", lineHeight: 1.8, color: "rgba(255,255,255,0.9)" }}
          >
            Scroll through our completed transformations
          </p>
        </div>
        {/* Scroll indicator */}
        <div className="hero-animate hero-animate-4 absolute bottom-8 left-1/2 -translate-x-1/2">
          <div
            className="w-[1px] h-10"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.5))",
              animation: "scrollPulse 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* Section heading */}
      <section style={{ background: "#f7f6f3" }} className="pt-16 pb-6 md:pt-20 md:pb-8">
        <div className="container-custom text-center">
          <h2
            ref={headingRef}
            className="font-display"
            style={{
              fontSize: "clamp(24px, 3.5vw, 48px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--charcoal)",
              lineHeight: 1.2,
              opacity: 0,
            }}
          >
            Our Projects
          </h2>
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{ color: "rgba(0,0,0,0.45)", fontSize: "14px", lineHeight: 1.8 }}
          >
            Completed driveways, patios, gardens and landscaping projects across Staffordshire
          </p>
        </div>
      </section>

      {/* Masonry gallery — all 47 projects */}
      <section ref={galleryRef} style={{ background: "#f7f6f3" }} className="pb-10 md:pb-16">
        <div className="container-custom">
          {/* Mobile: single column */}
          <div className="block md:hidden">
            <div className="flex flex-col gap-3">
              {items.map((img) => renderImage(img))}
            </div>
          </div>

          {/* Tablet: two columns */}
          <div className="hidden md:flex lg:hidden gap-3">
            <div className="flex-1 flex flex-col">
              {col2_a.map((img) => renderImage(img))}
            </div>
            <div className="flex-1 flex flex-col" style={{ marginTop: "50px" }}>
              {col2_b.map((img) => renderImage(img))}
            </div>
          </div>

          {/* Desktop: three columns with offset */}
          <div className="hidden lg:flex gap-4">
            <div className="flex-1 flex flex-col">
              {col3_a.map((img) => renderImage(img))}
            </div>
            <div className="flex-1 flex flex-col" style={{ marginTop: "80px" }}>
              {col3_b.map((img) => renderImage(img))}
            </div>
            <div className="flex-1 flex flex-col" style={{ marginTop: "40px" }}>
              {col3_c.map((img) => renderImage(img))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews section */}
      <section style={{ background: "#edeae4" }} className="py-16 md:py-20">
        <div className="container-custom">
          <div ref={reviewHeadingRef} className="text-center mb-12" style={{ opacity: 0 }}>
            <p
              className="tracking-[0.3em] mb-3"
              style={{ fontSize: "11px", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", fontWeight: 400 }}
            >
              4.9 Stars on Google
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(24px, 3.5vw, 48px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--charcoal)",
                lineHeight: 1.2,
              }}
            >
              What Our Customers Share
            </h2>
            <p
              className="mt-4 max-w-lg mx-auto"
              style={{ color: "rgba(0,0,0,0.45)", fontSize: "14px", lineHeight: 1.8 }}
            >
              Real photos from our 54 five-star Google reviews
            </p>
          </div>

          {/* Review images grid */}
          <div ref={reviewRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {reviewImages.map((img, i) => (
              <div
                key={i}
                className="review-item group relative overflow-hidden"
                style={{ borderRadius: "4px", opacity: 0 }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src={img.src}
                    alt={`Customer review photo ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ background: "linear-gradient(transparent 50%, rgba(0,0,0,0.5))" }}
                  >
                    <div className="flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24" stroke="none">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-white text-xs font-medium">Google Review</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Ready to Transform Your Space?
          </h2>
          <p
            className="max-w-xl mx-auto mb-8"
            style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.8 }}
          >
            Every project in our portfolio began with a simple conversation.
            Get in touch for a free, no-obligation quote.
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
            Get a Free Quote
          </a>
        </div>
      </section>
    </InnerPageLayout>
  );
}
