"use client";

import Image from "next/image";
import Link from "next/link";
import { philosophyData } from "@/data/homepage";
import { useReveal } from "@/hooks/useReveal";

export default function Philosophy() {
  const sectionRef = useReveal(".reveal-item");

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: "#D5DDD1" }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text — left side */}
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
              {philosophyData.title}
            </h2>
            {philosophyData.paragraphs.map((p, i) => (
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
                href={philosophyData.cta.href}
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
                {philosophyData.cta.label} <span>→</span>
              </Link>
            </div>
          </div>

          {/* Image — right side */}
          <div className="reveal-item relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={philosophyData.image}
                alt="Garden design philosophy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
