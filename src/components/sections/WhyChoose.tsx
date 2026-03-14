"use client";

import Image from "next/image";
import Link from "next/link";
import { whyChooseData } from "@/data/homepage";
import { useReveal } from "@/hooks/useReveal";

export default function WhyChoose() {
  const sectionRef = useReveal(".reveal-item", 0.1);

  return (
    <section ref={sectionRef} className="relative" style={{ minHeight: "600px" }}>
      {/* Full-width background image */}
      <Image
        src={whyChooseData.image}
        alt="Why choose Hartwood Landscapes"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Centered card overlay */}
      <div
        className="relative z-10 flex items-center justify-center"
        style={{ minHeight: "600px", padding: "clamp(40px, 5vw, 80px) clamp(20px, 3vw, 40px)" }}
      >
        <div
          className="reveal-item"
          style={{
            background: "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(4px)",
            maxWidth: "700px",
            width: "100%",
            padding: "clamp(36px, 4vw, 64px)",
          }}
        >
          <h2
            className="reveal-item font-display mb-8"
            style={{
              fontSize: "clamp(26px, 3vw, 40px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--charcoal)",
              lineHeight: 1.3,
            }}
          >
            {whyChooseData.title}
          </h2>
          {whyChooseData.paragraphs.map((p, i) => (
            <p
              key={i}
              className="reveal-item mb-5 leading-relaxed"
              style={{ color: "var(--warm-grey)", fontSize: "15px" }}
            >
              {p}
            </p>
          ))}
          <div className="reveal-item flex items-center gap-6 mt-8 flex-wrap">
            <Link
              href="/about"
              className="inline-flex items-center gap-2"
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
              About Us <span>→</span>
            </Link>
            <a
              href="tel:01892489923"
              className="font-display"
              style={{
                color: "var(--charcoal)",
                fontSize: "clamp(18px, 2vw, 24px)",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              01892 489 923
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
