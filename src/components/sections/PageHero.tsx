"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  overline?: string;
  image: string;
  compact?: boolean;
  centered?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PageHero({
  title,
  subtitle,
  overline,
  image,
  compact = false,
  centered = false,
  ctaLabel,
  ctaHref,
}: PageHeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.5 }
      );
    }
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: compact ? "50vh" : "70vh", minHeight: compact ? "350px" : "500px" }}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div
        className={`absolute inset-0 flex flex-col ${
          centered ? "justify-center items-center text-center" : "justify-end"
        } container-custom ${centered ? "" : "pb-16"}`}
      >
        {overline && (
          <p
            className="text-white/60 tracking-[0.25em] mb-4"
            style={{ fontSize: "clamp(10px, 1vw, 13px)", textTransform: "uppercase", fontWeight: 400 }}
          >
            {overline}
          </p>
        )}
        <h1
          ref={titleRef}
          className={`font-display text-white ${centered ? "max-w-3xl" : "max-w-2xl"}`}
          style={{
            fontSize: centered ? "clamp(36px, 5vw, 72px)" : "clamp(32px, 4.5vw, 64px)",
            fontWeight: 400,
            lineHeight: 1.15,
            opacity: 0,
            color: "#fff",
            textTransform: centered ? "uppercase" as const : "none" as const,
            letterSpacing: centered ? "0.05em" : "0",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            ref={subtitleRef}
            className="mt-4 text-white/60 tracking-wide"
            style={{ fontSize: "clamp(13px, 1.2vw, 16px)", opacity: 0 }}
          >
            {subtitle}
          </p>
        )}
        {ctaLabel && ctaHref && (
          <div className="mt-8">
            <Link
              href={ctaHref}
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
              {ctaLabel} <span>→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
