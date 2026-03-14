"use client";

import Image from "next/image";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import { useReveal } from "@/hooks/useReveal";
import {
  contactHeroData,
  contactMethods,
  locationData,
  hoursData,
  socialLinks,
} from "@/data/contact";

export default function ContactPage() {
  const heroRef = useReveal(".reveal-item");
  const methodsRef = useReveal(".reveal-item");
  const detailsRef = useReveal(".reveal-item");
  const formRef = useReveal(".reveal-item");

  return (
    <InnerPageLayout>
      {/* Split Hero — sage bg left + image right (no fullscreen PageHero) */}
      <section ref={heroRef} style={{ marginTop: "70px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "70vh" }}>
          <div
            className="flex items-center"
            style={{ background: "#D5DDD1", padding: "clamp(40px, 5vw, 80px)" }}
          >
            <div>
              <p
                className="reveal-item text-xs tracking-[0.2em] mb-4"
                style={{ color: "var(--warm-grey)", textTransform: "uppercase" }}
              >
                {contactHeroData.overline}
              </p>
              <h1
                className="reveal-item font-display mb-8"
                style={{
                  fontSize: "clamp(28px, 3vw, 44px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--charcoal)",
                  lineHeight: 1.3,
                }}
              >
                {contactHeroData.heading}
              </h1>
              <p
                className="reveal-item leading-relaxed"
                style={{ color: "var(--warm-grey)", fontSize: "15px" }}
              >
                {contactHeroData.text}
              </p>
            </div>
          </div>
          <div className="reveal-item relative" style={{ minHeight: "400px" }}>
            <Image
              src={contactHeroData.image}
              alt="Contact Hartwood Landscapes"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Contact Methods — 3 columns */}
      <section ref={methodsRef} className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.href}
                className="reveal-item text-center block group"
                style={{ padding: "clamp(24px, 3vw, 40px)", textDecoration: "none" }}
              >
                <div
                  className="mx-auto mb-6 flex items-center justify-center"
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "#D5DDD1",
                  }}
                >
                  {method.icon === "email" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--charcoal)" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  )}
                  {method.icon === "phone" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--charcoal)" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  )}
                  {method.icon === "whatsapp" && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--charcoal)" strokeWidth="1.5">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  )}
                </div>
                <p
                  className="text-xs tracking-[0.15em] mb-2"
                  style={{ color: "var(--warm-grey)", textTransform: "uppercase" }}
                >
                  {method.label}
                </p>
                <p
                  className="font-display group-hover:opacity-70 transition-opacity"
                  style={{ fontSize: "clamp(15px, 1.3vw, 18px)", color: "var(--charcoal)" }}
                >
                  {method.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Location, Hours & Social — 3 columns */}
      <section ref={detailsRef} style={{ background: "var(--cream)" }} className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Find Us */}
            <div className="reveal-item">
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <Image
                  src={locationData.image}
                  alt="Hartwood Landscapes office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3
                className="text-xs tracking-[0.2em] mb-4 font-semibold"
                style={{ color: "var(--charcoal)", textTransform: "uppercase" }}
              >
                FIND US
              </h3>
              <div className="space-y-1">
                {locationData.address.map((line, i) => (
                  <p key={i} className="text-sm" style={{ color: "var(--warm-grey)" }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="reveal-item">
              <div
                className="aspect-[4/3] flex items-center justify-center mb-6"
                style={{ background: "#D5DDD1" }}
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--charcoal)" strokeWidth="1">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3
                className="text-xs tracking-[0.2em] mb-4 font-semibold"
                style={{ color: "var(--charcoal)", textTransform: "uppercase" }}
              >
                WE ARE OPEN
              </h3>
              <div className="space-y-2">
                {hoursData.hours.map((h, i) => (
                  <div key={i} className="flex justify-between text-sm" style={{ color: "var(--warm-grey)" }}>
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="reveal-item">
              <div
                className="aspect-[4/3] flex items-center justify-center mb-6"
                style={{ background: "var(--charcoal)" }}
              >
                <p className="font-display text-white" style={{ fontSize: "18px", fontStyle: "italic" }}>
                  Follow Us
                </p>
              </div>
              <h3
                className="text-xs tracking-[0.2em] mb-4 font-semibold"
                style={{ color: "var(--charcoal)", textTransform: "uppercase" }}
              >
                WHAT WE ARE UP TO
              </h3>
              <div className="space-y-2">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="block text-sm hover:opacity-60 transition-opacity"
                    style={{ color: "var(--warm-grey)", textDecoration: "none" }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section ref={formRef} style={{ background: "#8A9A84" }} className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Text */}
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
                Complete the form and we will be in touch within 24 hours to arrange a convenient time for your initial design consultation.
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

            {/* Right: Form */}
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
