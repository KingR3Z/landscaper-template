"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { landscapingData } from "@/data/homepage";

gsap.registerPlugin(ScrollTrigger);

export default function Landscaping() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".land-reveal"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "var(--cream)" }} className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image — left side */}
          <div className="land-reveal relative order-2 lg:order-1" style={{ opacity: 0 }}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={landscapingData.image}
                alt="Luxury landscaping build"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text — right side */}
          <div className="order-1 lg:order-2">
            <h2
              className="land-reveal font-display mb-8"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 400,
                color: "var(--charcoal)",
                lineHeight: 1.2,
                opacity: 0,
              }}
            >
              {landscapingData.title}
            </h2>
            {landscapingData.paragraphs.map((p, i) => (
              <p
                key={i}
                className="land-reveal mb-5 leading-relaxed"
                style={{ color: "var(--warm-grey)", fontSize: "15px", opacity: 0 }}
              >
                {p}
              </p>
            ))}
            <div className="land-reveal mt-8" style={{ opacity: 0 }}>
              <Link href={landscapingData.cta.href} className="btn-primary">
                {landscapingData.cta.label} <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
