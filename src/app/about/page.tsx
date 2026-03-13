"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { name: "James Hartwood", role: "Design Director", image: "/images/projects/project-01.jpg" },
  { name: "Eleanor Vane", role: "Senior Landscape Architect", image: "/images/projects/project-02.jpg" },
  { name: "Marcus Chen", role: "Project Manager", image: "/images/projects/project-03.jpg" },
  { name: "Sophie Laurent", role: "Planting Designer", image: "/images/projects/project-04.jpg" },
];

export default function AboutPage() {
  const storyRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (storyRef.current) {
        gsap.fromTo(
          storyRef.current.querySelectorAll(".story-reveal"),
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: storyRef.current, start: "top 75%" },
          }
        );
      }
      if (teamRef.current) {
        gsap.fromTo(
          teamRef.current.querySelectorAll(".team-card"),
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: "power2.out",
            scrollTrigger: { trigger: teamRef.current, start: "top 75%" },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <InnerPageLayout>
      <PageHero
        title="About Hartwood Landscapes"
        subtitle="Passion, craft, and an unwavering commitment to quality"
        image="/images/about-landscape.jpg"
      />

      {/* Story */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div ref={storyRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <h2
              className="story-reveal font-display"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.2, opacity: 0 }}
            >
              Creating gardens that transcend the ordinary
            </h2>
            <div className="space-y-5">
              <p className="story-reveal leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px", opacity: 0 }}>
                Founded in 2012, Hartwood Landscapes has grown from a small design studio in Kent to one of the South East&apos;s most respected garden design and landscaping firms. Our journey has been driven by a simple belief: every home deserves an extraordinary outdoor space.
              </p>
              <p className="story-reveal leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px", opacity: 0 }}>
                We bring together landscape architects, designers, horticulturists, and skilled craftspeople — each passionate about creating gardens that are as functional as they are beautiful. Our approach blends timeless design principles with contemporary living, ensuring every project feels both fresh and enduring.
              </p>
              <p className="story-reveal leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px", opacity: 0 }}>
                We are proud to be recognised as Best of Houzz winners for both design and service, reflecting our continued commitment to excellence at every stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--forest)" }} className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "200+", label: "Projects Completed" },
              { number: "12", label: "Years Experience" },
              { number: "35+", label: "Awards Won" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-display" style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, color: "var(--sage)" }}>
                  {stat.number}
                </p>
                <p className="text-xs tracking-[0.15em] mt-2" style={{ color: "rgba(245, 243, 239, 0.6)" }}>
                  {stat.label.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <h2
            className="font-display mb-12"
            style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 400, color: "var(--charcoal)" }}
          >
            Meet Our Team
          </h2>
          <div ref={teamRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="team-card" style={{ opacity: 0 }}>
                <div className="relative aspect-[3/4] overflow-hidden mb-4 img-hover-zoom">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-display text-lg" style={{ color: "var(--charcoal)" }}>{member.name}</h3>
                <p className="text-sm mt-1" style={{ color: "var(--warm-grey)" }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
