"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { mainNav } from "@/data/navigation";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Main Navigation — white bg, no logo, links spread wide */}
      <header
        className="fixed top-0 left-0 w-full z-50 bg-white"
        style={{ borderBottom: "1px solid #e8e6e1" }}
      >
        <div
          className="flex items-center justify-between"
          style={{ padding: "0 clamp(24px, 4vw, 64px)", height: "100px" }}
        >
          {/* Logo — top left, prominent (hidden on mobile via CSS) */}
          <Link href="/" className="desktop-logo shrink-0 mr-8" style={{ alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <Image
              src="/images/logo-gd.png"
              alt="Garden & Driveways"
              width={200}
              height={100}
              style={{ objectFit: "contain", height: "55px", width: "auto" }}
              priority
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
              <span style={{
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                fontWeight: 400,
                color: "var(--charcoal)",
                letterSpacing: "0.5px",
              }}>
                Garden &amp; Driveways
              </span>
              <span style={{
                fontSize: "9px",
                fontWeight: 400,
                color: "var(--warm-grey)",
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                marginTop: "3px",
              }}>
                Paving &bull; Patios &bull; Landscaping
              </span>
            </div>
          </Link>

          {/* Desktop Nav — links spread evenly */}
          <nav className="desktop-nav items-center gap-0 flex-1">
            {mainNav.links.map((link) => (
              <div
                key={link.label}
                className="nav-item-wrapper flex-1 text-center"
                style={{ position: "relative" }}
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="nav-link transition-opacity hover:opacity-60"
                  style={{
                    color: "var(--charcoal)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                    fontSize: "15px",
                    letterSpacing: "0.3px",
                    textDecoration: "none",
                    display: "inline-block",
                    padding: "8px 0",
                  }}
                >
                  {link.label}
                  {link.children && <span style={{ marginLeft: "4px", fontSize: "12px", opacity: 0.5 }}>&#8964;</span>}
                </Link>

                {/* Dropdown Menu */}
                {link.children && (
                  <div
                    className="dropdown-menu"
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "50%",
                      transform: `translateX(-50%) translateY(${activeDropdown === link.label ? "0" : "-8px"})`,
                      opacity: activeDropdown === link.label ? 1 : 0,
                      pointerEvents: activeDropdown === link.label ? "auto" : "none",
                      transition: "all 0.25s ease",
                      background: "white",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                      borderRadius: "8px",
                      padding: "12px 0",
                      minWidth: "220px",
                      zIndex: 60,
                    }}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block transition-colors"
                        style={{
                          padding: "10px 24px",
                          color: "var(--charcoal)",
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          fontWeight: 400,
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "var(--cream)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile: Logo (hidden on desktop via CSS) */}
          <Link
            href="/"
            className="mobile-brand items-center"
            style={{ textDecoration: "none", gap: "10px" }}
          >
            <Image
              src="/images/logo-gd.png"
              alt="Garden & Driveways"
              width={160}
              height={80}
              style={{ objectFit: "contain", height: "45px", width: "auto" }}
            />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
              <span style={{
                fontFamily: "var(--font-display)",
                fontSize: "18px",
                fontWeight: 400,
                color: "var(--charcoal)",
                letterSpacing: "0.3px",
              }}>
                Garden &amp; Driveways
              </span>
              <span style={{
                fontSize: "8px",
                fontWeight: 400,
                color: "var(--warm-grey)",
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                marginTop: "2px",
              }}>
                Paving &bull; Patios &bull; Landscaping
              </span>
            </div>
          </Link>

          {/* CTA Button — outline style like reference */}
          <Link
            href={mainNav.cta.href}
            className="desktop-cta items-center gap-2 ml-4"
            style={{
              padding: "10px 28px",
              background: "transparent",
              color: "var(--charcoal)",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 400,
              borderRadius: "50px",
              border: "1px solid var(--charcoal)",
              textDecoration: "none",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
            }}
          >
            {mainNav.cta.label}
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-hamburger flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
              style={{ background: "var(--charcoal)" }}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
              style={{ background: "var(--charcoal)" }}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
              style={{ background: "var(--charcoal)" }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-transform duration-500 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ paddingTop: "100px", background: "#f7f6f3" }}
      >
        <div className="flex flex-col justify-between h-full" style={{ padding: "clamp(24px, 5vh, 48px) 40px clamp(24px, 4vh, 40px)" }}>
          {/* Nav Links — spread evenly */}
          <nav className="flex flex-col justify-between flex-1">
            {mainNav.links.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-display hover:opacity-60 transition-opacity"
                  style={{
                    color: "var(--charcoal)",
                    fontSize: "clamp(24px, 4.5vw, 32px)",
                    fontWeight: 300,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="mt-1 ml-1 flex flex-col gap-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block hover:opacity-60 transition-opacity"
                        style={{ color: "var(--warm-grey)", fontSize: "14px", letterSpacing: "0.02em" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Bottom: CTA + Contact */}
          <div className="flex flex-col gap-4 shrink-0" style={{ borderTop: "1px solid #e0ded9", paddingTop: "20px", marginTop: "20px" }}>
            <Link
              href={mainNav.cta.href}
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full justify-center"
              style={{ textAlign: "center" }}
            >
              {mainNav.cta.label} <span>→</span>
            </Link>
            <div className="flex items-center justify-between" style={{ fontSize: "12px", color: "var(--warm-grey)" }}>
              <a href="tel:07470867661" className="hover:opacity-60 transition-opacity" style={{ color: "var(--charcoal)", textDecoration: "none" }}>
                07470 867661
              </a>
              <a href="mailto:sales@gardenanddriveways.co.uk" className="hover:opacity-60 transition-opacity" style={{ color: "var(--charcoal)", textDecoration: "none" }}>
                sales@gardenanddriveways.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
