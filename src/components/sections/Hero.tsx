"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { heroData } from "@/data/homepage";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split title into lines for staggered animation
      const titleEl = titleRef.current;
      if (titleEl) {
        const text = titleEl.textContent || "";
        const lines = text.split("\n").filter(Boolean);

        if (lines.length > 1) {
          // Multi-line: wrap each line in a span for staggered reveal
          titleEl.innerHTML = lines
            .map((line) => `<span class="hero-line" style="display:block;opacity:0;transform:translateY(60px)">${line}</span>`)
            .join("");

          gsap.to(".hero-line", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.15,
            delay: 0.3,
          });
        } else {
          // Single line fallback
          gsap.fromTo(
            titleEl,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
          );
        }
      }

      // Subtitle fades in after title
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.8 }
      );

      // CTA button fades in last
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 1.1 }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100vh - 100px)", marginTop: "100px", minHeight: "500px" }}
    >
      {/* Background Video — project-03 herringbone block paving, animated with Kling 3.0 */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-driveway-4k.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay — strong gradient for white text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.15) 100%)",
          zIndex: 2,
        }}
      />

      {/* Content — bottom-left aligned like reference */}
      <div
        className="absolute inset-0 flex flex-col justify-end"
        style={{ padding: "0 clamp(24px, 6vw, 120px) clamp(40px, 8vh, 120px)", zIndex: 3 }}
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
            color: "#FFFFFF",
            textShadow: "0 2px 40px rgba(0,0,0,0.6), 0 1px 10px rgba(0,0,0,0.4)",
          }}
        >
          {heroData.title}
        </h1>
        <p
          ref={subtitleRef}
          className="mt-6 text-white/90 tracking-[0.25em]"
          style={{
            fontSize: "clamp(11px, 1vw, 14px)",
            fontWeight: 400,
            textTransform: "uppercase",
            textShadow: "0 1px 15px rgba(0,0,0,0.5)",
            opacity: 0,
          }}
        >
          {heroData.subtitle}
        </p>
        <div ref={ctaRef} className="mt-8" style={{ opacity: 0 }}>
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
        style={{ background: "rgba(181, 191, 176, 0.6)", backdropFilter: "blur(4px)", zIndex: 3 }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M7 12V2M2 7l5-5 5 5" />
        </svg>
      </div>
    </section>
  );
}
