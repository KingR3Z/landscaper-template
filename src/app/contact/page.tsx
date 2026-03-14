"use client";

import Image from "next/image";
import Link from "next/link";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import { useReveal } from "@/hooks/useReveal";
import {
  contactHeroData,
  contactMethods,
  locationData,
  hoursData,
  socialLinks,
  exploreServices,
} from "@/data/contact";

export default function ContactPage() {
  const formRef = useReveal(".reveal-item");
  const cardsRef = useReveal(".reveal-item");
  const servicesRef = useReveal(".reveal-item");

  return (
    <InnerPageLayout>
      {/* ─── HERO: Full-width sage with text left + form right ─── */}
      <section
        ref={formRef}
        style={{ marginTop: "70px", background: "#7A8B7F", minHeight: "calc(100vh - 70px)" }}
        className="flex items-center"
      >
        <div className="container-custom w-full py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Text */}
            <div>
              <h1
                className="reveal-item font-display mb-8"
                style={{
                  fontSize: "clamp(30px, 3.5vw, 46px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "#FFFFFF",
                  lineHeight: 1.3,
                }}
              >
                Ready to transform your garden?
              </h1>
              <p
                className="reveal-item mb-6 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", lineHeight: 1.8 }}
              >
                Our award-winning team is here to shape a garden that reflects your lifestyle, complements your home and offers a refined outdoor living experience for years to come.
              </p>
              <p
                className="reveal-item mb-8 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", lineHeight: 1.8 }}
              >
                A brief introduction is all we need to begin.
              </p>
              <p
                className="reveal-item mb-6 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", lineHeight: 1.8 }}
              >
                You can schedule a private design consultation with our Design Director, James Hartwood, and we&apos;ll guide you from there.
              </p>
              <p
                className="reveal-item mb-3"
                style={{ color: "rgba(255,255,255,0.95)", fontSize: "15px", fontWeight: 500 }}
              >
                What happens next
              </p>
              <p
                className="reveal-item mb-10 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", lineHeight: 1.8 }}
              >
                We&apos;ll review your details and contact you personally to discuss your vision, understand your priorities, and outline the best way forward for your project.
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
                  color: "#FFFFFF",
                  lineHeight: 1.4,
                }}
              >
                Arrange an initial garden design consultation and tell us about your project.
              </p>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2" style={{ color: "rgba(255,255,255,0.9)", fontSize: "13px" }}>First name <span style={{ color: "rgba(255,255,255,0.6)" }}>*</span></label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                      style={{ background: "rgba(255,255,255,0.9)", border: "none", color: "#2C2C2C", borderRadius: "4px" }}
                    />
                  </div>
                  <div>
                    <label className="block mb-2" style={{ color: "rgba(255,255,255,0.9)", fontSize: "13px" }}>Last name <span style={{ color: "rgba(255,255,255,0.6)" }}>*</span></label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                      style={{ background: "rgba(255,255,255,0.9)", border: "none", color: "#2C2C2C", borderRadius: "4px" }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2" style={{ color: "rgba(255,255,255,0.9)", fontSize: "13px" }}>Phone <span style={{ color: "rgba(255,255,255,0.6)" }}>*</span></label>
                    <div className="flex">
                      <div
                        className="flex items-center gap-1.5 px-3 text-sm shrink-0"
                        style={{ background: "rgba(255,255,255,0.85)", borderRight: "1px solid #ddd", borderRadius: "4px 0 0 4px", color: "#2C2C2C", fontSize: "13px" }}
                      >
                        <span>🇬🇧</span>
                        <span style={{ fontSize: "11px", color: "#888" }}>▾</span>
                      </div>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                        style={{ background: "rgba(255,255,255,0.9)", border: "none", color: "#2C2C2C", borderRadius: "0 4px 4px 0" }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2" style={{ color: "rgba(255,255,255,0.9)", fontSize: "13px" }}>Postcode <span style={{ color: "rgba(255,255,255,0.6)" }}>*</span></label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                      style={{ background: "rgba(255,255,255,0.9)", border: "none", color: "#2C2C2C", borderRadius: "4px" }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2" style={{ color: "rgba(255,255,255,0.9)", fontSize: "13px" }}>Email <span style={{ color: "rgba(255,255,255,0.6)" }}>*</span></label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                      style={{ background: "rgba(255,255,255,0.9)", border: "none", color: "#2C2C2C", borderRadius: "4px" }}
                    />
                  </div>
                  <div>
                    <label className="block mb-2" style={{ color: "rgba(255,255,255,0.9)", fontSize: "13px" }}>What service are you looking for?</label>
                    <select
                      className="w-full px-4 py-3 text-sm focus:outline-none appearance-none focus:ring-2 focus:ring-white/30"
                      style={{
                        background: "rgba(255,255,255,0.9)",
                        border: "none",
                        color: "#2C2C2C",
                        borderRadius: "4px",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 14px center",
                        paddingRight: "40px",
                      }}
                    >
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
                  className="w-full py-4 mt-2 text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-90"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    color: "#2C2C2C",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                    borderRadius: "4px",
                    letterSpacing: "0.5px",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INFO CARDS: 3 sage rounded cards ─── */}
      <section ref={cardsRef} className="section-padding" style={{ background: "#FFFFFF" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* FIND US */}
            <div
              className="reveal-item text-center"
              style={{
                background: "#B5BFB0",
                borderRadius: "12px",
                padding: "clamp(32px, 4vw, 56px) clamp(24px, 3vw, 40px)",
              }}
            >
              <p
                className="tracking-[0.2em] mb-5"
                style={{
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                }}
              >
                FIND US
              </p>
              <div className="flex justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="space-y-0.5">
                {locationData.address.map((line, i) => (
                  <p key={i} style={{ color: "#FFFFFF", fontSize: "14px", lineHeight: 1.6 }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* WE ARE OPEN */}
            <div
              className="reveal-item text-center"
              style={{
                background: "#B5BFB0",
                borderRadius: "12px",
                padding: "clamp(32px, 4vw, 56px) clamp(24px, 3vw, 40px)",
              }}
            >
              <p
                className="tracking-[0.2em] mb-5"
                style={{
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                }}
              >
                WE ARE OPEN
              </p>
              <div className="flex justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <rect x="7" y="13" width="2" height="2" />
                  <rect x="11" y="13" width="2" height="2" />
                  <rect x="15" y="13" width="2" height="2" />
                  <rect x="7" y="17" width="2" height="2" />
                  <rect x="11" y="17" width="2" height="2" />
                </svg>
              </div>
              <div className="space-y-0.5">
                {hoursData.hours.map((h, i) => (
                  <p key={i} style={{ color: "#FFFFFF", fontSize: "14px", lineHeight: 1.6 }}>
                    {h.day}: {h.time}
                  </p>
                ))}
              </div>
            </div>

            {/* WHAT WE ARE UP TO */}
            <div
              className="reveal-item text-center"
              style={{
                background: "#B5BFB0",
                borderRadius: "12px",
                padding: "clamp(32px, 4vw, 56px) clamp(24px, 3vw, 40px)",
              }}
            >
              <p
                className="tracking-[0.2em] mb-5"
                style={{
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                }}
              >
                WHAT WE ARE UP TO
              </p>
              <div className="flex justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="flex items-center justify-center hover:opacity-70 transition-opacity"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      border: "1.5px solid rgba(255,255,255,0.6)",
                    }}
                    title={link.label}
                  >
                    {link.label === "Instagram" && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    )}
                    {link.label === "Facebook" && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    )}
                    {link.label === "Houzz" && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2L5 6v6l-3 2v6l7-4v-6l3-2 3 2v6l7 4v-6l-3-2V6z" />
                      </svg>
                    )}
                    {link.label === "Pinterest" && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.425 1.808-2.425.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.48 1.806 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.282a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.222-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPLORE SERVICES: Images with pill buttons below ─── */}
      <section ref={servicesRef} className="section-padding" style={{ background: "#FFFFFF" }}>
        <div className="container-custom">
          <h2
            className="reveal-item font-display mb-12"
            style={{
              fontSize: "clamp(24px, 2.5vw, 36px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#2C2C2C",
              lineHeight: 1.3,
            }}
          >
            Explore More About What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {exploreServices.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="reveal-item block group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="relative overflow-hidden mb-4"
                  style={{ aspectRatio: "3/4", borderRadius: "8px" }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div
                  className="text-center py-3 px-4 transition-all duration-300 group-hover:opacity-80"
                  style={{
                    background: "#B5BFB0",
                    borderRadius: "50px",
                    color: "#FFFFFF",
                    fontSize: "13px",
                    letterSpacing: "0.02em",
                  }}
                >
                  {service.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
