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
  const headerRef = useReveal(".reveal-item");
  const valuesRef = useReveal(".reveal-item");
  const directorRef = useReveal(".reveal-item");
  const missionRef = useReveal(".reveal-item");
  const partnersRef = useReveal(".reveal-item");
  const awardsRef = useReveal(".reveal-item");

  return (
    <InnerPageLayout>
      {/* About Header — dark sage bg left + image right (NO PageHero) */}
      <section ref={headerRef} style={{ marginTop: "70px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "70vh" }}>
          <div
            className="flex items-center"
            style={{ background: "#7A8B7F", padding: "clamp(40px, 5vw, 80px)" }}
          >
            <div>
              <p
                className="reveal-item text-xs tracking-[0.2em] mb-4"
                style={{ color: "rgba(255,255,255,0.7)", textTransform: "uppercase" }}
              >
                {aboutHeaderData.overline}
              </p>
              <h1
                className="reveal-item font-display mb-8"
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
                  className="reveal-item mb-5 leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px" }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="reveal-item relative" style={{ minHeight: "400px" }}>
            <Image
              src={aboutHeaderData.image}
              alt="Hartwood Landscapes studio"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Core Values — 3 cards */}
      <section ref={valuesRef} className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <div
                key={i}
                className="reveal-item text-center"
                style={{ padding: "clamp(24px, 3vw, 48px)" }}
              >
                <div
                  className="mx-auto mb-6 flex items-center justify-center"
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "#D5DDD1",
                  }}
                >
                  {value.icon === "shield" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--charcoal)" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  )}
                  {value.icon === "lightbulb" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--charcoal)" strokeWidth="1.5">
                      <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
                    </svg>
                  )}
                  {value.icon === "heart" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--charcoal)" strokeWidth="1.5">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  )}
                </div>
                <h3
                  className="font-display mb-4"
                  style={{ fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: 400, color: "var(--charcoal)" }}
                >
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--warm-grey)" }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Director — image left + sage bg right */}
      <section ref={directorRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "600px" }}>
          <div className="reveal-item relative" style={{ minHeight: "400px" }}>
            <Image
              src={directorData.image}
              alt={directorData.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div
            className="flex items-center"
            style={{ background: "#D5DDD1", padding: "clamp(40px, 5vw, 80px)" }}
          >
            <div>
              <p
                className="reveal-item text-xs tracking-[0.2em] mb-3"
                style={{ color: "var(--warm-grey)", textTransform: "uppercase" }}
              >
                DESIGN DIRECTOR
              </p>
              <h2
                className="reveal-item font-display mb-6"
                style={{
                  fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--charcoal)",
                  lineHeight: 1.3,
                }}
              >
                {directorData.name}
              </h2>
              {directorData.bio.map((p, i) => (
                <p
                  key={i}
                  className="reveal-item mb-4 leading-relaxed"
                  style={{ color: "var(--warm-grey)", fontSize: "14px" }}
                >
                  {p}
                </p>
              ))}
              <div className="reveal-item mt-6">
                <Link
                  href={directorData.cta.href}
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
                  {directorData.cta.label} <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission — bg image + sage overlay left */}
      <section ref={missionRef} className="relative" style={{ minHeight: "600px" }}>
        <Image
          src={missionData.image}
          alt="Our mission"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "600px" }}>
          <div
            className="flex items-center"
            style={{
              background: "rgba(213, 221, 209, 0.92)",
              padding: "clamp(40px, 5vw, 80px)",
            }}
          >
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
                {missionData.heading}
              </h2>
              {missionData.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="reveal-item mb-5 leading-relaxed"
                  style={{ color: "var(--warm-grey)", fontSize: "15px" }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div>{/* Right side shows the bg image through */}</div>
        </div>
      </section>

      {/* Visionary Partners */}
      <section ref={partnersRef} className="bg-white section-padding">
        <div className="container-custom text-center">
          <h2
            className="reveal-item font-display mb-12"
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
                className="reveal-item flex items-center justify-center"
                style={{
                  height: "100px",
                  background: "var(--cream)",
                  borderRadius: "8px",
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

      {/* Awards */}
      <section ref={awardsRef} style={{ background: "var(--cream)" }} className="section-padding">
        <div className="container-custom">
          <h2
            className="reveal-item font-display mb-12 text-center"
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
                className="reveal-item flex items-center justify-center"
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
