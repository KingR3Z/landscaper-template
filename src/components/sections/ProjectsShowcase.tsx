"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsShowcase } from "@/data/homepage";
import { useReveal } from "@/hooks/useReveal";

export default function ProjectsShowcase() {
  const sectionRef = useReveal(".reveal-item");
  const [startIndex, setStartIndex] = useState(0);

  const visibleProjects = projectsShowcase.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < projectsShowcase.length) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(Math.max(0, projectsShowcase.length - 3));
    }
  };

  return (
    <section ref={sectionRef} style={{ background: "var(--white)" }} className="section-padding">
      <div style={{ padding: "0 clamp(24px, 3vw, 40px)" }}>
        {/* Heading */}
        <h2
          className="reveal-item font-display mb-12"
          style={{
            fontSize: "clamp(26px, 3vw, 40px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "var(--charcoal)",
            lineHeight: 1.3,
          }}
        >
          Explore our Award-Winning Luxury Gardens.
        </h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visibleProjects.map((project, i) => (
            <Link
              key={`${project.slug}-${startIndex}-${i}`}
              href="/portfolio"
              className="reveal-item group relative block overflow-hidden"
              style={{ aspectRatio: "4/3", borderRadius: "16px" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.3) 100%)" }}
              />
              {/* Title — top left */}
              <div className="absolute top-5 left-5 right-5">
                <p
                  className="font-display text-white"
                  style={{ fontSize: "clamp(16px, 1.5vw, 20px)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.3 }}
                >
                  {project.title}, {project.location}
                </p>
              </div>
              {/* Arrow — bottom left */}
              <div className="absolute bottom-5 left-5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M5 15L15 5M15 5H8M15 5V12" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation arrows — both left and right */}
        {projectsShowcase.length > 3 && (
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:opacity-70"
              style={{ border: "1px solid var(--charcoal)", background: "transparent", cursor: "pointer" }}
              aria-label="Previous projects"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--charcoal)" strokeWidth="1.5">
                <path d="M13 8H3M7 4L3 8l4 4" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:opacity-70"
              style={{ border: "1px solid var(--charcoal)", background: "transparent", cursor: "pointer" }}
              aria-label="Next projects"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--charcoal)" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
