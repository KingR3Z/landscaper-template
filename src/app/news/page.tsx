"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const newsArticles = [
  {
    title: "RHS Chelsea Flower Show 2026: Our Preview",
    excerpt: "As the Chelsea Flower Show approaches, we reflect on this year's themes and what trends we're seeing in luxury garden design for the season ahead.",
    date: "15 February 2026",
    category: "Events",
    image: "/images/projects/project-01.jpg",
    slug: "chelsea-2026-preview",
  },
  {
    title: "The Art of Winter Garden Structure",
    excerpt: "A well-designed garden reveals its true architecture in winter. Discover how we use evergreen structure, sculptural planting, and hardscape to create year-round beauty.",
    date: "28 January 2026",
    category: "Design Insight",
    image: "/images/projects/project-03.jpg",
    slug: "winter-garden-structure",
  },
  {
    title: "Project Spotlight: Kensington Courtyard",
    excerpt: "A behind-the-scenes look at our latest completed project — a compact London courtyard transformed into a private urban retreat with layered planting and bespoke stonework.",
    date: "12 January 2026",
    category: "Projects",
    image: "/images/projects/project-05.jpg",
    slug: "kensington-courtyard-spotlight",
  },
  {
    title: "Best of Houzz 2026: Design & Service",
    excerpt: "We're proud to announce that Hartwood Landscapes has been awarded Best of Houzz 2026 for both Design and Service — reflecting our ongoing commitment to excellence.",
    date: "5 January 2026",
    category: "Awards",
    image: "/images/projects/project-07.jpg",
    slug: "best-of-houzz-2026",
  },
  {
    title: "Planting for Pollinators: A Designer's Guide",
    excerpt: "How we integrate pollinator-friendly planting into our luxury garden designs without compromising on aesthetics — because ecological responsibility and beauty aren't mutually exclusive.",
    date: "18 December 2025",
    category: "Sustainability",
    image: "/images/projects/project-02.jpg",
    slug: "planting-for-pollinators",
  },
  {
    title: "Material Palette: Natural Stone in Garden Design",
    excerpt: "From York stone to Portuguese limestone, we explore the materials that give our gardens their distinctive tactile quality and enduring character.",
    date: "2 December 2025",
    category: "Design Insight",
    image: "/images/projects/project-04.jpg",
    slug: "natural-stone-garden-design",
  },
];

export default function NewsPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.querySelectorAll(".news-card"),
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: "power2.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <InnerPageLayout>
      <PageHero
        title="News & Insights"
        subtitle="Design thinking, project stories, and industry updates"
        image="/images/projects/project-06.jpg"
        compact
      />

      {/* Featured Article */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden img-hover-zoom">
              <Image
                src={newsArticles[0].image}
                alt={newsArticles[0].title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <span
                className="text-xs tracking-[0.15em] mb-3 block"
                style={{ color: "var(--sage-dark)" }}
              >
                {newsArticles[0].category.toUpperCase()} — {newsArticles[0].date.toUpperCase()}
              </span>
              <h2
                className="font-display mb-4"
                style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.3 }}
              >
                {newsArticles[0].title}
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                {newsArticles[0].excerpt}
              </p>
              <Link href={`/news/${newsArticles[0].slug}`} className="btn-secondary">
                Read Article <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ background: "var(--cream)" }} className="section-padding">
        <div className="container-custom">
          <h2
            className="font-display mb-10"
            style={{ fontSize: "clamp(24px, 2.5vw, 34px)", fontWeight: 400, color: "var(--charcoal)" }}
          >
            Recent Articles
          </h2>
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article, i) => (
              <Link
                key={i}
                href={`/news/${article.slug}`}
                className="news-card group block"
                style={{ opacity: 0 }}
              >
                <div className="relative aspect-[3/2] overflow-hidden mb-4 img-hover-zoom">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <span
                  className="text-xs tracking-[0.15em] mb-2 block"
                  style={{ color: "var(--sage-dark)" }}
                >
                  {article.category.toUpperCase()}
                </span>
                <h3
                  className="font-display text-lg mb-2 group-hover:opacity-70 transition-opacity duration-300"
                  style={{ color: "var(--charcoal)", lineHeight: 1.3 }}
                >
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--warm-grey)" }}>
                  {article.excerpt}
                </p>
                <span className="text-xs" style={{ color: "var(--warm-grey)" }}>
                  {article.date}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-white section-padding">
        <div className="container-custom text-center">
          <h2
            className="font-display mb-4"
            style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.3 }}
          >
            Stay Inspired
          </h2>
          <p className="mb-8 mx-auto max-w-md" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
            Subscribe to receive design insights, project stories, and seasonal garden advice.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 text-sm rounded-full border focus:outline-none focus:ring-2"
              style={{ borderColor: "var(--sage)", focusRingColor: "var(--sage-dark)" } as React.CSSProperties}
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </InnerPageLayout>
  );
}
