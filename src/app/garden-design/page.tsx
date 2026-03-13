"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const designServices = [
  {
    title: "Concept & Vision",
    description:
      "Every garden begins with a conversation. We listen carefully to your aspirations, study the site, and develop a creative brief that captures the essence of what your outdoor space can become.",
    image: "/images/projects/project-01.jpg",
  },
  {
    title: "Design Development",
    description:
      "Our designers craft two distinct concept proposals, each exploring different spatial arrangements, materials, and planting themes. This ensures you have meaningful choices before we refine the final direction.",
    image: "/images/projects/project-03.jpg",
  },
  {
    title: "Technical Detailing",
    description:
      "Once the design is approved, we produce comprehensive construction drawings and specifications. Every material, dimension, and planting position is meticulously documented for the build team.",
    image: "/images/projects/project-05.jpg",
  },
];

const gardenStyles = [
  { title: "Contemporary", description: "Clean lines, architectural planting, and modern materials that create sophisticated outdoor living spaces." },
  { title: "Traditional", description: "Classic proportions, natural stone, and romantic planting schemes that evoke timeless English garden character." },
  { title: "Courtyard", description: "Intimate, structured spaces that maximise impact in compact urban settings with clever use of scale and layering." },
  { title: "Country Estate", description: "Expansive designs that harmonise with the surrounding landscape, blending formal structure with naturalistic planting." },
];

export default function GardenDesignPage() {
  const processRef = useRef<HTMLDivElement>(null);
  const stylesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (processRef.current) {
        gsap.fromTo(
          processRef.current.querySelectorAll(".process-card"),
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: processRef.current, start: "top 75%" },
          }
        );
      }
      if (stylesRef.current) {
        gsap.fromTo(
          stylesRef.current.querySelectorAll(".style-card"),
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: "power2.out",
            scrollTrigger: { trigger: stylesRef.current, start: "top 75%" },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <InnerPageLayout>
      <PageHero
        title="Garden Design"
        subtitle="Bespoke luxury garden design for exceptional homes"
        image="/images/projects/project-02.jpg"
      />

      {/* Intro */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <h2
              className="font-display"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.2 }}
            >
              Designing gardens that feel both inevitable and extraordinary
            </h2>
            <div className="space-y-5">
              <p className="leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                Our design process is deeply collaborative. We believe the best gardens emerge from a genuine understanding of how you live, what inspires you, and how your outdoor space should feel. Every project is different — and that&apos;s the point.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                From initial site visit through to detailed construction drawings, our landscape architects and designers work closely with you at every stage, ensuring the final design is something truly personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section style={{ background: "var(--cream)" }} className="section-padding">
        <div className="container-custom">
          <h2
            className="font-display mb-12"
            style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 400, color: "var(--charcoal)" }}
          >
            Our Design Process
          </h2>
          <div ref={processRef} className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {designServices.map((service, i) => (
              <div key={i} className="process-card" style={{ opacity: 0 }}>
                <div className="relative aspect-[4/3] overflow-hidden mb-6 img-hover-zoom">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span
                  className="text-xs tracking-[0.15em] mb-3 block"
                  style={{ color: "var(--sage-dark)" }}
                >
                  {`STEP ${String(i + 1).padStart(2, "0")}`}
                </span>
                <h3 className="font-display text-xl mb-3" style={{ color: "var(--charcoal)" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--warm-grey)" }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garden Styles */}
      <section className="bg-white section-padding" id="contemporary">
        <div className="container-custom">
          <h2
            className="font-display mb-4"
            style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 400, color: "var(--charcoal)" }}
          >
            Garden Styles
          </h2>
          <p className="mb-12 leading-relaxed max-w-2xl" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
            We design across a range of styles, always guided by the architecture of your home and the character of the surrounding landscape.
          </p>
          <div ref={stylesRef} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {gardenStyles.map((style, i) => (
              <div
                key={i}
                className="style-card p-8"
                style={{ background: "var(--cream)", borderRadius: "4px", opacity: 0 }}
              >
                <h3 className="font-display text-xl mb-3" style={{ color: "var(--charcoal)" }}>
                  {style.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--warm-grey)" }}>
                  {style.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section style={{ background: "var(--forest)" }} className="py-20">
        <div className="container-custom text-center">
          <h2
            className="font-display mb-4"
            style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 400, color: "var(--cream)", lineHeight: 1.3 }}
          >
            Ready to Begin Your Garden Journey?
          </h2>
          <p className="mb-8 mx-auto max-w-lg" style={{ color: "rgba(245, 243, 239, 0.65)", fontSize: "15px" }}>
            Book a complimentary design consultation and let&apos;s explore what your outdoor space could become.
          </p>
          <Link href="/contact" className="btn-primary" style={{ background: "var(--sage)", color: "var(--charcoal)" }}>
            Book a Consultation <span>→</span>
          </Link>
        </div>
      </section>
    </InnerPageLayout>
  );
}
