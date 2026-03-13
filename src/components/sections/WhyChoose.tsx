"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { whyChooseData } from "@/data/homepage";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChoose() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".why-reveal"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ minHeight: "80vh" }}>
      {/* Background Image */}
      <Image
        src={whyChooseData.image}
        alt="Luxury garden"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Card */}
      <div className="relative z-10 flex items-center justify-center" style={{ minHeight: "80vh" }}>
        <div
          className="max-w-2xl mx-auto p-12 md:p-16"
          style={{ background: "rgba(255, 255, 255, 0.92)", backdropFilter: "blur(8px)" }}
        >
          <h2
            className="why-reveal font-display mb-8"
            style={{
              fontSize: "clamp(28px, 3vw, 42px)",
              fontWeight: 400,
              color: "var(--charcoal)",
              lineHeight: 1.2,
              opacity: 0,
            }}
          >
            {whyChooseData.title}
          </h2>
          {whyChooseData.paragraphs.map((p, i) => (
            <p
              key={i}
              className="why-reveal mb-5 leading-relaxed"
              style={{ color: "var(--warm-grey)", fontSize: "14px", opacity: 0 }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
