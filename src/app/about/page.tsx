"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import {
  aboutHeaderData,
  coreValues,
  directorData,
  missionData,
  partnersData,
  awardsData,
} from "@/data/about";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    // Ensure GSAP ticker is active (defensive for environments that throttle rAF)
    gsap.ticker.wake();

    // Kill any existing ScrollTriggers and tweens from previous mounts (React Strict Mode)
    ScrollTrigger.getAll().forEach((t) => t.kill());
    gsap.killTweensOf(pageRef.current.querySelectorAll(".anim-item, .value-card, .director-line, .mission-line, .mission-text, .partners-heading, .partner-card, .awards-heading, .award-card, .hero-image"));

    // === HERO: staggered text reveal ===
    const heroItems = pageRef.current.querySelectorAll(".hero-text .anim-item");
    gsap.set(heroItems, { opacity: 0, y: 40 });
    gsap.to(heroItems, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.12,
      delay: 0.3,
      overwrite: true,
    });

    // === HERO: image reveal ===
    const heroImage = pageRef.current.querySelector(".hero-image");
    if (heroImage) {
      gsap.set(heroImage, { opacity: 0, scale: 1.05 });
      gsap.to(heroImage, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.4,
        overwrite: true,
      });
    }

    // === VALUE CARDS: stagger fade-up with slight scale ===
    const valueCards = pageRef.current.querySelectorAll(".value-card");
    gsap.set(valueCards, { opacity: 0, y: 60, scale: 0.96 });
    gsap.to(valueCards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      overwrite: true,
      scrollTrigger: {
        trigger: pageRef.current.querySelector(".values-section"),
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // === DESIGN DIRECTOR: title lines slide from left ===
    const directorLines = pageRef.current.querySelectorAll(".director-line");
    gsap.set(directorLines, { opacity: 0, x: -60 });
    gsap.to(directorLines, {
      opacity: 1,
      x: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.2,
      overwrite: true,
      scrollTrigger: {
        trigger: pageRef.current.querySelector(".director-section"),
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    // === DESIGN DIRECTOR: text stagger ===
    const directorText = pageRef.current.querySelectorAll(".director-text .anim-item");
    gsap.set(directorText, { opacity: 0, y: 30 });
    gsap.to(directorText, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.1,
      overwrite: true,
      scrollTrigger: {
        trigger: pageRef.current.querySelector(".director-section"),
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    // === DESIGN DIRECTOR: image clip reveal ===
    const directorImage = pageRef.current.querySelector(".director-image");
    if (directorImage) {
      gsap.set(directorImage, { opacity: 0, clipPath: "inset(0 100% 0 0)" });
      gsap.to(directorImage, {
        opacity: 1,
        clipPath: "inset(0 0% 0 0)",
        duration: 1.2,
        ease: "power3.inOut",
        overwrite: true,
        scrollTrigger: {
          trigger: pageRef.current.querySelector(".director-section"),
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }

    // === ELEVATING OUTDOOR LIVING: lines slide up ===
    const missionLines = pageRef.current.querySelectorAll(".mission-line");
    gsap.set(missionLines, { opacity: 0, y: 50 });
    gsap.to(missionLines, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.18,
      overwrite: true,
      scrollTrigger: {
        trigger: pageRef.current.querySelector(".mission-section"),
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    // === ELEVATING OUTDOOR LIVING: text fade ===
    const missionText = pageRef.current.querySelectorAll(".mission-text");
    gsap.set(missionText, { opacity: 0, y: 25 });
    gsap.to(missionText, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.12,
      overwrite: true,
      scrollTrigger: {
        trigger: pageRef.current.querySelector(".mission-section"),
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    // === PARTNERS: heading + cards bounce in ===
    const partnersHeading = pageRef.current.querySelector(".partners-heading");
    if (partnersHeading) {
      gsap.set(partnersHeading, { opacity: 0, y: 30 });
      gsap.to(partnersHeading, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        overwrite: true,
        scrollTrigger: {
          trigger: pageRef.current.querySelector(".partners-section"),
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
    const partnerCards = pageRef.current.querySelectorAll(".partner-card");
    gsap.set(partnerCards, { opacity: 0, y: 40, scale: 0.9 });
    gsap.to(partnerCards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      ease: "back.out(1.2)",
      stagger: 0.12,
      overwrite: true,
      scrollTrigger: {
        trigger: pageRef.current.querySelector(".partners-section"),
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    // === AWARDS: heading + cards stagger ===
    const awardsHeading = pageRef.current.querySelector(".awards-heading");
    if (awardsHeading) {
      gsap.set(awardsHeading, { opacity: 0, y: 30 });
      gsap.to(awardsHeading, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        overwrite: true,
        scrollTrigger: {
          trigger: pageRef.current.querySelector(".awards-section"),
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
    const awardCards = pageRef.current.querySelectorAll(".award-card");
    gsap.set(awardCards, { opacity: 0, y: 60, scale: 0.92 });
    gsap.to(awardCards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.85,
      ease: "power3.out",
      stagger: 0.2,
      overwrite: true,
      scrollTrigger: {
        trigger: pageRef.current.querySelector(".awards-section"),
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <InnerPageLayout>
      <div ref={pageRef}>
        {/* About Header — dark sage bg left + image right */}
        <section style={{ marginTop: "70px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "70vh" }}>
            <div
              className="flex items-center"
              style={{ background: "#7A8B7F", padding: "clamp(40px, 5vw, 80px)" }}
            >
              <div className="hero-text">
                <p
                  className="anim-item tracking-[0.2em] mb-4"
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
                  className="anim-item font-display mb-8"
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
                    className="anim-item mb-5 leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px" }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="hero-image relative" style={{ minHeight: "400px" }}>
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

        {/* Core Values — 3 outlined cards with stagger animation */}
        <section className="values-section bg-white section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreValues.map((value, i) => (
                <div
                  key={i}
                  className="value-card"
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
        <section className="director-section" style={{ background: "#C5CEC0" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "600px" }}>
            <div
              className="flex items-center"
              style={{ padding: "clamp(40px, 5vw, 80px)" }}
            >
              <div>
                <div>
                  <h2
                    className="director-line"
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
                    className="director-line"
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
                <div className="director-text">
                  <h3
                    className="anim-item font-display mb-8"
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
                      className="anim-item mb-4 leading-relaxed"
                      style={{ color: "var(--warm-grey)", fontSize: "14px" }}
                    >
                      {p}
                    </p>
                  ))}
                  <div className="anim-item mt-6">
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
            <div className="director-image relative" style={{ minHeight: "400px" }}>
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
        <section className="mission-section" style={{ background: "#8A9685", padding: "clamp(60px, 8vw, 120px) 0" }}>
          <div className="container-custom" style={{ maxWidth: "700px" }}>
            <div style={{ marginBottom: "48px" }}>
              <h2
                className="mission-line"
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
                className="mission-line"
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
                className="mission-line"
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
              className="mission-text font-display mb-8"
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
                className="mission-text mb-5 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px" }}
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Visionary Partners — heading + cards scale in with bounce */}
        <section className="partners-section bg-white section-padding">
          <div className="container-custom text-center">
            <h2
              className="partners-heading font-display mb-12"
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
                  className="partner-card flex items-center justify-center"
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
        <section className="awards-section section-padding" style={{ background: "var(--cream)" }}>
          <div className="container-custom">
            <h2
              className="awards-heading font-display mb-12 text-center"
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
                  className="award-card flex items-center justify-center"
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
      </div>
    </InnerPageLayout>
  );
}
