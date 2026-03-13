"use client";

import Image from "next/image";
import Link from "next/link";
import { introData } from "@/data/homepage";
import { useReveal } from "@/hooks/useReveal";

export default function Intro() {
  const sectionRef = useReveal(".reveal-item");

  return (
    <section ref={sectionRef} style={{ background: "var(--cream)" }} className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text — left side */}
          <div>
            <h2
              className="reveal-item font-display mb-8"
              style={{
                fontSize: "clamp(28px, 3vw, 42px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--charcoal)",
                lineHeight: 1.3,
              }}
            >
              {introData.heading}
            </h2>
            {introData.text.map((p, i) => (
              <p
                key={i}
                className="reveal-item mb-5 leading-relaxed"
                style={{ color: "var(--warm-grey)", fontSize: "15px" }}
              >
                {p}
              </p>
            ))}
            <div className="reveal-item mt-10">
              <Link
                href={introData.cta.href}
                className="inline-flex items-center gap-3"
                style={{
                  padding: "12px 28px",
                  background: "var(--sage)",
                  color: "var(--charcoal)",
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase" as const,
                  borderRadius: "50px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                {introData.cta.label}
                <span style={{ fontSize: "16px" }}>📅</span>
              </Link>
            </div>
          </div>

          {/* Image — right side, LARGE CIRCLE masked like reference */}
          <div className="reveal-item relative flex justify-center" style={{ overflow: "visible" }}>
            <div
              className="relative overflow-hidden"
              style={{
                width: "min(580px, 42vw)",
                height: "min(580px, 42vw)",
                minWidth: "320px",
                minHeight: "320px",
                borderRadius: "50%",
                flexShrink: 0,
              }}
            >
              <Image
                src={introData.image}
                alt="Luxury garden design"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 580px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
