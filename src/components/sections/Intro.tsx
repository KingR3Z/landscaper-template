"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { introData } from "@/data/homepage";

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = sectionRef.current!.querySelectorAll(".intro-reveal");
      gsap.fromTo(
        elements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "var(--cream)" }} className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <h2
              className="intro-reveal font-display mb-8"
              style={{
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 400,
                color: "var(--charcoal)",
                lineHeight: 1.2,
                opacity: 0,
              }}
            >
              {introData.heading}
            </h2>
            {introData.text.map((p, i) => (
              <p
                key={i}
                className="intro-reveal mb-5 leading-relaxed"
                style={{ color: "var(--warm-grey)", fontSize: "15px", opacity: 0 }}
              >
                {p}
              </p>
            ))}
            <div className="intro-reveal mt-8" style={{ opacity: 0 }}>
              <Link href={introData.cta.href} className="btn-primary">
                {introData.cta.label} <span>→</span>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="intro-reveal relative" style={{ opacity: 0 }}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={introData.image}
                alt="Luxury garden design"
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
