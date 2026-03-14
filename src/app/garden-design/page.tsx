"use client";

import Image from "next/image";
import Link from "next/link";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import { useReveal } from "@/hooks/useReveal";

const designProcess = [
  { step: "01", title: "Garden Design Consultation", text: "An initial conversation to understand your aspirations, lifestyle, and how you want to use your outdoor space. We visit the site to assess conditions, orientation, and context." },
  { step: "02", title: "Garden Design Proposals", text: "We prepare two distinct concept options, each exploring different spatial arrangements, materials, and planting themes — giving you meaningful choices." },
  { step: "03", title: "Design Brief Meeting", text: "A detailed meeting to refine your chosen direction. We discuss materials, planting preferences, lighting, and any special features you would like to include." },
  { step: "04", title: "Garden Survey", text: "A thorough site survey capturing levels, boundaries, existing features, soil conditions, and services. This forms the foundation of all technical drawings." },
  { step: "05", title: "Concept Design Options", text: "Fully developed concept designs with annotated plans, 3D visualisations, and mood boards showing materials, planting palettes, and key design features." },
  { step: "06", title: "Design Presentation", text: "A comprehensive design presentation including construction drawings, planting plans, specifications, and a detailed project estimate for the build phase." },
];

export default function GardenDesignPage() {
  const introRef = useReveal(".reveal-item");
  const consultRef = useReveal(".reveal-item");
  const premiumRef = useReveal(".reveal-item");
  const processRef = useReveal(".reveal-item");
  const formRef = useReveal(".reveal-item");

  return (
    <InnerPageLayout>
      <PageHero
        title="Garden Design"
        subtitle="Bespoke luxury garden design for exceptional homes"
        image="/images/projects/project-02.jpg"
      />

      {/* Intro — text left + image right */}
      <section ref={introRef} className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
                Bespoke Garden Design, Shaped Around Your Home
              </h2>
              <p className="reveal-item mb-5 leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                Our design process is deeply collaborative. We believe the best gardens emerge from a genuine understanding of how you live, what inspires you, and how your outdoor space should feel. Every project is different — and that&apos;s the point.
              </p>
              <p className="reveal-item mb-5 leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                From initial site visit through to detailed construction drawings, our landscape architects and designers work closely with you at every stage, ensuring the final design is something truly personal.
              </p>
              <p className="reveal-item leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                Whether you are reimagining a compact London courtyard or transforming a country estate, our approach remains the same: listen carefully, design thoughtfully, and deliver beautifully.
              </p>
              <div className="reveal-item mt-8">
                <Link
                  href="/contact"
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
                  Begin Your Garden Design Consultation <span>→</span>
                </Link>
              </div>
            </div>
            <div className="reveal-item relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/projects/project-01.jpg"
                alt="Bespoke garden design"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      <section className="relative" style={{ height: "50vh", minHeight: "350px" }}>
        <Image
          src="/images/garden-fullwidth.jpg"
          alt="Luxury garden landscape"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* Initial Consultation — sage bg left + 2 stacked images right */}
      <section ref={consultRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "600px" }}>
          <div
            className="flex items-center"
            style={{ background: "#D5DDD1", padding: "clamp(40px, 5vw, 80px)" }}
          >
            <div>
              <h2
                className="reveal-item font-display mb-8"
                style={{
                  fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--charcoal)",
                  lineHeight: 1.3,
                }}
              >
                Our Initial Garden Design Consultation
              </h2>
              <p className="reveal-item mb-5 leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                Every project begins with a site visit and consultation. This is where we get to know you, understand your aspirations, and assess the potential of your outdoor space.
              </p>
              <p className="reveal-item mb-5 leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                We study the architecture of your home, the orientation and topography of the site, and any existing features worth preserving. We discuss your lifestyle, entertaining habits, and how you imagine using the garden throughout the seasons.
              </p>
              <p className="reveal-item leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                Following the consultation, we prepare a comprehensive design proposal outlining our creative direction, scope of work, and investment range — giving you clarity before we begin.
              </p>
            </div>
          </div>
          <div className="reveal-item" style={{ padding: "clamp(20px, 3vw, 40px)" }}>
            <div className="space-y-5 h-full flex flex-col justify-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/garden-consultation.jpg"
                  alt="Garden design consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/projects/project-03.jpg"
                  alt="Contemporary courtyard design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Design — reversed: 2 stacked images left + sage bg right */}
      <section ref={premiumRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "600px" }}>
          <div className="reveal-item" style={{ padding: "clamp(20px, 3vw, 40px)" }}>
            <div className="space-y-5 h-full flex flex-col justify-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/garden-premium.jpg"
                  alt="Premium garden design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/projects/project-05.jpg"
                  alt="Garden design detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          <div
            className="flex items-center"
            style={{ background: "#D5DDD1", padding: "clamp(40px, 5vw, 80px)" }}
          >
            <div>
              <h2
                className="reveal-item font-display mb-8"
                style={{
                  fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--charcoal)",
                  lineHeight: 1.3,
                }}
              >
                Premium Garden Design
              </h2>
              <p className="reveal-item mb-5 leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                Our premium design service is a comprehensive, end-to-end offering for clients who want a fully bespoke garden. This includes multiple concept options, detailed 3D visualisations, and a complete set of construction-ready drawings.
              </p>
              <p className="reveal-item mb-5 leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                We work with the finest materials — natural stone, hardwood, specialist metalwork — and specify every element to ensure a seamless transition from design to build.
              </p>
              <p className="reveal-item mb-5 leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                Each planting scheme is personally designed by our horticulturists, considering year-round structure, seasonal colour, scent, and wildlife value. The result is a garden that looks stunning from day one and only improves with age.
              </p>
              <p className="reveal-item leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                From initial consultation to final handover, you will have a single point of contact — ensuring complete continuity and confidence throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Garden Design Process — 6 numbered steps */}
      <section ref={processRef} className="bg-white section-padding">
        <div className="container-custom">
          <h2
            className="reveal-item font-display mb-16 text-center"
            style={{
              fontSize: "clamp(28px, 3vw, 42px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--charcoal)",
              lineHeight: 1.3,
            }}
          >
            The Garden Design Process
          </h2>
          <div className="max-w-3xl mx-auto">
            {designProcess.map((item, i) => (
              <div
                key={i}
                className="reveal-item grid grid-cols-[60px_1fr] gap-6 items-start"
                style={{
                  paddingBottom: i < designProcess.length - 1 ? "clamp(32px, 4vw, 48px)" : "0",
                  marginBottom: i < designProcess.length - 1 ? "clamp(32px, 4vw, 48px)" : "0",
                  borderBottom: i < designProcess.length - 1 ? "1px solid #e8e6e1" : "none",
                }}
              >
                <p
                  className="font-display"
                  style={{
                    fontSize: "clamp(28px, 3vw, 40px)",
                    fontWeight: 300,
                    color: "var(--sage-dark)",
                    lineHeight: 1,
                  }}
                >
                  {item.step}
                </p>
                <div>
                  <h3
                    className="font-display mb-3"
                    style={{ fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: 400, color: "var(--charcoal)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--warm-grey)" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section ref={formRef} style={{ background: "#8A9A84" }} className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2
                className="reveal-item font-display mb-6"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--white)",
                  lineHeight: 1.3,
                }}
              >
                Ready to transform your garden?
              </h2>
              <p
                className="reveal-item mb-6 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px" }}
              >
                Book a complimentary design consultation and let us explore what your outdoor space could become.
              </p>
              <p className="reveal-item mt-6">
                <a
                  href="tel:01892489923"
                  className="font-display"
                  style={{
                    color: "var(--white)",
                    fontSize: "clamp(18px, 2vw, 24px)",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }}
                >
                  01892 489 923
                </a>
              </p>
            </div>
            <div className="reveal-item">
              <p
                className="font-display mb-8"
                style={{
                  fontSize: "clamp(20px, 2vw, 26px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--white)",
                  lineHeight: 1.4,
                }}
              >
                Arrange an initial garden design consultation.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs mb-2" style={{ color: "var(--white)" }}>First name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-sm text-sm focus:outline-none" style={{ background: "rgba(255,255,255,0.9)", border: "none", color: "var(--charcoal)" }} />
                  </div>
                  <div>
                    <label className="block text-xs mb-2" style={{ color: "var(--white)" }}>Last name *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-sm text-sm focus:outline-none" style={{ background: "rgba(255,255,255,0.9)", border: "none", color: "var(--charcoal)" }} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs mb-2" style={{ color: "var(--white)" }}>Phone *</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-sm text-sm focus:outline-none" style={{ background: "rgba(255,255,255,0.9)", border: "none", color: "var(--charcoal)" }} />
                  </div>
                  <div>
                    <label className="block text-xs mb-2" style={{ color: "var(--white)" }}>Postcode *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-sm text-sm focus:outline-none" style={{ background: "rgba(255,255,255,0.9)", border: "none", color: "var(--charcoal)" }} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs mb-2" style={{ color: "var(--white)" }}>Email *</label>
                    <input type="email" className="w-full px-4 py-3 rounded-sm text-sm focus:outline-none" style={{ background: "rgba(255,255,255,0.9)", border: "none", color: "var(--charcoal)" }} />
                  </div>
                  <div>
                    <label className="block text-xs mb-2" style={{ color: "var(--white)" }}>Service</label>
                    <select className="w-full px-4 py-3 rounded-sm text-sm focus:outline-none appearance-none" style={{ background: "rgba(255,255,255,0.9)", border: "none", color: "var(--charcoal)" }}>
                      <option value="">Select...</option>
                      <option value="design">Garden Design</option>
                      <option value="landscaping">Landscaping &amp; Build</option>
                      <option value="styling">Garden Styling</option>
                      <option value="planting">Planting Schemes</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 mt-4 text-sm font-medium tracking-wide rounded-sm transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.9)", color: "var(--charcoal)", border: "none", cursor: "pointer" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
