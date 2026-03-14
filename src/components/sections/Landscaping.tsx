"use client";

import Image from "next/image";
import Link from "next/link";
import { landscapingData } from "@/data/homepage";
import { useReveal } from "@/hooks/useReveal";

export default function Landscaping() {
  const sectionRef = useReveal(".reveal-item");

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "600px" }}>
        {/* Image — left side, full height, edge-to-edge */}
        <div className="reveal-item relative order-2 lg:order-1" style={{ minHeight: "400px" }}>
          <Image
            src={landscapingData.image}
            alt="Luxury landscaping build"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Text — right side with cream bg */}
        <div
          className="order-1 lg:order-2 flex items-center"
          style={{ background: "#D5DDD1", padding: "clamp(40px, 5vw, 80px)" }}
        >
          <div>
            <h2
              className="reveal-item font-display mb-8"
              style={{
                fontSize: "clamp(26px, 3vw, 38px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--charcoal)",
                lineHeight: 1.3,
              }}
            >
              {landscapingData.title}
            </h2>
            {landscapingData.paragraphs.map((p, i) => (
              <p
                key={i}
                className="reveal-item mb-5 leading-relaxed"
                style={{ color: "var(--warm-grey)", fontSize: "15px" }}
              >
                {p}
              </p>
            ))}
            <div className="reveal-item mt-8">
              <Link
                href={landscapingData.cta.href}
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
                {landscapingData.cta.label} <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
