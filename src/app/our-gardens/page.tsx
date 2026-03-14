"use client";

import Image from "next/image";
import Link from "next/link";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import { useReveal } from "@/hooks/useReveal";
import { projectsShowcase } from "@/data/homepage";

export default function OurGardensPage() {
  const gridRef = useReveal(".reveal-item");
  const descRef = useReveal(".reveal-item");

  return (
    <InnerPageLayout>
      <PageHero
        title="Our Signature Luxury Gardens"
        overline="WHERE LUXURY MEETS OUTDOORS"
        image="/images/projects/project-04.jpg"
        centered
        ctaLabel="Begin Your Bespoke Garden Journey"
        ctaHref="/contact"
      />

      {/* Projects Grid */}
      <section ref={gridRef} className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsShowcase.map((project, i) => (
              <Link
                key={i}
                href={`/our-gardens/${project.slug}`}
                className="reveal-item group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-4 img-hover-zoom">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(transparent 40%, rgba(0,0,0,0.5))" }}
                  >
                    <span className="text-white text-sm tracking-wide">View Project →</span>
                  </div>
                </div>
                <h3 className="font-display text-xl" style={{ color: "var(--charcoal)" }}>
                  {project.title}
                </h3>
                <p className="text-sm mt-1" style={{ color: "var(--warm-grey)" }}>
                  {project.location}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Description */}
      <section ref={descRef} style={{ background: "var(--cream)" }} className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2
              className="reveal-item font-display mb-6"
              style={{
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--charcoal)",
                lineHeight: 1.3,
              }}
            >
              Creating Beautiful Outdoor Spaces That Enhance Our Homes.
            </h2>
            <p className="reveal-item leading-relaxed mb-5" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
              Each of our projects represents a unique collaboration between designer and homeowner. From compact London courtyards to sweeping country estates, every garden is shaped by its context, its architecture, and the people who will enjoy it for years to come.
            </p>
            <p className="reveal-item leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
              Browse our portfolio to discover the range and depth of our work. Every project shown here was designed, managed, and built by the Hartwood Landscapes team.
            </p>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
