"use client";

import Image from "next/image";
import Link from "next/link";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import { useReveal } from "@/hooks/useReveal";
import {
  aboutHeaderData,
  coreValues,
  directorData,
  missionData,
  partnersData,
  awardsData,
} from "@/data/about";

export default function AboutPage() {
  // Each section gets its own useReveal — IntersectionObserver based (no rAF dependency)
  const valuesRef = useReveal(".value-card");
  const directorRef = useReveal(".director-reveal");
  const missionRef = useReveal(".mission-reveal");
  const partnersRef = useReveal(".partner-reveal");
  const awardsRef = useReveal(".award-reveal");

  return (
    <InnerPageLayout>
      {/* About Header — dark sage bg left + image right */}
      {/* Uses CSS @keyframes animation (compositor-driven, always works) */}
      <section style={{ marginTop: "100px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "70vh" }}>
          <div
            className="flex items-center"
            style={{ background: "#7A8B7F", padding: "clamp(40px, 5vw, 80px)" }}
          >
            <div>
              <p
                className="about-hero-item tracking-[0.2em] mb-4"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textTransform: "uppercase",
                  fontSize: "clamp(10px, 1vw, 13px)",
                  fontWeight: 400,
                }}
              >
                {aboutHeaderData.overline}
              </p>
              <h1
                className="about-hero-item font-display mb-8"
                style={{
                  fontSize: "clamp(28px, 3vw, 44px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "#FFFFFF",
                  lineHeight: 1.3,
                }}
              >
                {aboutHeaderData.heading}
              </h1>
              {aboutHeaderData.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="about-hero-item mb-5 leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px" }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="about-hero-image relative" style={{ minHeight: "400px" }}>
            <Image
              src={aboutHeaderData.image}
              alt="Garden & Driveways studio"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Core Values — 3 outlined cards with stagger animation */}
      <section className="bg-white section-padding">
        <div className="container-custom" ref={valuesRef}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="value-card reveal-item"
                style={{
                  padding: "clamp(28px, 3vw, 40px)",
                  border: "1px solid #e8e8e8",
                  borderRadius: "8px",
                }}
              >
                <h3
                  className="font-display mb-5"
                  style={{
                    fontSize: "clamp(20px, 1.5vw, 26px)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "var(--charcoal)",
                  }}
                >
                  {value.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Director — sage bg, title slides from left, image clips in */}
      <section style={{ background: "#C5CEC0" }}>
        <div ref={directorRef} className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "600px" }}>
          <div
            className="flex items-center"
            style={{ padding: "clamp(40px, 5vw, 80px)" }}
          >
            <div>
              <div>
                <h2
                  className="director-reveal reveal-slide-left"
                  style={{
                    fontSize: "clamp(36px, 4vw, 56px)",
                    fontWeight: 300,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--charcoal)",
                    lineHeight: 1.2,
                  }}
                >
                  DESIGN
                </h2>
                <h2
                  className="director-reveal reveal-slide-left"
                  style={{
                    fontSize: "clamp(36px, 4vw, 56px)",
                    fontWeight: 300,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--charcoal)",
                    lineHeight: 1.2,
                    marginBottom: "12px",
                  }}
                >
                  DIRECTOR
                </h2>
              </div>
              <div>
                <h3
                  className="director-reveal reveal-item font-display mb-8"
                  style={{
                    fontSize: "clamp(24px, 2.5vw, 36px)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "var(--charcoal)",
                    lineHeight: 1.3,
                  }}
                >
                  {directorData.name}
                </h3>
                {directorData.bio.map((p, i) => (
                  <p
                    key={i}
                    className="director-reveal reveal-item mb-4 leading-relaxed"
                    style={{ color: "var(--warm-grey)", fontSize: "14px" }}
                  >
                    {p}
                  </p>
                ))}
                <div className="director-reveal reveal-item mt-6">
                  <Link
                    href={directorData.cta.href}
                    className="inline-flex items-center gap-3"
                    style={{
                      padding: "12px 28px",
                      background: "var(--sage)",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      fontWeight: 400,
                      borderRadius: "50px",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {directorData.cta.label} <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="director-reveal reveal-clip-right relative" style={{ minHeight: "400px" }}>
            <Image
              src={directorData.image}
              alt={directorData.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Elevating Outdoor Living — lines slide up, text fades in */}
      <section ref={missionRef} style={{ background: "#8A9685", padding: "clamp(60px, 8vw, 120px) 0" }}>
        <div className="container-custom" style={{ maxWidth: "700px" }}>
          <div style={{ marginBottom: "48px" }}>
            <h2
              className="mission-reveal reveal-slide-up"
              style={{
                fontSize: "clamp(32px, 3.5vw, 48px)",
                fontWeight: 300,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                lineHeight: 1.25,
              }}
            >
              ELEVATING
            </h2>
            <h2
              className="mission-reveal reveal-slide-up"
              style={{
                fontSize: "clamp(32px, 3.5vw, 48px)",
                fontWeight: 300,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                lineHeight: 1.25,
              }}
            >
              OUTDOOR
            </h2>
            <h2
              className="mission-reveal reveal-slide-up"
              style={{
                fontSize: "clamp(32px, 3.5vw, 48px)",
                fontWeight: 300,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                lineHeight: 1.25,
              }}
            >
              LIVING
            </h2>
          </div>
          <h3
            className="mission-reveal reveal-item font-display mb-8"
            style={{
              fontSize: "clamp(20px, 2vw, 28px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#FFFFFF",
              lineHeight: 1.3,
            }}
          >
            {missionData.heading}
          </h3>
          {missionData.paragraphs.map((p, i) => (
            <p
              key={i}
              className="mission-reveal reveal-item mb-5 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px" }}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Visionary Partners — heading + cards scale in with bounce */}
      <section ref={partnersRef} className="bg-white section-padding">
        <div className="container-custom text-center">
          <h2
            className="partner-reveal reveal-item font-display mb-12"
            style={{
              fontSize: "clamp(26px, 3vw, 38px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--charcoal)",
              lineHeight: 1.3,
            }}
          >
            {partnersData.heading}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partnersData.partners.map((partner, i) => (
              <div
                key={i}
                className="partner-reveal reveal-scale-bounce flex items-center justify-center"
                style={{
                  height: "100px",
                  border: "1px solid #e8e8e8",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <p
                  className="font-display"
                  style={{
                    fontSize: "clamp(14px, 1.2vw, 18px)",
                    color: "var(--warm-grey)",
                    fontStyle: "italic",
                  }}
                >
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards — heading + cards stagger slide up */}
      <section ref={awardsRef} className="section-padding" style={{ background: "var(--cream)" }}>
        <div className="container-custom">
          <h2
            className="award-reveal reveal-item font-display mb-12 text-center"
            style={{
              fontSize: "clamp(26px, 3vw, 38px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--charcoal)",
              lineHeight: 1.3,
            }}
          >
            {awardsData.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awardsData.awards.map((award, i) => (
              <div
                key={i}
                className="award-reveal reveal-item flex items-center justify-center"
                style={{
                  background: "rgba(44, 44, 44, 0.85)",
                  borderRadius: "8px",
                  padding: "clamp(32px, 3vw, 48px)",
                  textAlign: "center",
                }}
              >
                <div>
                  <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    {award.category}
                  </p>
                  <p
                    className="font-display"
                    style={{
                      color: "var(--white)",
                      fontSize: "clamp(18px, 1.5vw, 24px)",
                      fontStyle: "italic",
                      lineHeight: 1.3,
                      margin: "8px 0",
                    }}
                  >
                    Best of Houzz
                  </p>
                  <p style={{ color: "var(--white)", fontSize: "11px", letterSpacing: "0.1em" }}>
                    Winner
                  </p>
                  <p
                    className="font-display"
                    style={{ color: "var(--gold)", fontSize: "clamp(28px, 2vw, 36px)", fontWeight: 400, marginTop: "8px" }}
                  >
                    {award.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
