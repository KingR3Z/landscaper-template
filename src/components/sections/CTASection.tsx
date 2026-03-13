"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ctaData } from "@/data/homepage";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".cta-reveal"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "var(--sage)" }} className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Text */}
          <div>
            <h2
              className="cta-reveal font-display mb-6"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 400,
                color: "var(--charcoal)",
                lineHeight: 1.2,
                opacity: 0,
              }}
            >
              {ctaData.heading}
            </h2>
            <p
              className="cta-reveal mb-4 leading-relaxed"
              style={{ color: "var(--charcoal)", opacity: 0, fontSize: "15px" }}
            >
              {ctaData.text}
            </p>
            <p
              className="cta-reveal mb-4 leading-relaxed"
              style={{ color: "var(--charcoal)", opacity: 0, fontSize: "14px" }}
            >
              <strong>What happens next</strong>
            </p>
            <p
              className="cta-reveal leading-relaxed"
              style={{ color: "var(--charcoal)", opacity: 0, fontSize: "14px" }}
            >
              {ctaData.subtext}
            </p>
          </div>

          {/* Right: Form */}
          <div className="cta-reveal" style={{ opacity: 0 }}>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: "var(--charcoal)" }}>
                    First name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/80 border-none rounded-sm text-sm focus:outline-none focus:ring-2"
                    style={{ focusRingColor: "var(--sage-dark)" } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: "var(--charcoal)" }}>
                    Last name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/80 border-none rounded-sm text-sm focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: "var(--charcoal)" }}>
                    Phone *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/80 border-none rounded-sm text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: "var(--charcoal)" }}>
                    Postcode *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/80 border-none rounded-sm text-sm focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: "var(--charcoal)" }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/80 border-none rounded-sm text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: "var(--charcoal)" }}>
                    What service are you looking for?
                  </label>
                  <select className="w-full px-4 py-3 bg-white/80 border-none rounded-sm text-sm focus:outline-none appearance-none">
                    <option value="">Select...</option>
                    <option value="design">Garden Design</option>
                    <option value="landscaping">Landscaping & Build</option>
                    <option value="styling">Garden Styling</option>
                    <option value="planting">Planting Schemes</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-4 mt-4 text-sm font-medium tracking-wide rounded-sm transition-all duration-300"
                style={{
                  background: "var(--sage-dark)",
                  color: "var(--white)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
