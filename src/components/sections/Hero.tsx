"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { heroData } from "@/data/homepage";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
      );
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.7 }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100vh - 70px)", marginTop: "70px", minHeight: "500px" }}
    >
      {/* Background Image */}
      <Image
        src={heroData.image}
        alt="Luxury garden landscape"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content — bottom-left aligned like reference */}
      <div
        className="absolute inset-0 flex flex-col justify-end"
        style={{ padding: "0 clamp(60px, 6vw, 120px) clamp(60px, 8vh, 120px)" }}
      >
        <h1
          ref={titleRef}
          className="font-display text-white max-w-3xl"
          style={{
            fontSize: "clamp(36px, 4.5vw, 68px)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.15,
            letterSpacing: "-0.5px",
            whiteSpace: "pre-line",
          }}
        >
          {heroData.title}
        </h1>
        <p
          ref={subtitleRef}
          className="mt-6 text-white/60 tracking-[0.25em]"
          style={{ fontSize: "clamp(11px, 1vw, 14px)", fontWeight: 400, textTransform: "uppercase" }}
        >
          {heroData.subtitle}
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3"
            style={{
              padding: "14px 32px",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              color: "var(--white)",
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.5px",
              textTransform: "uppercase" as const,
              borderRadius: "50px",
              border: "1px solid rgba(255,255,255,0.3)",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            Start Now <span>→</span>
          </Link>
        </div>
      </div>

      {/* Scroll-to-top arrow — bottom right like reference */}
      <div
        className="absolute bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        style={{ background: "rgba(181, 191, 176, 0.6)", backdropFilter: "blur(4px)" }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M7 12V2M2 7l5-5 5 5" />
        </svg>
      </div>
    </section>
  );
}
