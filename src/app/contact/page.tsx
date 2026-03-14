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
  const methodsRef = useReveal(".method-card");
  const infoRef = useReveal(".info-card");
  const servicesRef = useReveal(".service-reveal");
  const formRef = useReveal(".form-reveal");

  return (
    <InnerPageLayout>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO — 50/50 sage left + ghosted image right
          ═══════════════════════════════════════════ */}
      <section style={{ marginTop: "70px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "80vh" }}>
          {/* Left: Sage panel with text */}
          <div
            className="flex items-center contact-hero-left"
            style={{
              background: "#7D847B",
              padding: "clamp(40px, 5vw, 80px)",
            }}
          >
            <div>
              <h2
                className="contact-hero-item tracking-[0.1em] mb-6"
                style={{
                  fontSize: "clamp(22px, 2.5vw, 36px)",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  letterSpacing: "0.1em",
                  lineHeight: 1.2,
                  textTransform: "uppercase",
                }}
              >
                {contactHeroData.overline}
              </h2>
              <h1
                className="contact-hero-item mb-8"
                style={{
                  fontSize: "clamp(24px, 2.5vw, 36px)",
                  fontWeight: 300,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                  fontFamily: "var(--font-body)",
                }}
              >
                {contactHeroData.heading}
              </h1>
              <p
                className="contact-hero-item leading-relaxed"
                style={{
                  color: "#FFFFFF",
                  fontSize: "clamp(15px, 1.1vw, 17px)",
                  lineHeight: 1.6,
                }}
              >
                {contactHeroData.text}
              </p>
            </div>
          </div>

          {/* Right: Ghosted image (opacity 0.19 like competitor) */}
          <div className="relative hidden lg:block" style={{ minHeight: "400px", background: "#FFFFFF" }}>
            <Image
              src={contactHeroData.image}
              alt="Luxury garden design"
              fill
              className="object-cover"
              sizes="50vw"
              priority
              style={{ opacity: 0.19 }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: CONTACT METHOD CARDS — 3 cards (Email, WhatsApp, Phone)
          ═══════════════════════════════════════════ */}
      <section ref={methodsRef} style={{ background: "#FFFFFF", paddingTop: "clamp(80px, 10vw, 140px)", paddingBottom: "clamp(60px, 6vw, 80px)" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.href}
                className="method-card reveal-item block text-center transition-all duration-300 hover:shadow-lg"
                style={{
                  background: "rgba(217, 221, 214, 0.5)",
                  borderRadius: "10px",
                  padding: "clamp(40px, 4vw, 56px) clamp(24px, 3vw, 40px)",
                  textDecoration: "none",
                }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-5">
                  {method.icon === "email" && (
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#000001" strokeWidth="1.2">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 4L12 13 2 4" />
                    </svg>
                  )}
                  {method.icon === "whatsapp" && (
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="#2A2C29">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  )}
                  {method.icon === "phone" && (
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#2A2C29" strokeWidth="1.2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  )}
                </div>
                {/* Label */}
                <h3
                  className="mb-3"
                  style={{
                    fontSize: "clamp(18px, 1.5vw, 24px)",
                    fontWeight: 700,
                    color: "#545852",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {method.label.toLowerCase()}
                </h3>
                {/* Value */}
                <p
                  className="font-display"
                  style={{
                    fontSize: "clamp(14px, 1.2vw, 18px)",
                    color: "#545852",
                    letterSpacing: "0.02em",
                  }}
                >
                  {method.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-custom" style={{ background: "#FFFFFF" }}>
        <hr style={{ border: "none", borderTop: "1px solid #E5E7E3", margin: 0 }} />
      </div>

      {/* ═══════════════════════════════════════════
          SECTION 3: INFO CARDS — Find Us / We Are Open / What We Are Up To
          ═══════════════════════════════════════════ */}
      <section ref={infoRef} style={{ background: "#FFFFFF", paddingTop: "clamp(60px, 6vw, 80px)", paddingBottom: "clamp(60px, 6vw, 80px)" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* FIND US */}
            <div
              className="info-card reveal-item text-center"
              style={{
                background: "#A7B0A4",
                borderRadius: "15px",
                padding: "clamp(36px, 4vw, 56px) clamp(24px, 3vw, 40px)",
              }}
            >
              <h6
                className="mb-5"
                style={{
                  color: "#FFFFFF",
                  fontSize: "20px",
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                  fontFamily: "var(--font-body)",
                }}
              >
                FIND US
              </h6>
              <div className="flex justify-center mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="space-y-0.5">
                {locationData.address.map((line, i) => (
                  <p key={i} style={{ color: "#FFFFFF", fontSize: "17px", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* WE ARE OPEN */}
            <div
              className="info-card reveal-item text-center"
              style={{
                background: "#A7B0A4",
                borderRadius: "15px",
                padding: "clamp(36px, 4vw, 56px) clamp(24px, 3vw, 40px)",
              }}
            >
              <h6
                className="mb-5"
                style={{
                  color: "#FFFFFF",
                  fontSize: "20px",
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                  fontFamily: "var(--font-body)",
                }}
              >
                WE ARE OPEN
              </h6>
              <div className="flex justify-center mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="space-y-0.5">
                {hoursData.hours.map((h, i) => (
                  <p key={i} style={{ color: "#FFFFFF", fontSize: "17px", lineHeight: 1.6, fontFamily: "var(--font-body)" }}>
                    {h.day}: {h.time}
                  </p>
                ))}
              </div>
            </div>

            {/* WHAT WE ARE UP TO */}
            <div
              className="info-card reveal-item text-center"
              style={{
                background: "#A7B0A4",
                borderRadius: "15px",
                padding: "clamp(36px, 4vw, 56px) clamp(24px, 3vw, 40px)",
              }}
            >
              <h6
                className="mb-5"
                style={{
                  color: "#FFFFFF",
                  fontSize: "20px",
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                  fontFamily: "var(--font-body)",
                }}
              >
                WHAT WE ARE UP TO
              </h6>
              <div className="flex justify-center mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
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
                      width: "46px",
                      height: "46px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.2)",
                    }}
                    title={link.label}
                  >
                    {link.label === "Instagram" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    )}
                    {link.label === "Facebook" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    )}
                    {link.label === "Houzz" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2L5 6v6l-3 2v6l7-4v-6l3-2 3 2v6l7 4v-6l-3-2V6z" />
                      </svg>
                    )}
                    {link.label === "Pinterest" && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
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

      {/* Divider */}
      <div className="container-custom" style={{ background: "#FFFFFF" }}>
        <hr style={{ border: "none", borderTop: "1px solid #E5E7E3", margin: 0 }} />
      </div>

      {/* ═══════════════════════════════════════════
          SECTION 4: EXPLORE SERVICES — heading + 4 image cards with pill buttons
          ═══════════════════════════════════════════ */}
      <section ref={servicesRef} style={{ background: "#FFFFFF", paddingTop: "clamp(80px, 10vw, 140px)", paddingBottom: "clamp(80px, 10vw, 140px)" }}>
        <div className="container-custom">
          <h2
            className="service-reveal reveal-item mb-10"
            style={{
              fontSize: "clamp(24px, 2.5vw, 32px)",
              fontWeight: 400,
              color: "#2C2713",
              lineHeight: 1.3,
              letterSpacing: "0.02em",
              fontFamily: "var(--font-body)",
            }}
          >
            Explore More About What We Offer
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {exploreServices.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="service-reveal reveal-item block group"
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
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div
                  className="text-center py-3 px-4 transition-all duration-300 group-hover:opacity-80"
                  style={{
                    background: "#D9DDD6",
                    borderRadius: "20px",
                    color: "#000000",
                    fontSize: "clamp(11px, 0.9vw, 13px)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {service.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: CONTACT FORM — 50/50 sage left + form right
          ═══════════════════════════════════════════ */}
      <section ref={formRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "700px" }}>
          {/* Left: Sage panel with consultation text */}
          <div
            className="flex items-center"
            style={{
              background: "#7D847B",
              padding: "clamp(40px, 5vw, 80px)",
            }}
          >
            <div>
              <h4
                className="form-reveal reveal-item mb-8"
                style={{
                  fontSize: "clamp(24px, 2.5vw, 30px)",
                  fontWeight: 400,
                  color: "#F8F9F5",
                  lineHeight: 1.4,
                  fontFamily: "var(--font-body)",
                }}
              >
                Ready to transform your garden?
              </h4>
              <p
                className="form-reveal reveal-item mb-5 leading-relaxed"
                style={{ color: "#F8F9F5", fontSize: "clamp(15px, 1.1vw, 17px)", lineHeight: 1.6 }}
              >
                Our award-winning team is here to shape a garden that reflects your lifestyle, complements your home and offers a refined outdoor living experience for years to come.
              </p>
              <p
                className="form-reveal reveal-item mb-5 leading-relaxed"
                style={{ color: "#F8F9F5", fontSize: "clamp(15px, 1.1vw, 17px)", lineHeight: 1.6 }}
              >
                A brief introduction is all we need to begin.
              </p>
              <p
                className="form-reveal reveal-item mb-5 leading-relaxed"
                style={{ color: "#F8F9F5", fontSize: "clamp(15px, 1.1vw, 17px)", lineHeight: 1.6 }}
              >
                You can schedule a private design consultation with our Design Director, James Garden & Driveways, and we&apos;ll guide you from there.
              </p>
              <p
                className="form-reveal reveal-item mb-3"
                style={{ color: "#F8F9F5", fontSize: "clamp(15px, 1.1vw, 17px)", fontWeight: 600 }}
              >
                What happens next
              </p>
              <p
                className="form-reveal reveal-item mb-6 leading-relaxed"
                style={{ color: "#F8F9F5", fontSize: "clamp(15px, 1.1vw, 17px)", lineHeight: 1.6 }}
              >
                We&apos;ll review your details and contact you personally to discuss your vision, understand your priorities, and outline the best way forward for your project.
              </p>
              <p className="form-reveal reveal-item">
                <a
                  href="tel:01892489923"
                  style={{
                    color: "#F8F9F5",
                    fontSize: "clamp(16px, 1.3vw, 20px)",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  01892 489 923
                </a>
              </p>
            </div>
          </div>

          {/* Right: Form on sage bg */}
          <div
            className="flex items-center"
            style={{
              background: "#7D847B",
              padding: "clamp(40px, 5vw, 80px)",
            }}
          >
            <div className="w-full">
              <p
                className="form-reveal reveal-item mb-12"
                style={{
                  fontSize: "clamp(18px, 1.5vw, 22px)",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  lineHeight: 1.4,
                  fontFamily: "var(--font-body)",
                }}
              >
                Arrange an initial garden design consultation and tell us about your project.
              </p>
              <form className="form-reveal reveal-item" style={{ display: "flex", flexDirection: "column", gap: "28px" }} onSubmit={(e) => e.preventDefault()}>
                {/* Row 1: First name / Last name */}
                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "24px" }}>
                  <div>
                    <label className="block" style={{ color: "#FFFFFF", fontSize: "14px", marginBottom: "10px" }}>First name <span style={{ opacity: 0.6 }}>*</span></label>
                    <input
                      type="text"
                      className="w-full px-5 text-base focus:outline-none focus:ring-2 focus:ring-white/30"
                      style={{
                        background: "rgba(255,255,255,0.95)",
                        border: "none",
                        color: "#2C2C2C",
                        borderRadius: "6px",
                        height: "56px",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block" style={{ color: "#FFFFFF", fontSize: "14px", marginBottom: "10px" }}>Last name <span style={{ opacity: 0.6 }}>*</span></label>
                    <input
                      type="text"
                      className="w-full px-5 text-base focus:outline-none focus:ring-2 focus:ring-white/30"
                      style={{
                        background: "rgba(255,255,255,0.95)",
                        border: "none",
                        color: "#2C2C2C",
                        borderRadius: "6px",
                        height: "56px",
                      }}
                    />
                  </div>
                </div>

                {/* Row 2: Phone / Postcode */}
                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "24px" }}>
                  <div>
                    <label className="block" style={{ color: "#FFFFFF", fontSize: "14px", marginBottom: "10px" }}>Phone <span style={{ opacity: 0.6 }}>*</span></label>
                    <div className="flex" style={{ height: "56px" }}>
                      <div
                        className="flex items-center gap-1.5 px-4 shrink-0"
                        style={{
                          background: "rgba(255,255,255,0.88)",
                          borderRight: "1px solid #ddd",
                          borderRadius: "6px 0 0 6px",
                          color: "#2C2C2C",
                          fontSize: "14px",
                        }}
                      >
                        <span>🇬🇧</span>
                        <span style={{ fontSize: "10px", color: "#888" }}>&#9662;</span>
                      </div>
                      <input
                        type="tel"
                        className="w-full px-5 text-base focus:outline-none focus:ring-2 focus:ring-white/30"
                        style={{
                          background: "rgba(255,255,255,0.95)",
                          border: "none",
                          color: "#2C2C2C",
                          borderRadius: "0 6px 6px 0",
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block" style={{ color: "#FFFFFF", fontSize: "14px", marginBottom: "10px" }}>Postcode <span style={{ opacity: 0.6 }}>*</span></label>
                    <input
                      type="text"
                      className="w-full px-5 text-base focus:outline-none focus:ring-2 focus:ring-white/30"
                      style={{
                        background: "rgba(255,255,255,0.95)",
                        border: "none",
                        color: "#2C2C2C",
                        borderRadius: "6px",
                        height: "56px",
                      }}
                    />
                  </div>
                </div>

                {/* Row 3: Email / Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "24px" }}>
                  <div>
                    <label className="block" style={{ color: "#FFFFFF", fontSize: "14px", marginBottom: "10px" }}>Email <span style={{ opacity: 0.6 }}>*</span></label>
                    <input
                      type="email"
                      className="w-full px-5 text-base focus:outline-none focus:ring-2 focus:ring-white/30"
                      style={{
                        background: "rgba(255,255,255,0.95)",
                        border: "none",
                        color: "#2C2C2C",
                        borderRadius: "6px",
                        height: "56px",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block" style={{ color: "#FFFFFF", fontSize: "14px", marginBottom: "10px" }}>What service are you looking for?</label>
                    <select
                      className="w-full px-5 text-base focus:outline-none focus:ring-2 focus:ring-white/30 appearance-none"
                      style={{
                        background: "rgba(255,255,255,0.95)",
                        border: "none",
                        color: "#2C2C2C",
                        borderRadius: "6px",
                        height: "56px",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                        paddingRight: "44px",
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

                {/* Submit */}
                <div style={{ marginTop: "20px" }}>
                  <button
                    type="submit"
                    className="w-full text-sm tracking-wide transition-all duration-300 hover:opacity-90"
                    style={{
                      background: "#D9DDD6",
                      color: "#000000",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "14px",
                      borderRadius: "28px",
                      fontFamily: "var(--font-body)",
                      fontWeight: 400,
                      height: "56px",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
