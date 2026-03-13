"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { philosophyData } from "@/data/homepage";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".phil-reveal"),
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
    <section ref={sectionRef} style={{ background: "var(--forest)" }} className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <h2
              className="phil-reveal font-display mb-8"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 400,
                color: "var(--cream)",
                lineHeight: 1.2,
                opacity: 0,
              }}
            >
              {philosophyData.title}
            </h2>
            {philosophyData.paragraphs.map((p, i) => (
              <p
                key={i}
                className="phil-reveal mb-5 leading-relaxed"
                style={{ color: "rgba(245, 243, 239, 0.7)", fontSize: "15px", opacity: 0 }}
              >
                {p}
              </p>
            ))}
            <div className="phil-reveal mt-8" style={{ opacity: 0 }}>
              <Link
                href={philosophyData.cta.href}
                className="btn-primary"
                style={{ background: "var(--sage)", color: "var(--charcoal)" }}
              >
                {philosophyData.cta.label} <span>→</span>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="phil-reveal relative" style={{ opacity: 0 }}>
            <div className="relative aspect-[4/5] overflow-hidden">
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
