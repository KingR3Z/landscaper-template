"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (infoRef.current) {
        gsap.fromTo(
          infoRef.current.querySelectorAll(".info-reveal"),
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: infoRef.current, start: "top 75%" },
          }
        );
      }
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: formRef.current, start: "top 80%" },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <InnerPageLayout>
      <PageHero
        title="Get In Touch"
        subtitle="We'd love to hear about your project"
        image="/images/cta-bg.jpg"
      />

      {/* Contact Form + Info */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Info */}
            <div ref={infoRef}>
              <h2
                className="info-reveal font-display mb-6"
                style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.2, opacity: 0 }}
              >
                Let&apos;s Start a Conversation
              </h2>
              <p className="info-reveal mb-8 leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px", opacity: 0 }}>
                Whether you&apos;re considering a full garden redesign, a landscaping project, or simply want some expert advice, we&apos;re here to help. Get in touch and we&apos;ll arrange a convenient time to discuss your vision.
              </p>

              <div className="info-reveal space-y-6" style={{ opacity: 0 }}>
                <div>
                  <h3 className="font-display text-lg mb-2" style={{ color: "var(--charcoal)" }}>Visit Us</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--warm-grey)" }}>
                    Hartwood House<br />
                    42 High Street<br />
                    Tunbridge Wells<br />
                    Kent, TN1 1XP
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2" style={{ color: "var(--charcoal)" }}>Call Us</h3>
                  <p className="text-sm" style={{ color: "var(--warm-grey)" }}>01892 489 923</p>
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2" style={{ color: "var(--charcoal)" }}>Email Us</h3>
                  <p className="text-sm" style={{ color: "var(--warm-grey)" }}>design@hartwood-landscapes.co.uk</p>
                </div>
              </div>

              <div className="info-reveal mt-10" style={{ opacity: 0 }}>
                <h3 className="font-display text-lg mb-3" style={{ color: "var(--charcoal)" }}>Opening Hours</h3>
                <div className="space-y-1 text-sm" style={{ color: "var(--warm-grey)" }}>
                  <p>Monday — Friday: 9:00am – 5:30pm</p>
                  <p>Saturday: By appointment</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div ref={formRef} style={{ opacity: 0 }}>
              <div className="p-8 lg:p-10" style={{ background: "var(--cream)", borderRadius: "4px" }}>
                <h3
                  className="font-display mb-6"
                  style={{ fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 400, color: "var(--charcoal)" }}
                >
                  Request a Consultation
                </h3>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: "var(--charcoal)" }}>
                        First name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white border-none rounded-sm text-sm focus:outline-none focus:ring-2"
                        style={{ focusRingColor: "var(--sage-dark)" } as React.CSSProperties}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: "var(--charcoal)" }}>
                        Last name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white border-none rounded-sm text-sm focus:outline-none"
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
                        className="w-full px-4 py-3 bg-white border-none rounded-sm text-sm focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: "var(--charcoal)" }}>
                        Phone *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-white border-none rounded-sm text-sm focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "var(--charcoal)" }}>
                      Postcode
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border-none rounded-sm text-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "var(--charcoal)" }}>
                      What service are you interested in?
                    </label>
                    <select className="w-full px-4 py-3 bg-white border-none rounded-sm text-sm focus:outline-none appearance-none">
                      <option value="">Select...</option>
                      <option value="design">Garden Design</option>
                      <option value="landscaping">Landscaping & Build</option>
                      <option value="styling">Garden Styling</option>
                      <option value="planting">Planting Schemes</option>
                      <option value="consultation">Design Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "var(--charcoal)" }}>
                      Tell us about your project
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-white border-none rounded-sm text-sm focus:outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 mt-2 text-sm font-medium tracking-wide rounded-sm transition-all duration-300"
                    style={{
                      background: "var(--sage-dark)",
                      color: "var(--white)",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Send Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section style={{ background: "var(--light-grey)" }} className="py-0">
        <div
          className="w-full"
          style={{ height: "400px", background: "var(--light-grey)", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <div className="text-center">
            <p className="font-display text-2xl mb-2" style={{ color: "var(--charcoal)" }}>Tunbridge Wells, Kent</p>
            <p className="text-sm" style={{ color: "var(--warm-grey)" }}>
              Serving Kent, London & the South East
            </p>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
