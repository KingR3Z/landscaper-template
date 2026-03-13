"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { mainNav } from "@/data/navigation";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Main Navigation */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display text-xl tracking-wide" style={{ color: scrolled ? "var(--charcoal)" : "#fff" }}>
            {mainNav.logo}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {mainNav.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-opacity hover:opacity-60"
                style={{ color: scrolled ? "var(--charcoal)" : "#fff" }}
              >
                {link.label}
                {link.children && <span className="ml-1 text-xs">&#8964;</span>}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href={mainNav.cta.href}
              className="hidden md:inline-flex btn-primary"
              style={{
                padding: "10px 24px",
                fontSize: "13px",
                background: scrolled ? "var(--sage)" : "rgba(181, 191, 176, 0.85)",
              }}
            >
              {mainNav.cta.label}
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-[5px] p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[1.5px] transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
                style={{ background: scrolled ? "var(--charcoal)" : "#fff" }}
              />
              <span
                className={`block w-6 h-[1.5px] transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
                style={{ background: scrolled ? "var(--charcoal)" : "#fff" }}
              />
              <span
                className={`block w-6 h-[1.5px] transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
                style={{ background: scrolled ? "var(--charcoal)" : "#fff" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-500 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-center h-full px-8">
          <nav className="space-y-6">
            {mainNav.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-display text-3xl text-[var(--charcoal)] hover:opacity-60 transition-opacity"
              >
                {link.label}
              </Link>
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
