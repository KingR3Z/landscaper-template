"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/homepage";
import { useReveal } from "@/hooks/useReveal";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useReveal(".reveal-item");

  useEffect(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [activeTab]);

  const tab = servicesData.tabs[activeTab];

  return (
    <section ref={sectionRef} className="bg-white">
      {/* Full-width Tab Headers — evenly spaced like reference */}
      <div
        className="reveal-item"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${servicesData.tabs.length}, 1fr)`,
          borderTop: "1px solid #e8e6e1",
          borderBottom: "1px solid #e8e6e1",
        }}
      >
        {servicesData.tabs.map((t, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className="py-5 text-center transition-all duration-300"
            style={{
              fontSize: "clamp(10px, 0.9vw, 13px)",
              letterSpacing: "0.15em",
              fontWeight: 400,
              fontFamily: "var(--font-body)",
              color: i === activeTab ? "var(--charcoal)" : "var(--warm-grey)",
              background: i === activeTab ? "var(--sage)" : "transparent",
              border: "none",
              borderRight: i < servicesData.tabs.length - 1 ? "1px solid #e8e6e1" : "none",
              cursor: "pointer",
              textTransform: "uppercase" as const,
              padding: "20px 8px",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab Content — image left, text right */}
      <div className="section-padding">
        <div className="container-custom">
          <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image — left side, tall arch-shaped like reference */}
            <div className="relative overflow-hidden" style={{ borderRadius: "300px 300px 0 0", aspectRatio: "3/4" }}>
              <Image
                src={tab.image}
                alt={tab.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text — right side */}
            <div>
              <h3
                className="font-display mb-6"
                style={{
                  fontSize: "clamp(22px, 2.5vw, 34px)",
                  fontWeight: 400,
                  color: "var(--charcoal)",
                  lineHeight: 1.3,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase" as const,
                }}
              >
                {tab.title}
              </h3>
              <p className="mb-6 leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                {tab.text}
              </p>
              <p className="mb-8" style={{ color: "var(--warm-grey)", fontSize: "15px", fontStyle: "italic" }}>
                {tab.tagline}
              </p>
              <Link
                href={tab.cta.href}
                className="inline-flex items-center gap-3"
                style={{
                  padding: "12px 28px",
                  background: "var(--sage)",
                  color: "var(--charcoal)",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 400,
                  borderRadius: "50px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                {tab.cta.label} <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
