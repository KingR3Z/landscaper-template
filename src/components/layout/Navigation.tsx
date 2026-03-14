"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
          style={{ padding: "0 clamp(24px, 4vw, 64px)", height: "70px" }}
        >
          {/* Desktop Nav — links spread evenly across full width, no logo */}
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

          {/* Mobile: Brand name (hidden on desktop via CSS) */}
          <Link
            href="/"
            className="mobile-brand font-display text-lg tracking-wide"
            style={{ color: "var(--charcoal)" }}
          >
            Garden & Driveways
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
        className={`fixed inset-0 z-40 bg-white transition-transform duration-500 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ paddingTop: "70px" }}
      >
        <div className="flex flex-col justify-center h-full px-8">
          <nav className="space-y-6">
            {mainNav.links.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-display text-3xl hover:opacity-60 transition-opacity"
                  style={{ color: "var(--charcoal)" }}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="mt-2 ml-4 space-y-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-lg hover:opacity-60 transition-opacity"
                        style={{ color: "var(--warm-grey)" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-12">
            <Link
              href={mainNav.cta.href}
              onClick={() => setMobileOpen(false)}
              className="btn-primary"
            >
              {mainNav.cta.label} <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
