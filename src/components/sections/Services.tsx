"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/homepage";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".services-reveal"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

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
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        {/* Tab Headers */}
        <div className="services-reveal flex flex-wrap border-b" style={{ borderColor: "rgba(44,44,44,0.15)", opacity: 0 }}>
          {servicesData.tabs.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className="py-4 px-6 text-xs tracking-[0.15em] font-medium transition-all duration-300 relative"
              style={{
                color: i === activeTab ? "var(--charcoal)" : "var(--warm-grey)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              {t.label}
              {i === activeTab && (
                <span
                  className="absolute bottom-0 left-0 w-full h-[2px]"
                  style={{ background: "var(--sage-dark)" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={tab.image}
              alt={tab.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div>
            <h3
              className="font-display mb-6"
              style={{
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 400,
                color: "var(--charcoal)",
                lineHeight: 1.2,
              }}
            >
              {tab.title}
            </h3>
            <p className="mb-4 leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
              {tab.text}
            </p>
            <p className="mb-8 italic" style={{ color: "var(--charcoal)", fontSize: "15px" }}>
              {tab.tagline}
            </p>
            <Link href={tab.cta.href} className="btn-primary">
              {tab.cta.label} <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
