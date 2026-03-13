"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "next/image";
import Link from "next/link";
import { projectsShowcase } from "@/data/homepage";

gsap.registerPlugin(ScrollTrigger);

export default function OurGardensPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.querySelectorAll(".garden-card"),
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: "power2.out",
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
        title="Our Gardens"
        subtitle="A curated collection of our signature projects"
        image="/images/projects/project-04.jpg"
      />

      {/* Intro */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2
              className="font-display mb-6"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.2 }}
            >
              Every Garden Tells a Story
            </h2>
            <p className="leading-relaxed mb-5" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
              Each of our projects represents a unique collaboration between designer and homeowner. From compact London courtyards to sweeping country estates, every garden is shaped by its context, its architecture, and the people who will enjoy it for years to come.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
              Browse our portfolio to discover the range and depth of our work. Every project shown here was designed, managed, and built by the Hartwood Landscapes team.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ background: "var(--cream)" }} className="section-padding">
        <div className="container-custom">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsShowcase.map((project, i) => (
              <Link
                key={i}
                href={`/our-gardens/${project.slug}`}
                className="garden-card group block"
                style={{ opacity: 0 }}
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

      {/* CTA Band */}
      <section style={{ background: "var(--sage)" }} className="py-20">
        <div className="container-custom text-center">
          <h2
            className="font-display mb-4"
            style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.3 }}
          >
            Inspired by What You See?
          </h2>
          <p className="mb-8 mx-auto max-w-lg" style={{ color: "var(--charcoal)", fontSize: "15px", opacity: 0.75 }}>
            Every project begins with a conversation. Let&apos;s discuss how we can transform your outdoor space.
          </p>
          <Link href="/contact" className="btn-primary" style={{ background: "var(--charcoal)", color: "var(--white)" }}>
            Start Your Project <span>→</span>
          </Link>
        </div>
      </section>
    </InnerPageLayout>
  );
}
