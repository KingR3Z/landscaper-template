"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { src: "/images/projects/project-01.jpg", title: "Block Paved Driveway", location: "Newcastle-under-Lyme", description: "A striking herringbone-pattern driveway built with premium block paving, complete with charcoal border edging and integrated drainage." },
  { src: "/images/projects/project-02.jpg", title: "Artificial Lawn & Patio", location: "Stoke-on-Trent", description: "Full rear garden transformation featuring a low-maintenance artificial lawn, Indian sandstone patio, and contemporary fencing." },
  { src: "/images/projects/project-03.jpg", title: "Herringbone Block Paving", location: "Kidsgrove", description: "Classic herringbone driveway with a natural stone border, designed to complement the property's traditional character." },
  { src: "/images/projects/project-04.jpg", title: "Fencing & Brick Pillars", location: "Stone, Staffordshire", description: "Bespoke close-board fencing with hand-built brick pillars, providing privacy and a polished finish to the garden boundary." },
  { src: "/images/projects/project-05.jpg", title: "Red Granite Gravel Path", location: "Audley", description: "A winding red granite pathway through structured planting beds, with steel edging for clean, lasting lines." },
  { src: "/images/projects/project-06.jpg", title: "Gold Block Paving Driveway", location: "Wolstanton", description: "Warm gold block paving with a sweeping curved design, tailored to fit the sloped approach of this semi-detached property." },
  { src: "/images/projects/project-07.jpg", title: "Stamped Concrete Driveway", location: "Silverdale", description: "A stamped concrete driveway in a natural stone finish — durable, low-maintenance, and with a seamless appearance." },
  { src: "/images/projects/project-08.jpg", title: "Tarmac Driveway", location: "Burslem", description: "Clean, professional tarmac driveway with block-paved apron and edging — built for everyday use and kerb appeal." },
];

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax
      if (heroRef.current) {
        const heroImg = heroRef.current.querySelector(".hero-img");
        const heroContent = heroRef.current.querySelectorAll(".hero-reveal");

        gsap.fromTo(
          heroContent,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.15, delay: 0.3 }
        );

        if (heroImg) {
          gsap.to(heroImg, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }

      // Each project section — scroll-driven reveal
      const sections = containerRef.current?.querySelectorAll(".project-section");
      sections?.forEach((section) => {
        const img = section.querySelector(".project-img");
        const overlay = section.querySelector(".project-overlay");
        const text = section.querySelectorAll(".project-text-reveal");
        const counter = section.querySelector(".project-counter");

        // Parallax on image
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.15, yPercent: -8 },
            {
              scale: 1,
              yPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }

        // Overlay darkens as you scroll into view
        if (overlay) {
          gsap.fromTo(
            overlay,
            { opacity: 0.1 },
            {
              opacity: 0.45,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "center center",
                scrub: true,
              },
            }
          );
        }

        // Text reveals
        if (text.length) {
          gsap.fromTo(
            text,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: section,
                start: "top 40%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // Counter
        if (counter) {
          gsap.fromTo(
            counter,
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 50%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <InnerPageLayout>
      <div ref={containerRef}>
        {/* Hero */}
        <section
          ref={heroRef}
          className="relative w-full overflow-hidden flex items-center justify-center"
          style={{ height: "100vh", minHeight: "600px" }}
        >
          <div className="hero-img absolute inset-0">
            <Image
              src="/images/projects/project-06.jpg"
              alt="Portfolio hero"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center px-6">
            <p
              className="hero-reveal text-white/50 tracking-[0.3em] mb-5"
              style={{ fontSize: "clamp(10px, 1vw, 12px)", textTransform: "uppercase", fontWeight: 400, opacity: 0 }}
            >
              Our Work
            </p>
            <h1
              className="hero-reveal font-display text-white"
              style={{
                fontSize: "clamp(40px, 7vw, 88px)",
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: "0.02em",
                opacity: 0,
              }}
            >
              Portfolio
            </h1>
            <div
              className="hero-reveal mx-auto mt-8"
              style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.3)", opacity: 0 }}
            />
            <p
              className="hero-reveal mt-6 text-white/60 max-w-md mx-auto"
              style={{ fontSize: "15px", lineHeight: 1.8, opacity: 0 }}
            >
              Scroll to explore our completed transformations
            </p>
          </div>

          {/* Scroll indicator */}
          <div
            className="hero-reveal absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{ opacity: 0 }}
          >
            <div
              className="w-[1px] h-10 animate-pulse"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.5))" }}
            />
          </div>
        </section>

        {/* Project Sections — full viewport scroll showcase */}
        {projects.map((project, i) => (
          <section
            key={project.src}
            className="project-section relative w-full overflow-hidden flex items-end"
            style={{ height: "100vh", minHeight: "600px" }}
          >
            {/* Background image with parallax */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="project-img absolute inset-[-15%] w-[130%] h-[130%]">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>

            {/* Dark overlay — uniform for parallax feel */}
            <div className="project-overlay absolute inset-0 bg-black" />

            {/* Bottom gradient — always visible for text legibility */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 35%, transparent 60%)" }}
            />

            {/* Project counter — top left */}
            <div
              className="project-counter absolute top-8 left-6 md:top-12 md:left-12 z-10"
              style={{ opacity: 0 }}
            >
              <span
                className="text-white/30 font-display"
                style={{ fontSize: "clamp(12px, 1.5vw, 14px)", letterSpacing: "0.2em" }}
              >
                {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            {/* Content — bottom left */}
            <div className="relative z-10 w-full p-6 pb-12 md:p-12 md:pb-16 lg:p-16 lg:pb-20">
              <div className="max-w-2xl">
                <p
                  className="project-text-reveal text-white/60 tracking-[0.25em] mb-3"
                  style={{ fontSize: "clamp(10px, 0.9vw, 12px)", textTransform: "uppercase", fontWeight: 400, opacity: 0 }}
                >
                  {project.location}
                </p>
                <h2
                  className="project-text-reveal font-display text-white mb-4"
                  style={{
                    fontSize: "clamp(28px, 4vw, 56px)",
                    fontWeight: 300,
                    lineHeight: 1.1,
                    letterSpacing: "0.01em",
                    opacity: 0,
                  }}
                >
                  {project.title}
                </h2>
                <p
                  className="project-text-reveal text-white/70 max-w-lg"
                  style={{ fontSize: "clamp(14px, 1.1vw, 16px)", lineHeight: 1.75, opacity: 0 }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section style={{ background: "var(--charcoal)" }} className="py-20 md:py-28">
          <div className="container-custom text-center">
            <h2
              className="font-display mb-4"
              style={{
                fontSize: "clamp(26px, 3.5vw, 48px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#FFFFFF",
                lineHeight: 1.3,
              }}
            >
              Let Us Create Something Beautiful For You
            </h2>
            <p
              className="max-w-xl mx-auto mb-10"
              style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.8 }}
            >
              Every project in our portfolio began with a simple conversation.
              Tell us about your space and we will bring your vision to life.
            </p>
            <a
              href="/contact"
              className="inline-block font-medium tracking-wide transition-all duration-300 hover:opacity-90"
              style={{
                background: "var(--sage)",
                color: "#FFFFFF",
                padding: "16px 44px",
                borderRadius: "50px",
                fontSize: "14px",
                letterSpacing: "0.5px",
                textDecoration: "none",
              }}
            >
              Book a Design Consultation
            </a>
          </div>
        </section>
      </div>
    </InnerPageLayout>
  );
}
