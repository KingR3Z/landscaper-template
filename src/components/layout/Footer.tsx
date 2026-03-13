"use client";

import Link from "next/link";
import { footerData } from "@/data/navigation";

export default function Footer() {
  return (
    <footer style={{ background: "var(--sage)" }}>
      <div className="container-custom section-padding">
        {/* Logo */}
        <div className="mb-12">
          <h2
            className="font-display tracking-[0.3em]"
            style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 400, color: "var(--charcoal)" }}
          >
            {footerData.logo}
          </h2>
          <p
            className="tracking-[0.25em] mt-2"
            style={{ fontSize: "12px", fontWeight: 500, color: "var(--charcoal)" }}
          >
            {footerData.tagline}
          </p>
          <p
            className="tracking-[0.15em] mt-1"
            style={{ fontSize: "10px", fontWeight: 400, color: "var(--forest)" }}
          >
            {footerData.subtitle}
          </p>
        </div>

        <hr style={{ borderColor: "var(--charcoal)", opacity: 0.2 }} />

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {/* Contact */}
          <div>
            <h3
              className="text-xs font-semibold tracking-[0.2em] mb-6"
              style={{ color: "var(--charcoal)" }}
            >
              {footerData.contact.heading}
            </h3>
            <div className="space-y-1">
              {footerData.contact.address.map((line, i) => (
                <p key={i} className="text-sm" style={{ color: "var(--charcoal)", opacity: 0.8 }}>
                  {line}
                </p>
              ))}
            </div>
            <p className="text-sm mt-4" style={{ color: "var(--charcoal)", opacity: 0.8 }}>
              {footerData.contact.phone}
            </p>
            <p className="text-sm" style={{ color: "var(--charcoal)", opacity: 0.8 }}>
              {footerData.contact.email}
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3
              className="text-xs font-semibold tracking-[0.2em] mb-6"
              style={{ color: "var(--charcoal)" }}
            >
              {footerData.menu.heading}
            </h3>
            <nav className="space-y-2">
              {footerData.menu.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm hover:opacity-60 transition-opacity"
                  style={{ color: "var(--charcoal)", opacity: 0.8 }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 space-y-2">
              {footerData.menu.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-xs hover:opacity-60 transition-opacity"
                  style={{ color: "var(--charcoal)", opacity: 0.6 }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3
              className="text-xs font-semibold tracking-[0.2em] mb-6"
              style={{ color: "var(--charcoal)" }}
            >
              {footerData.socials.heading}
            </h3>
            <nav className="space-y-2">
              {footerData.socials.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm hover:opacity-60 transition-opacity"
                  style={{ color: "var(--charcoal)", opacity: 0.8 }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8" style={{ borderTop: "1px solid rgba(44, 44, 44, 0.15)" }}>
          <p className="text-xs" style={{ color: "var(--charcoal)", opacity: 0.5 }}>
            &copy; {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
