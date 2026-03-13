"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  compact?: boolean;
}

export default function PageHero({ title, subtitle, image, compact = false }: PageHeroProps) {
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
      <div className="absolute inset-0 flex flex-col justify-end container-custom pb-16">
        <h1
          ref={titleRef}
          className="font-display text-white max-w-2xl"
          style={{
            fontSize: "clamp(32px, 4.5vw, 64px)",
            fontWeight: 400,
            lineHeight: 1.15,
            opacity: 0,
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
      </div>
    </section>
  );
}
