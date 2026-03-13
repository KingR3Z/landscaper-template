"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { heroData } from "@/data/homepage";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
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
    <section ref={sectionRef} className="relative w-full overflow-hidden" style={{ height: "100vh", minHeight: "600px" }}>
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
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center container-custom">
        <h1
          ref={titleRef}
          className="font-display text-white max-w-3xl"
          style={{
            fontSize: "clamp(36px, 5vw, 72px)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-0.5px",
            opacity: 0,
            whiteSpace: "pre-line",
          }}
        >
          {heroData.title}
        </h1>
        <p
          ref={subtitleRef}
          className="mt-6 text-white/70 tracking-[0.25em]"
          style={{ fontSize: "clamp(11px, 1.2vw, 14px)", fontWeight: 400, opacity: 0 }}
        >
          {heroData.subtitle}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs tracking-widest" style={{ writingMode: "vertical-lr" }}>
          scroll
        </span>
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  );
}
