"use client";

import Image from "next/image";
import { whyChooseData } from "@/data/homepage";
import { useReveal } from "@/hooks/useReveal";

export default function WhyChoose() {
  const sectionRef = useReveal(".reveal-item", 0.1);

  return (
    <section ref={sectionRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "600px" }}>
        {/* Left: Sage bg with text */}
        <div
          className="flex items-center"
          style={{ background: "#D5DDD1", padding: "clamp(40px, 5vw, 80px)" }}
        >
          <div>
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
            <p className="reveal-item mt-6">
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
            </p>
          </div>
        </div>

        {/* Right: Full-height image */}
        <div className="reveal-item relative" style={{ minHeight: "400px" }}>
          <Image
            src={whyChooseData.image}
            alt="Why choose Hartwood Landscapes"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
